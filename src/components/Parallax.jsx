import React, { useEffect } from "react";

const Parallax = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const layers = document.querySelectorAll(".parallax-layer");
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      layers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.depth);
        const moveX = x * depth * 50;
        const moveY = y * depth * 50;

        // Just apply parallax motion
        layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-screen -z-10 overflow-hidden">
      <img
        src="/assets/spaceneedle.png"
        alt="Space Needle"
        className="parallax-layer hero-image"
        data-depth="0.05"
      />
      <img
        src="/assets/raven.png"
        alt="Raven"
        className="parallax-layer hero-image"
        data-depth="0.2"
      />
      <img
        src="/assets/stars1.png"
        alt="Raven"
        className="parallax-layer hero-image"
        data-depth="0.1"
      />
      <img
        src="/assets/stars2.png"
        alt="Raven"
        className="parallax-layer hero-image"
        data-depth="0.15"
      />
      <img
        src="/assets/stars3.png"
        alt="Raven"
        className="parallax-layer hero-image"
        data-depth="0.05"
      />
      <img
        src="/assets/stars4.png"
        alt="Raven"
        className="parallax-layer hero-image"
        data-depth="0.25"
      />
    </div>
    
  );
};

export default Parallax;
