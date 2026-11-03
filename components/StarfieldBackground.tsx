"use client";

import React, { useEffect, useRef } from "react";

interface StarfieldBackgroundProps {
  isDark: boolean;
}

interface Star {
  x: number;
  y: number;
  z: number;
  pz: number;
  size: number;
  color: string;
}

export default function StarfieldBackground({ isDark }: StarfieldBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const numStars = 650;
    const maxDepth = 1500;
    const speed = 0.85;

    // Palette of subtle star colors (Apple / Electric Blue deep space)
    const starColorsDark = [
      "rgba(255, 255, 255, ",
      "rgba(224, 231, 255, ", // Soft Ice Blue
      "rgba(147, 197, 253, ", // Electric Blue tint
      "rgba(199, 210, 254, ", // Soft Indigo
    ];

    const starColorsLight = [
      "rgba(100, 116, 139, ",
      "rgba(59, 130, 246, ",
      "rgba(99, 102, 241, ",
    ];

    // Initialize 3D Stars
    const stars: Star[] = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: (Math.random() - 0.5) * width * 2.2,
        y: (Math.random() - 0.5) * height * 2.2,
        z: Math.random() * maxDepth,
        pz: maxDepth,
        size: Math.random() * 1.5 + 0.5,
        color:
          starColorsDark[Math.floor(Math.random() * starColorsDark.length)],
      });
    }

    // Parallax interaction with gentle mouse ease
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.08;
      targetMouseY = (e.clientY - height / 2) * 0.08;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Animation Loop
    const render = () => {
      // Ease mouse
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2 + mouseX;
      const cy = height / 2 + mouseY;
      const colors = isDark ? starColorsDark : starColorsLight;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        star.pz = star.z;
        star.z -= speed;

        // Reset star when it passes the camera
        if (star.z <= 0) {
          star.z = maxDepth;
          star.pz = maxDepth;
          star.x = (Math.random() - 0.5) * width * 2.2;
          star.y = (Math.random() - 0.5) * height * 2.2;
        }

        // 3D Perspective Projection
        const fov = 350;
        const k = fov / star.z;
        const px = star.x * k + cx;
        const py = star.y * k + cy;

        // Prev position for subtle star trail
        const pk = fov / star.pz;
        const prevX = star.x * pk + cx;
        const prevY = star.y * pk + cy;

        // Skip if outside screen
        if (px < -50 || px > width + 50 || py < -50 || py > height + 50) {
          continue;
        }

        // Depth-based intensity
        const depthRatio = 1 - star.z / maxDepth;
        const alpha = Math.min(Math.max(depthRatio * (isDark ? 0.95 : 0.45), 0.08), 1);
        const radius = Math.max(star.size * depthRatio * 2.2, 0.4);

        // Pick color
        const colorBase = colors[i % colors.length];

        ctx.beginPath();
        // Subtle 3D star streak line
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(px, py);
        ctx.strokeStyle = colorBase + alpha * 0.6 + ")";
        ctx.lineWidth = radius * 0.8;
        ctx.stroke();

        // Star core
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fillStyle = colorBase + alpha + ")";
        ctx.fill();

        // Subtle glow for closest bright stars
        if (depthRatio > 0.8 && isDark) {
          ctx.beginPath();
          ctx.arc(px, py, radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0, 112, 243, " + alpha * 0.25 + ")";
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      style={{ opacity: isDark ? 0.95 : 0.45 }}
    />
  );
}
