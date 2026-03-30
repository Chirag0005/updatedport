import React, { useEffect, useRef } from 'react';

const Background3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas dimensions
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Create a dynamic particle swarm
    const stars = [];
    const numStars = window.innerWidth > 768 ? 1000 : 400; // Optimize for mobile
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width * 2 - canvas.width,
        y: Math.random() * canvas.height * 2 - canvas.height,
        z: Math.random() * 2000,
        radius: 0.8 + Math.random() * 1.5,
      });
    }

    // Parallax tracking variables
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;

    const onMouseMove = (e) => {
      targetMouseX = (e.clientX - canvas.width / 2) * 0.15;
      targetMouseY = (e.clientY - canvas.height / 2) * 0.15;
    };

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = (currentScrollY - lastScrollY) * 0.2; // Increase speed on scroll
      lastScrollY = currentScrollY;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll, { passive: true });

    // Animation loop
    const draw = () => {
      // Cinematic motion blur / bloom effect by not fully clearing the canvas
      ctx.fillStyle = 'rgba(2, 6, 23, 0.4)'; // slate-950
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Smooth lerp for mouse parallax
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;
      
      // Decay scroll velocity back to normal
      scrollVelocity *= 0.95;

      stars.forEach((star) => {
        // Base flying speed + scroll boost
        star.z -= (3 + Math.abs(scrollVelocity));

        // Recycle star when it flies past camera
        if (star.z <= 0) {
          star.x = Math.random() * canvas.width * 2 - canvas.width;
          star.y = Math.random() * canvas.height * 2 - canvas.height;
          star.z = 2000;
        }

        // 3D projection math
        const k = 1400 / star.z;
        const px = star.x * k + centerX - currentMouseX * k;
        const py = star.y * k + centerY - currentMouseY * k;

        // Render if within screen bounds
        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          const size = star.radius * k;
          // Fade in from distance, fade out near camera
          const opacity = Math.min(1, Math.max(0.1, 1.5 - (star.z / 2000)));

          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          
          // Add stunning variation with cyan and purple-blue and white
          const rand = Math.random();
          if (rand > 0.98) {
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 1.5})`; 
          } else if (rand > 0.8) {
            ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`; // blue-500
          } else {
            ctx.fillStyle = `rgba(34, 211, 238, ${opacity})`; // cyan-400
          }
          
          // Glow effect (Bloom simulation)
          ctx.shadowBlur = 10 * k;
          ctx.shadowColor = ctx.fillStyle;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-90 mix-blend-screen"
    />
  );
};

export default Background3D;
