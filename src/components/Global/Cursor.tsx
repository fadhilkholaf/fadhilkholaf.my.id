"use client";

import { useEffect, useState } from "react";

const Cursor = () => {
  const [cursor, setCursor] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMove = (e: PointerEvent | TouchEvent) => {
      if (e instanceof PointerEvent) {
        setCursor({ x: e.clientX, y: e.clientY });
      } else if (e instanceof TouchEvent) {
        const touch = e.touches[0];
        setCursor({ x: touch.clientX, y: touch.clientY });
      }
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("touchmove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, []);

  return (
    <video
      className="h-16 w-16 object-cover fixed -translate-x-8 -translate-y-8 transition-all ease-out mix-blend-exclusion contrast-200 z-[999] pointer-events-none"
      style={{ top: cursor.y, left: cursor.x }}
      autoPlay
      loop
      muted
      preload="none"
    >
      <source src="/videos/cursor.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Cursor;
