"use client";

import React, { Component, type ReactNode, useEffect, useState } from "react";
import dynamic from "next/dynamic";

class CanvasErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn("3D Canvas rendering bypassed gracefully:", error.message);
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const DynamicSceneContainer = dynamic(() => import("@/components/canvas/SceneContainer"), {
  ssr: false,
});

export default function ClientCanvasWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <CanvasErrorBoundary>
      <DynamicSceneContainer />
    </CanvasErrorBoundary>
  );
}
