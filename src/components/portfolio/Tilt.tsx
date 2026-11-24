import { useRef, type PointerEvent, type ReactNode } from "react";

/** Gentle 3D tilt that follows the mouse. Only active for mouse pointers (not touch). */
export function Tilt({ children, max = 5 }: { children: ReactNode; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const reduce = () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse" || reduce()) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = "transform 80ms linear";
    el.style.transform = `perspective(1100px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg) translateZ(0)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 450ms cubic-bezier(0.2, 0.7, 0.2, 1)";
    el.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="will-change-transform"
    >
      {children}
    </div>
  );
}
