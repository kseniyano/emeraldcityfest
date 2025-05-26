import React, { useEffect } from "react";

const ParallaxOwl = () => {
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
    <div className="pointer-events-none relative h-full overflow-hidden">
      <img
        src="/assets/owl.png"
        alt=""
        className="parallax-layer absolute object-contain"
      />
      <img
        src="/assets/eyes.png"
        alt=""
        className="parallax-layer absolute object-bottom object-contain"
        data-depth="0.02"
      />
    </div>
    
  );
};

export default ParallaxOwl;
