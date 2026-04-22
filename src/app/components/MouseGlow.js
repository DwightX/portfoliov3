"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
