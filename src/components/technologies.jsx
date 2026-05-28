import React, { useEffect, useRef } from "react";
import {
    FaReact, FaHtml5, FaCss3Alt, FaJava, FaBootstrap, FaPython,
    FaNodeJs, FaGitAlt
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandReactNative } from "react-icons/tb";
import { SiFlask, SiSelenium, SiIpfs, SiFastapi, SiMongodb, SiFirebase, SiDocker, SiTypescript } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Technology() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const techs = [
        { icon: <FaReact size={28} />, name: "React", color: "#61DAFB" },
        { icon: <TbBrandReactNative size={28} />, name: "React Native", color: "#61DAFB" },
        { icon: <IoLogoJavascript size={28} />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <SiTypescript size={28} />, name: "TypeScript", color: "#3178C6" },
        { icon: <FaHtml5 size={28} />, name: "HTML5", color: "#E34F26" },
        { icon: <FaCss3Alt size={28} />, name: "CSS3", color: "#1572B6" },
        { icon: <FaBootstrap size={28} />, name: "Bootstrap", color: "#7952B3" },
        { icon: <FaJava size={28} />, name: "Java", color: "#007396" },
        { icon: <FaPython size={28} />, name: "Python", color: "#3776AB" },
        { icon: <SiFlask size={28} />, name: "Flask", color: "#000000" },
        { icon: <SiFastapi size={28} />, name: "FastAPI", color: "#009688" },
        { icon: <SiMongodb size={28} />, name: "MongoDB", color: "#47A248" },
        { icon: <SiFirebase size={28} />, name: "Firebase", color: "#FFCA28" },
        { icon: <SiSelenium size={28} />, name: "Selenium", color: "#43B02A" },
        { icon: <SiDocker size={28} />, name: "Docker", color: "#2496ED" },
        { icon: <FaGitAlt size={28} />, name: "Git", color: "#F05032" },
        { icon: <FaNodeJs size={28} />, name: "Node.js", color: "#339933" },
        { icon: <SiIpfs size={28} />, name: "IPFS", color: "#65A2AD" },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate heading
            gsap.fromTo('.tech-heading',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    }
                }
            );

            // Staggered card entrance
            cardsRef.current.forEach((card, i) => {
                if (!card) return;
                gsap.fromTo(card,
                    { y: 40, opacity: 0, scale: 0.9 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        ease: "back.out(1.2)",
                        delay: i * 0.05,
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                            toggleActions: "play none none reverse",
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleMouseMove = (e, index) => {
        const card = cardsRef.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(card, {
            rotateX,
            rotateY,
            duration: 0.3,
            ease: "power2.out",
            transformPerspective: 800,
        });
    };

    const handleMouseLeave = (index) => {
        const card = cardsRef.current[index];
        if (!card) return;

        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out",
        });
    };

    return (
        <section
            ref={sectionRef}
            id="techno"
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2.5rem',
                padding: '3rem 0',
            }}
        >
            <div style={{ textAlign: 'center' }}>
                <h2
                    className="tech-heading font-display text-gradient"
                    style={{
                        fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                    }}
                >
                    Technologies
                </h2>
                <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    marginTop: '0.5rem',
                }}>
                    Tools & frameworks I work with
                </p>
            </div>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1rem',
                maxWidth: '800px',
                perspective: '1000px',
            }}>
                {techs.map((tech, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '1.25rem',
                            minWidth: '100px',
                            background: 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            borderRadius: '16px',
                            cursor: 'default',
                            transition: 'background 0.3s ease, border-color 0.3s ease',
                            willChange: 'transform',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                            e.currentTarget.style.borderColor = `${tech.color}40`;
                            e.currentTarget.style.boxShadow = `0 0 20px ${tech.color}15`;
                            const name = e.currentTarget.querySelector('.tech-name');
                            if (name) name.style.color = tech.color;
                        }}
                        onMouseLeave={(e) => {
                            handleMouseLeave(index);
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                            e.currentTarget.style.boxShadow = 'none';
                            const name = e.currentTarget.querySelector('.tech-name');
                            if (name) name.style.color = 'var(--text-muted)';
                        }}
                    >
                        <div style={{
                            color: tech.color,
                            filter: 'drop-shadow(0 0 8px ' + tech.color + '40)',
                        }}>
                            {tech.icon}
                        </div>
                        <span style={{
                            fontSize: '0.7rem',
                            fontWeight: 500,
                            color: 'var(--text-muted)',
                            letterSpacing: '0.02em',
                        }}>
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Technology;
