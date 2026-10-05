// Generates the layered tree-shadow assets in /public/shadows.
// Usage: node scripts/generate-shadows.mjs
// Each layer is a seeded, procedurally drawn branch with leaves, rasterised and
// blurred by a different amount to fake depth of field (foreground -> distant).
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "public", "shadows");
fs.mkdirSync(OUT, { recursive: true });

const W = 2000;
const H = 1400;
const COLOR = "#46443c"; // warm grey; final strength is controlled in CSS

function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function build(cfg) {
  const r = rng(cfg.seed);
  const rand = (a, b) => a + r() * (b - a);
  const parts = [];

  const leaf = (x, y, ang, size) => {
    const l = size * rand(0.75, 1.25);
    const w = l * rand(cfg.leafWidth[0], cfg.leafWidth[1]);
    const deg = (ang * 180) / Math.PI + 90 + rand(-12, 12);
    const op = rand(0.55, 1).toFixed(2);
    // lanceolate leaf with slight asymmetry
    const d = `M0,0 C${w},${-l * 0.25} ${w * 1.1},${-l * 0.7} 0,${-l} C${-w * 0.9},${-l * 0.7} ${-w},${-l * 0.28} 0,0Z`;
    parts.push(
      `<path d="${d}" transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${deg.toFixed(1)})" opacity="${op}"/>`
    );
  };

  const branch = (x, y, ang, len, th, depth) => {
    const segs = Math.max(5, Math.floor(len / 55));
    const bend = rand(-0.05, 0.05);
    let px = x;
    let py = y;
    let a = ang;
    for (let i = 0; i < segs; i++) {
      a += bend + rand(-0.09, 0.09);
      const sl = len / segs;
      const nx = px + Math.cos(a) * sl;
      const ny = py + Math.sin(a) * sl;
      const w = Math.max(1.2, th * (1 - (i / segs) * 0.75));
      parts.push(
        `<line x1="${px.toFixed(1)}" y1="${py.toFixed(1)}" x2="${nx.toFixed(1)}" y2="${ny.toFixed(1)}" stroke="${COLOR}" stroke-width="${w.toFixed(1)}" stroke-linecap="round"/>`
      );
      const side = r() < 0.5 ? -1 : 1;
      if (depth > 0 && i >= 1 && r() < cfg.twigChance) {
        branch(nx, ny, a + side * rand(0.45, 1.0), len * rand(0.28, 0.5), th * 0.55, depth - 1);
      }
      if (r() < cfg.leafChance) {
        leaf(nx, ny, a + side * rand(0.5, 1.2), rand(cfg.leafSize[0], cfg.leafSize[1]));
      }
      px = nx;
      py = ny;
    }
    // leaves clustered at the tip
    const tips = depth === 0 ? 3 : 2;
    for (let k = 0; k < tips; k++) {
      leaf(px, py, a + rand(-0.7, 0.7), rand(cfg.leafSize[0], cfg.leafSize[1]));
    }
  };

  for (const b of cfg.branches) {
    branch(b.x, b.y, b.ang, b.len, b.th, b.depth ?? cfg.depth);
  }
  return parts.join("");
}

async function render(name, cfg) {
  const s = cfg.scale;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${Math.round(W * s)}" height="${Math.round(H * s)}" viewBox="0 0 ${W} ${H}"><g fill="${COLOR}">${build(cfg)}</g></svg>`;
  const file = path.join(OUT, `${name}.webp`);
  const w = Math.round(W * s);
  const h = Math.round(H * s);
  const blurred = await sharp(Buffer.from(svg)).blur(cfg.blur * s).png().toBuffer();
  // Feather the borders: clipped leaves would otherwise form a straight, visible edge.
  const inset = Math.round(Math.min(w, h) * 0.07);
  const mask = await sharp(
    Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect x="${inset}" y="${inset}" width="${w - inset * 2}" height="${h - inset * 2}" fill="#fff"/></svg>`
    )
  )
    .blur(Math.max(1, inset * 0.45))
    .png()
    .toBuffer();
  await sharp(blurred)
    .composite([{ input: mask, blend: "dest-in" }])
    .webp({ quality: 62, alphaQuality: 70, effort: 6 })
    .toFile(file);
  const kb = (fs.statSync(file).size / 1024).toFixed(1);
  console.log(`${name}.webp  ${kb} KB`);
}

// A — foreground branch: enters top-right, closest to the "wall", least blurred
await render("a-branch", {
  seed: 11,
  scale: 0.75,
  blur: 5,
  depth: 3,
  twigChance: 0.75,
  leafChance: 0.7,
  leafSize: [70, 120],
  leafWidth: [0.16, 0.24],
  branches: [
    { x: W + 60, y: -50, ang: 2.55, len: 1500, th: 26 },
    { x: W + 60, y: 260, ang: 3.0, len: 900, th: 16, depth: 2 },
  ],
});

// B — large out-of-focus leaves, entering from the right edge
await render("b-large-leaves", {
  seed: 29,
  scale: 0.5,
  blur: 20,
  depth: 2,
  twigChance: 0.7,
  leafChance: 0.8,
  leafSize: [160, 250],
  leafWidth: [0.18, 0.28],
  branches: [
    { x: W + 80, y: 760, ang: 3.35, len: 1200, th: 22 },
    { x: W + 80, y: 1200, ang: 3.6, len: 900, th: 16 },
  ],
});

// C — fine leaves: small, soft texture drifting down from the top edge
await render("c-fine-leaves", {
  seed: 47,
  scale: 0.75,
  blur: 2.5,
  depth: 4,
  twigChance: 0.85,
  leafChance: 0.85,
  leafSize: [26, 48],
  leafWidth: [0.2, 0.3],
  branches: [
    { x: 1500, y: -60, ang: 1.95, len: 1000, th: 9 },
    { x: 700, y: -60, ang: 1.3, len: 800, th: 7 },
  ],
});

// D — very distant, heavily blurred masses, anchored low-left to balance the page
await render("d-distant", {
  seed: 73,
  scale: 0.3,
  blur: 46,
  depth: 2,
  twigChance: 0.7,
  leafChance: 0.85,
  leafSize: [220, 340],
  leafWidth: [0.2, 0.3],
  branches: [
    { x: -80, y: 1250, ang: -0.45, len: 1300, th: 30 },
    { x: W + 60, y: 1450, ang: 3.9, len: 1100, th: 24 },
  ],
});
