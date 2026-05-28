import React, { useEffect, useRef, useState } from "react";
import { BsEnvelope } from "react-icons/bs";
import { FaLinkedin, FaWhatsappSquare, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contacts() {
    const [clicked, setClicked] = useState(false);
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const iconsRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation
            gsap.fromTo(headingRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    }
                }
            );

            // Icons stagger animation
            const icons = iconsRef.current.querySelectorAll('.contact-icon');
            gsap.fromTo(icons,
                { y: 30, opacity: 0, scale: 0.8 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "back.out(1.5)",
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: iconsRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    }
                }
            );

            // Continuous floating for icons
            icons.forEach((icon, i) => {
                gsap.to(icon, {
                    y: -8,
                    duration: 2 + i * 0.3,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1,
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (clicked && formRef.current) {
            gsap.fromTo(formRef.current,
                { opacity: 0, y: 40, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: "power3.out",
                }
            );
        }
    }, [clicked]);

    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/sanmay-krishnapur-38b5892b6/",
            icon: <FaLinkedin size={28} />,
            label: "LinkedIn",
            color: "#0A66C2",
        },
        {
            href: "https://wa.me/919353246593",
            icon: <FaWhatsappSquare size={28} />,
            label: "WhatsApp",
            color: "#25D366",
        },
        {
            href: "https://github.com/sanmay06",
            icon: <FaGithub size={28} />,
            label: "GitHub",
            color: "#ffffff",
        },
        {
            href: "https://leetcode.com/u/sanmay06/",
            icon: <SiLeetcode size={28} />,
            label: "LeetCode",
            color: "#FFA116",
        },
    ];

    const sendmail = (e) => {
        e.preventDefault();
        // Placeholder for email functionality
    };

    return (
        <section
            ref={sectionRef}
            id="contact"
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '3rem',
                padding: '6rem 1.5rem',
                position: 'relative',
            }}
        >
            <div
                ref={headingRef}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.75rem',
                }}
            >
                <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-cyan)',
                    fontWeight: 500,
                }}>
                    Get In Touch
                </div>
                <h2
                    className="font-display text-gradient"
                    style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        textAlign: 'center',
                        lineHeight: 1.1,
                    }}
                >
                    Let's Connect
                </h2>
                <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    textAlign: 'center',
                    maxWidth: '400px',
                    lineHeight: 1.6,
                }}>
                    Open to new opportunities, collaborations, or just a friendly chat about tech
                </p>
            </div>

            {/* Social Icons */}
            <div
                ref={iconsRef}
                style={{
                    display: 'flex',
                    gap: '1.25rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-icon"
                        aria-label={social.label}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '56px',
                            height: '56px',
                            borderRadius: '16px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            color: 'var(--text-secondary)',
                            cursor: 'pointer',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            textDecoration: 'none',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                            e.currentTarget.style.borderColor = `${social.color}40`;
                            e.currentTarget.style.color = social.color;
                            e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)';
                            e.currentTarget.style.boxShadow = `0 0 20px ${social.color}20`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        {social.icon}
                    </a>
                ))}

                {/* Email button */}
                <button
                    onClick={() => setClicked(!clicked)}
                    className="contact-icon"
                    aria-label="Send email"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '56px',
                        height: '56px',
                        borderRadius: '16px',
                        background: 'rgba(0, 240, 255, 0.05)',
                        border: '1px solid rgba(0, 240, 255, 0.15)',
                        color: 'var(--accent-cyan)',
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        outline: 'none',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 240, 255, 0.1)';
                        e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                        e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 240, 255, 0.05)';
                        e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.15)';
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                >
                    <BsEnvelope size={28} />
                </button>
            </div>

            {/* Email Form */}
            {clicked && (
                <form
                    ref={formRef}
                    onSubmit={sendmail}
                    className="glass-strong"
                    style={{
                        width: '100%',
                        maxWidth: '450px',
                        padding: '2.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.25rem',
                    }}
                >
                    <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        textAlign: 'center',
                        marginBottom: '0.5rem',
                        color: 'var(--text-primary)',
                    }}>
                        Send a Message
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <label style={{
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            color: 'var(--text-muted)',
                            letterSpacing: '0.02em',
                        }}>
                            Name
                        </label>
                        <input
                            type="text"
                            name="from_name"
                            required
                            placeholder="Your name"
                            style={{
                                padding: '0.75rem 1rem',
                                borderRadius: '12px',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                background: 'rgba(255, 255, 255, 0.02)',
                                color: 'var(--text-primary)',
                                fontSize: '0.9rem',
                                fontFamily: 'var(--font-body)',
                                outline: 'none',
                                transition: 'all 0.3s ease',
                                width: '100%',
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = 'var(--accent-cyan)';
                                e.target.style.boxShadow = '0 0 0 3px rgba(0, 240, 255, 0.1)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                                e.target.style.boxShadow = 'none';
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <label style={{
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            color: 'var(--text-muted)',
                            letterSpacing: '0.02em',
                        }}>
                            Email
                        </label>
                        <input
                            type="email"
                            name="reply_to"
                            required
                            placeholder="you@example.com"
                            style={{
                                padding: '0.75rem 1rem',
                                borderRadius: '12px',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                background: 'rgba(255, 255, 255, 0.02)',
                                color: 'var(--text-primary)',
                                fontSize: '0.9rem',
                                fontFamily: 'var(--font-body)',
                                outline: 'none',
                                transition: 'all 0.3s ease',
                                width: '100%',
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = 'var(--accent-cyan)';
                                e.target.style.boxShadow = '0 0 0 3px rgba(0, 240, 255, 0.1)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                                e.target.style.boxShadow = 'none';
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <label style={{
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            color: 'var(--text-muted)',
                            letterSpacing: '0.02em',
                        }}>
                            Message
                        </label>
                        <textarea
                            name="message"
                            required
                            placeholder="How can I help you?"
                            rows={4}
                            style={{
                                padding: '0.75rem 1rem',
                                borderRadius: '12px',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                background: 'rgba(255, 255, 255, 0.02)',
                                color: 'var(--text-primary)',
                                fontSize: '0.9rem',
                                fontFamily: 'var(--font-body)',
                                outline: 'none',
                                transition: 'all 0.3s ease',
                                width: '100%',
                                resize: 'vertical',
                                minHeight: '80px',
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = 'var(--accent-cyan)';
                                e.target.style.boxShadow = '0 0 0 3px rgba(0, 240, 255, 0.1)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                                e.target.style.boxShadow = 'none';
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            padding: '0.875rem',
                            borderRadius: '12px',
                            border: 'none',
                            background: 'var(--gradient-secondary)',
                            color: 'var(--bg-base)',
                            fontFamily: 'var(--font-display)',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            marginTop: '0.5rem',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 8px 25px rgba(0, 240, 255, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                        }}
                    >
                        Send Message
                    </button>
                </form>
            )}

            {/* Footer */}
            <div style={{
                marginTop: '2rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                textAlign: 'center',
            }}>
                <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-dim)',
                    fontFamily: 'var(--font-mono)',
                }}>
                    &copy; 2026 Sanmay Krishnapur. All rights reserved.
                </p>
            </div>
        </section>
    );
}

export default Contacts;
