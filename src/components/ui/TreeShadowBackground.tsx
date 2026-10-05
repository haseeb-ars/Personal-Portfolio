/**
 * Site-wide atmospheric background: soft tree/leaf shadows on a warm wall.
 *
 * Structure (all fixed, non-interactive, outside the layout flow):
 *   field        -> fades intensity with page scroll (CSS scroll-driven, no JS)
 *    └ drift     -> slight scroll parallax per layer
 *       └ layer  -> very slow, independent organic sway (30-120s cycles)
 *
 * Layers are pre-blurred transparent WebPs (see scripts/generate-shadows.mjs),
 * so the browser only composites; nothing blurs or repaints at runtime.
 */
export default function TreeShadowBackground() {
  return (
    <div className="shadow-field" aria-hidden="true">
      <div className="shadow-drift" style={{ "--sx": -4, "--sy": -10 } as React.CSSProperties}>
        <div className="shadow-layer shadow-d" />
      </div>
      <div className="shadow-drift" style={{ "--sx": -3, "--sy": -6 } as React.CSSProperties}>
        <div className="shadow-layer shadow-b" />
      </div>
      <div className="shadow-drift" style={{ "--sx": -6, "--sy": -16 } as React.CSSProperties}>
        <div className="shadow-layer shadow-a" />
      </div>
      <div className="shadow-drift" style={{ "--sx": -6, "--sy": -14 } as React.CSSProperties}>
        <div className="shadow-layer shadow-c" />
      </div>
    </div>
  );
}
