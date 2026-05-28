'use client';
import React, { useEffect, useRef } from "react";
import Technology from "./technologies";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const textRef = useRef(null);
    const statsRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate heading word by word
            const headingWords = headingRef.current.querySelectorAll('.word');
            gsap.fromTo(headingWords,
                { y: 80, opacity: 0, rotateX: -40 },
                {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    duration: 1,
                    ease: "power4.out",
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    }
                }
            );

            // Text reveal animation
            gsap.fromTo(textRef.current,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    }
                }
            );

            // Line animation
            gsap.fromTo(lineRef.current,
                { width: "0%" },
                {
                    width: "100px",
                    duration: 1.5,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: lineRef.current,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    }
                }
            );

            // Stats counter animation
            const statNumbers = statsRef.current.querySelectorAll('.stat-number');
            statNumbers.forEach((stat) => {
                const target = parseInt(stat.dataset.value);
                gsap.fromTo(stat,
                    { innerText: "0", opacity: 0, y: 30 },
                    {
                        innerText: target,
                        opacity: 1,
                        y: 0,
                        duration: 1.5,
                        ease: "power2.out",
                        snap: { innerText: 1 },
                        scrollTrigger: {
                            trigger: stat,
                            start: "top 90%",
                            toggleActions: "play none none reverse",
                        }
                    }
                );
            });

            // Stagger stat cards
            const statCards = statsRef.current.querySelectorAll('.stat-card');
            gsap.fromTo(statCards,
                { y: 40, opacity: 0, scale: 0.95 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const stats = [
        { value: 3, suffix: "+", label: "Years Experience" },
        { value: 6, suffix: "+", label: "Projects Built" },
        { value: 15, suffix: "+", label: "Technologies" },
        { value: 100, suffix: "%", label: "Passion" },
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '6rem 1.5rem',
                position: 'relative',
            }}
        >
            <div style={{
                maxWidth: '900px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3rem',
            }}>
                {/* Overline */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    opacity: 0.7,
                }}>
                    <div ref={lineRef} style={{
                        height: '1px',
                        width: '0px',
                        background: 'linear-gradient(90deg, var(--accent-cyan), transparent)',
                    }} />
                    <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-cyan)',
                        fontWeight: 500,
                    }}>
                        About
                    </span>
                </div>

                {/* Main heading */}
                <h1
                    ref={headingRef}
                    className="font-display"
                    style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.1,
                        textAlign: 'center',
                        perspective: '1000px',
                    }}
                >
                    {"Sanmay Krishnapur".split(" ").map((word, i) => (
                        <span
                            key={i}
                            className="word"
                            style={{ display: 'inline-block', marginRight: '0.25em' }}
                        >
                            <span className="text-gradient">{word}</span>
                        </span>
                    ))}
                </h1>

                {/* Subtitle */}
                <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    textAlign: 'center',
                }}>
                    Full Stack Developer & Problem Solver
                </p>

                {/* Description */}
                <div
                    ref={textRef}
                    className="glass-strong"
                    style={{
                        padding: '2.5rem',
                        fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                        lineHeight: 1.8,
                        color: 'var(--text-secondary)',
                        maxWidth: '700px',
                        textAlign: 'center',
                        position: 'relative',
                    }}
                >
                    <p style={{ margin: 0 }}>
                        Hi, I'm Sanmay Krishnapur — a developer passionate about creating software that makes a difference.
                        With a strong foundation in Java, I build efficient and user-friendly web applications and solutions.
                        I enjoy problem-solving and thrive on tackling challenges with clean, effective code. Always curious
                        and eager to learn, I strive to grow with the evolving tech landscape and bring value through my work.
                    </p>
                </div>

                {/* Stats */}
                <div ref={statsRef} style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: '1rem',
                    width: '100%',
                    maxWidth: '640px',
                }}>
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-card glass"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.25rem',
                                padding: '1.5rem 1rem',
                            }}
                        >
                            <span
                                className="font-display"
                                style={{
                                    fontSize: '2rem',
                                    fontWeight: 700,
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                <span className="stat-number" data-value={stat.value}>{stat.value}</span>
                                {stat.suffix}
                            </span>
                            <span style={{
                                fontSize: '0.75rem',
                                color: 'var(--text-muted)',
                                letterSpacing: '0.05em',
                            }}>
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

                <Technology />
            </div>
        </section>
    );
}
