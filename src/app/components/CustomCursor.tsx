"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const cursorOuterRef = useRef<HTMLDivElement>(null);
    const cursorInnerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        // Detect touch devices to avoid binding expensive listeners
        if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) {
            setIsMobile(true);
            return;
        }

        let animationFrameId: number;
        let clientX = -100;
        let clientY = -100;

        const render = () => {
            if (cursorOuterRef.current) {
                const baseOffset = 12;
                cursorOuterRef.current.style.transform = `translate3d(${clientX - baseOffset}px, ${clientY - baseOffset}px, 0)`;
            }
            animationFrameId = requestAnimationFrame(render);
        };

        // Kick off the tracking rendering loop
        animationFrameId = requestAnimationFrame(render);

        const updatePosition = (e: MouseEvent) => {
            clientX = e.clientX;
            clientY = e.clientY;
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            try {
                const target = e.target as HTMLElement;
                if (!target || !target.tagName) return;

                const isClickable =
                    target.tagName.toLowerCase() === "button" ||
                    target.tagName.toLowerCase() === "a" ||
                    target.closest("button") ||
                    target.closest("a") ||
                    window.getComputedStyle(target).cursor === "pointer";

                if (cursorInnerRef.current) {
                    cursorInnerRef.current.style.transform = isClickable ? "scale(2)" : "scale(1)";
                }
            } catch (error) {
                // Defensively catch style calculation errors if target is detached
            }
        };

        const handleMouseDown = () => {
            if (cursorInnerRef.current) {
                cursorInnerRef.current.style.backgroundColor = "rgba(220, 220, 220, 0.8)";
            }
        };

        const handleMouseUp = () => {
            if (cursorInnerRef.current) {
                cursorInnerRef.current.style.backgroundColor = "rgba(150, 150, 150, 0.4)";
            }
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", updatePosition, { passive: true });
        window.addEventListener("mouseover", handleMouseOver, { passive: true });
        window.addEventListener("mousedown", handleMouseDown, { passive: true });
        window.addEventListener("mouseup", handleMouseUp, { passive: true });
        document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
        document.addEventListener("mouseenter", handleMouseEnter, { passive: true });

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("mousemove", updatePosition);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [isVisible]);

    // Prevents hydration mismatches between Server HTML and initial Client HTML
    if (!isMounted || isMobile) return null;

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
                    transition: "transform 0.15s ease-out, background-color 0.15s ease-out",
                    willChange: "transform",
                    transform: "scale(1)",
                }}
            />
        </div>
    );
}
