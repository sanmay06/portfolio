import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Background() {
    const containerRef = useRef(null);
    const orbsRef = useRef([]);
    const gridRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const orbs = orbsRef.current.filter(Boolean);
        const grid = gridRef.current;
        let rafId;
        let mouseTimeout;

        // Animate orbs with independent floating motion
        const orbTimelines = orbs.map((orb, i) => {
            const tl = gsap.timeline({ repeat: -1 });

            // Gentle floating motion
            tl.to(orb, {
                x: `+=${Math.sin(i * 1.7) * 80}`,
                y: `+=${Math.cos(i * 1.3) * 60}`,
                scale: 1 + Math.sin(i * 0.8) * 0.2,
                duration: 8 + i * 2,
                ease: "sine.inOut",
                yoyo: true,
            }, 0);

            // Color pulse
            gsap.to(orb, {
                opacity: 0.4 + Math.sin(i) * 0.2,
                duration: 4 + i * 0.5,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
            });

            return tl;
        });

        // Smooth mouse parallax
        const handleMouseMove = (e) => {
            mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
            mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
        };

        const animateFrame = () => {
            const { x, y } = mouseRef.current;

            orbs.forEach((orb, i) => {
                const depth = (i + 1) * 8;
                gsap.to(orb, {
                    x: `+=${x * depth * 0.1}`,
                    y: `+=${y * depth * 0.1}`,
                    duration: 1.5,
                    ease: "power2.out",
                    overwrite: "auto",
                });
            });

            // Subtle grid parallax
            if (grid) {
                gsap.to(grid, {
                    x: -x * 15,
                    y: -y * 15,
                    duration: 2,
                    ease: "power2.out",
                });
            }

            rafId = requestAnimationFrame(animateFrame);
        };

        window.addEventListener("mousemove", handleMouseMove);
        rafId = requestAnimationFrame(animateFrame);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(rafId);
            clearTimeout(mouseTimeout);
            orbTimelines.forEach(tl => tl.kill());
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: -100,
                overflow: "hidden",
                background: "linear-gradient(180deg, #020010 0%, #0a0a1a 50%, #0e0e20 100%)",
                pointerEvents: "none",
            }}
        >
            {/* Base radial gradient */}
            <div style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(ellipse at 50% 0%, #120a2e 0%, #020010 60%)",
            }} />

            {/* Animated orbs with richer colors */}
            <div
                ref={(el) => (orbsRef.current[0] = el)}
                style={{
                    position: "absolute",
                    width: "700px",
                    height: "700px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, transparent 70%)",
                    top: "5%",
                    left: "15%",
                    filter: "blur(80px)",
                    willChange: "transform, opacity",
                }}
            />
            <div
                ref={(el) => (orbsRef.current[1] = el)}
                style={{
                    position: "absolute",
                    width: "600px",
                    height: "600px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 70%)",
                    top: "35%",
                    right: "10%",
                    filter: "blur(90px)",
                    willChange: "transform, opacity",
                }}
            />
            <div
                ref={(el) => (orbsRef.current[2] = el)}
                style={{
                    position: "absolute",
                    width: "500px",
                    height: "500px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(244, 114, 182, 0.07) 0%, transparent 70%)",
                    bottom: "10%",
                    left: "30%",
                    filter: "blur(60px)",
                    willChange: "transform, opacity",
                }}
            />
            <div
                ref={(el) => (orbsRef.current[3] = el)}
                style={{
                    position: "absolute",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, transparent 70%)",
                    top: "55%",
                    right: "30%",
                    filter: "blur(50px)",
                    willChange: "transform, opacity",
                }}
            />

            {/* Subtle dot grid pattern */}
            <div
                ref={gridRef}
                style={{
                    position: "absolute",
                    inset: "-10%",
                    backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                    willChange: "transform",
                }}
            />

            {/* Noise texture overlay */}
            <div style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                opacity: 0.02,
                mixBlendMode: "overlay",
                pointerEvents: "none",
            }} />
        </div>
    );
}
