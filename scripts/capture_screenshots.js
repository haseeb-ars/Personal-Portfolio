import puppeteer from 'puppeteer';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const projects = [
  { slug: 'tormino', url: 'https://tormino.com/' },
  { slug: 'carrera-world', url: 'https://en.carreraworld.com/' },
  { slug: 'drink-gravity', url: 'https://drinkgravity.com.au/' },
  { slug: 'love-good-fats', url: 'https://lovegoodfats.com/' },
  { slug: 'almach', url: 'https://almach.nl/' },
  { slug: 'mavari-pharmacy', url: 'https://mavaripharmacy.com/' }
];

const BASE_DIR = path.join(process.cwd(), 'public', 'work');

async function capture() {
  console.log('Starting puppeteer browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const proj of projects) {
    const dir = path.join(BASE_DIR, proj.slug);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    console.log(`\nProcessing ${proj.slug} (${proj.url})...`);

    // Desktop Screenshot
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900 });
      await page.goto(proj.url, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(r => setTimeout(r, 2000)); // Allow animations/popups to settle

      // Try closing cookie banners if present
      try {
        await page.evaluate(() => {
          const selectors = ['#didomi-notice-agree-button', '.cookie-accept', '#onetrust-accept-btn-handler', 'button[id*="accept"]'];
          for (const s of selectors) {
            const btn = document.querySelector(s);
            if (btn) btn.click();
          }
        });
      } catch (e) {}

      const rawDesktop = path.join(dir, 'desktop_raw.png');
      await page.screenshot({ path: rawDesktop, fullPage: false });

      // Scroll down for gallery 1
      await page.evaluate(() => window.scrollBy(0, 800));
      await new Promise(r => setTimeout(r, 1000));
      const rawGallery1 = path.join(dir, 'gallery1_raw.png');
      await page.screenshot({ path: rawGallery1, fullPage: false });

      await page.close();

      // Mobile Screenshot
      const mobilePage = await browser.newPage();
      await mobilePage.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
      await mobilePage.goto(proj.url, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(r => setTimeout(r, 2000));

      const rawMobile = path.join(dir, 'mobile_raw.png');
      await mobilePage.screenshot({ path: rawMobile, fullPage: false });

      await mobilePage.close();

      // Optimize with Sharp (resize to <= 1024px max dimension, save as WebP)
      await sharp(rawDesktop)
        .resize({ width: 1024, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(path.join(dir, 'cover.webp'));

      await sharp(rawGallery1)
        .resize({ width: 1024, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(path.join(dir, 'gallery-1.webp'));

      await sharp(rawMobile)
        .resize({ width: 768, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(path.join(dir, 'mobile.webp'));

      // Clean up raw PNGs
      if (fs.existsSync(rawDesktop)) fs.unlinkSync(rawDesktop);
      if (fs.existsSync(rawGallery1)) fs.unlinkSync(rawGallery1);
      if (fs.existsSync(rawMobile)) fs.unlinkSync(rawMobile);

      console.log(`Successfully captured and optimized WebP images for ${proj.slug}`);
    } catch (err) {
      console.error(`Failed to capture ${proj.slug}:`, err.message);
    }
  }

  await browser.close();
  console.log('\nAll project screenshots finished!');
}

capture();
