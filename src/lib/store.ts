import { create } from "zustand";

export type CursorState = "default" | "hover" | "drag" | "view" | "hidden";

interface AppState {
  // Cursor
  cursorText: string;
  cursorVariant: CursorState;
  setCursor: (variant: CursorState, text?: string) => void;

  // WebGL & Scroll Sync
  scrollProgress: number;
  setScrollProgress: (progress: number) => void;
  scrollVelocity: number;
  setScrollVelocity: (velocity: number) => void;

  // Hero canvas 3D active state
  activeSection: string;
  setActiveSection: (section: string) => void;

  // Menu Overlay
  isMenuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  toggleMenu: () => void;

  // Preloader
  isLoaded: boolean;
  setIsLoaded: (loaded: boolean) => void;

  // Reduced motion
  reducedMotion: boolean;
  setReducedMotion: (reduced: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  cursorText: "",
  cursorVariant: "default",
  setCursor: (variant, text = "") => set({ cursorVariant: variant, cursorText: text }),

  scrollProgress: 0,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  scrollVelocity: 0,
  setScrollVelocity: (velocity) => set({ scrollVelocity: velocity }),

  activeSection: "hero",
  setActiveSection: (section) => set({ activeSection: section }),

  isMenuOpen: false,
  setMenuOpen: (open) => set({ isMenuOpen: open }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),

  isLoaded: false,
  setIsLoaded: (loaded) => set({ isLoaded: loaded }),

  reducedMotion: false,
  setReducedMotion: (reduced) => set({ reducedMotion: reduced }),
}));
