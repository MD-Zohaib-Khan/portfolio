"use client";

import React, { useEffect, useRef } from "react";

interface ParticleNetworkProps {
  className?: string;
  particleColor?: string;
  lineColor?: string;
  particleCount?: number;
  interactiveRadius?: number;
  withBackground?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseVx: number;
  baseVy: number;
  alpha: number;
}

export default function ParticleNetwork({
  className = "",
  particleColor = "rgba(52, 211, 153, 0.95)", // Luminous Glowing Emerald
  lineColor = "rgba(45, 212, 191, 0.4)",      // Rich Teal Line
  particleCount,
  interactiveRadius = 240,                    // Wide prominent cursor web
  withBackground = false,
}: ParticleNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Mouse tracking state
    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    // Responsive Canvas Resize handling High-DPI screens
    const handleResize = () => {
      const parent = canvas.parentElement;
      const width = parent ? parent.clientWidth : window.innerWidth;
      const height = parent ? parent.clientHeight : window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initParticles(width, height);
    };

    // Initialize particles with bold size and smooth velocities
    const initParticles = (width: number, height: number) => {
      const area = width * height;
      const count = particleCount || Math.min(Math.max(Math.floor(area / 11000), 55), 130);
      
      particles = [];
      for (let i = 0; i < count; i++) {
        const vx = (Math.random() - 0.5) * 0.9;
        const vy = (Math.random() - 0.5) * 0.9;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: vx,
          vy: vy,
          baseVx: vx,
          baseVy: vy,
          radius: Math.random() * 2.2 + 2.5, // Larger, prominent glowing balls (2.5px - 4.7px)
          alpha: Math.random() * 0.3 + 0.7,
        });
      }
    };

    // Track mouse position over canvas parent or window
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
        mouse.active = true;
      }
    };

    const targetElem = canvas.parentElement || window;
    targetElem.addEventListener("mousemove", handleMouseMove as EventListener);
    targetElem.addEventListener("mouseleave", handleMouseLeave as EventListener);
    targetElem.addEventListener("touchmove", handleTouchMove as EventListener, { passive: true });
    targetElem.addEventListener("touchend", handleMouseLeave as EventListener);

    window.addEventListener("resize", handleResize);
    handleResize();

    // Main Render Loop
    const render = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.clearRect(0, 0, width, height);

      // Render green background gradient if requested
      if (withBackground) {
        const bgGradient = ctx.createLinearGradient(0, 0, width, height);
        bgGradient.addColorStop(0, "#022c22");
        bgGradient.addColorStop(0.5, "#042f2e");
        bgGradient.addColorStop(1, "#064e3b");
        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, width, height);
      }

      // 1. Update Particle Physics & Spring Attraction
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Smoothly return toward natural drift velocity
        p.vx += (p.baseVx - p.vx) * 0.03;
        p.vy += (p.baseVy - p.vy) * 0.03;

        // Mouse attraction spring effect: pull particles organically towards cursor position
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < interactiveRadius && dist > 0) {
            // Elastic spring pull: particles stretch towards mouse, creating a live spiderweb effect
            const pullRatio = (1 - dist / interactiveRadius);
            const springForce = pullRatio * 0.18;
            p.vx += (dx / dist) * springForce;
            p.vy += (dy / dist) * springForce;

            // Apply light damping so particles move smoothly without jitter
            p.vx *= 0.94;
            p.vy *= 0.94;
          }
        }

        // Move particle position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen boundaries cleanly
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
      }

      // 2. Draw Node-to-Node Constellation Lines (Thicker, prominent & beautiful)
      const maxConnectDist = 165;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const normDist = 1 - dist / maxConnectDist;
            const alpha = normDist * 0.45;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(45, 212, 191, ${alpha})`;
            ctx.lineWidth = 1.1; // Thicker, clearer lines
            ctx.stroke();
          }
        }
      }

      // 3. Draw Cursor Accumulation Network (Stunning Spiderweb Web attached to cursor)
      if (mouse.active) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < interactiveRadius) {
            const normDist = 1 - dist / interactiveRadius;
            const alpha = Math.pow(normDist, 1.2) * 0.75; // Rich radiant opacity

            // Draw bold connector line from cursor to node
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(52, 211, 153, ${alpha})`;
            ctx.lineWidth = 1.6; // Bold, prominent web line
            ctx.stroke();
          }
        }

        // Draw Multi-layered Glowing Cursor Hub
        // Outer aura circle
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, interactiveRadius * 0.45, 0, Math.PI * 2);
        const auraGrad = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, interactiveRadius * 0.45
        );
        auraGrad.addColorStop(0, "rgba(52, 211, 153, 0.2)");
        auraGrad.addColorStop(1, "rgba(52, 211, 153, 0)");
        ctx.fillStyle = auraGrad;
        ctx.fill();

        // Inner glowing cursor node dot
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = "#a7f3d0";
        ctx.shadowBlur = 14;
        ctx.shadowColor = "#34d399";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 4. Draw Luminous Node Balls with Strong Outer Glow
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Outer glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(52, 211, 153, 0.15)";
        ctx.fill();

        // Inner core ball
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(52, 211, 153, 0.85)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      targetElem.removeEventListener("mousemove", handleMouseMove as EventListener);
      targetElem.removeEventListener("mouseleave", handleMouseLeave as EventListener);
      targetElem.removeEventListener("touchmove", handleTouchMove as EventListener);
      targetElem.removeEventListener("touchend", handleMouseLeave as EventListener);
    };
  }, [particleColor, lineColor, particleCount, interactiveRadius, withBackground]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto z-0 ${className}`}
    />
  );
}
