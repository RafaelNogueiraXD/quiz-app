'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';

export function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = '#00ff00';
    ctx.font = '12px monospace';

    const drawSpiral = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      let angle = 0;
      let radius = 0;

      while (radius < Math.max(canvas.width, canvas.height)) {
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        ctx.fillText(Math.random() < 0.5 ? '0' : '1', x, y);
        angle += 0.1;
        radius += 0.3;
      }

      requestAnimationFrame(drawSpiral);
    };

    drawSpiral();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full opacity-40 pointer-events-none"
      aria-hidden="true"
    />
  );
}