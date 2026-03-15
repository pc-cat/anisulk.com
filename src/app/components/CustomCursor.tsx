"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const cursorOuterRef = useRef<HTMLDivElement>(null);
    const cursorInnerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let animationFrameId: number;
        let clientX = -100;
        let clientY = -100;

        const render = () => {
            if (cursorOuterRef.current) {
                // Base offset to center the 24x24 cursor
                const baseOffset = 12;
                cursorOuterRef.current.style.transform = `translate3d(${clientX - baseOffset}px, ${clientY - baseOffset}px, 0)`;
            }
            animationFrameId = requestAnimationFrame(render);
        };

        // Start animation loop
        animationFrameId = requestAnimationFrame(render);

        const updatePosition = (e: MouseEvent) => {
            clientX = e.clientX;
            clientY = e.clientY;
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName.toLowerCase() === "button" ||
                target.tagName.toLowerCase() === "a" ||
                target.closest("button") ||
                target.closest("a") ||
                window.getComputedStyle(target).cursor === "pointer";

            if (cursorInnerRef.current) {
                cursorInnerRef.current.style.transform = isClickable ? "scale(2)" : "scale(1)";
            }
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", updatePosition, { passive: true });
        window.addEventListener("mouseover", handleMouseOver, { passive: true });
        document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
        document.addEventListener("mouseenter", handleMouseEnter, { passive: true });

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("mousemove", updatePosition);
            window.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [isVisible]);

    if (typeof window === "undefined") return null;

    return (
        <div
            ref={cursorOuterRef}
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            style={{
                width: "24px",
                height: "24px",
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.3s ease-out",
                willChange: "transform",
            }}
        >
            <div
                ref={cursorInnerRef}
                className="w-full h-full rounded-full"
                style={{
                    backgroundColor: "rgba(150, 150, 150, 0.4)",
                    WebkitBackdropFilter: "blur(4px)",
                    backdropFilter: "blur(4px)",
                    transition: "transform 0.15s ease-out",
                    willChange: "transform",
                    transform: "scale(1)",
                }}
            />
        </div>
    );
}
