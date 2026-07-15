import { useEffect, useRef } from "react";

const REST = "rotateX(18deg) rotateY(-22deg)";

export default function HeroCube() {
  const wrapRef = useRef(null);
  const cubeRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wrap = wrapRef.current;
    const cube = cubeRef.current;
    if (!wrap || !cube || prefersReduced) return;

    const handleMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      const rotateY = -22 + px * 14;
      const rotateX = 18 - py * 14;
      cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleLeave = () => {
      cube.style.transform = REST;
    };

    wrap.addEventListener("mousemove", handleMove);
    wrap.addEventListener("mouseleave", handleLeave);
    return () => {
      wrap.removeEventListener("mousemove", handleMove);
      wrap.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div ref={wrapRef} className="hero-cube-wrap" aria-hidden="true">
      <div className="hero-cube-scene">
        <div ref={cubeRef} className="hero-cube" style={{ transform: REST }}>
          <div className="hero-cube-face hero-cube-front">
            <span className="hero-cube-dot" />
          </div>
          <div className="hero-cube-face hero-cube-back" />
          <div className="hero-cube-face hero-cube-right" />
          <div className="hero-cube-face hero-cube-left" />
          <div className="hero-cube-face hero-cube-top" />
          <div className="hero-cube-face hero-cube-bottom" />
        </div>
      </div>
    </div>
  );
}
