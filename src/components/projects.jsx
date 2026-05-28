import React, { useEffect, useRef, useState } from "react";
import proj from "../porj";
import Loan from "../pictures/LoanManagemnet.png";
import weather from "../pictures/weather.png";
import clean from "../pictures/cleanup.jpeg";
import job from "../pictures/Job Aggregator.png";
import wave from "../pictures/Wave.png";
import majorProject from "../pictures/major-project.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const dict = [Loan, weather, clean, job, wave, majorProject];

function Projects() {
  const pinRef = useRef();
  const [orient, setOrient] = useState(window.innerHeight > window.innerWidth);
  const scrollTriggerRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setOrient(window.innerHeight > window.innerWidth);
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = pinRef.current;
    const cards = gsap.utils.toArray(container.children);

    if (!cards.length) return;

    const childHeight = cards[0].getBoundingClientRect().height;

    const t1 = gsap.timeline();

    const initCards = () => {
      t1.clear();

      cards.forEach((card, i) => {
        gsap.set(card, {
          y: i * childHeight,
          top: 0,
          left: 0,
          position: "absolute",
          zIndex: cards.length - i,
        });

        if (i > 0) {
          t1.to(
            card,
            { y: 0, duration: 0.5, ease: "none" },
            i - 1
          );
        }
        if (i !== 0) {
          t1.to(
            cards[i - 1],
            { x: "-100vw", ease: "none" },
            i - 1
          );
        }
      });
    };

    initCards();

    scrollTriggerRef.current = ScrollTrigger.create({
      animation: t1,
      trigger: pinRef.current,
      pin: true,
      scrub: true,
      start: "top top",
      end: () => `+=${(cards.length - 1) * childHeight}`,
      snap: 1 / (cards.length - 1),
      invalidateOnRefresh: true,
    });

    ScrollTrigger.addEventListener("refreshInit", initCards);

    return () => {
      ScrollTrigger.removeEventListener("refreshInit", initCards);
      scrollTriggerRef.current?.kill();
    };
  }, [orient]);

  // Heading entrance animation
  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const style = {
    project: {
      width: "100vw",
      height: "100vh",
      display: "grid",
      gridTemplateRows: orient ? "10vh 45vh 45vh" : "35vh 65vh",
      gridTemplateColumns: orient ? "100%" : "50% 50%",
      gridTemplateAreas: orient
        ? `"title" "image" "description"`
        : `"image title" "image description"`,
      textAlign: "center",
      cursor: "pointer",
      position: "absolute",
      padding: 0,
      margin: 0,
      background: "var(--bg-base)",
      willChange: "transform",
    },
    image: {
      gridArea: "image",
      width: "100%",
      height: "100%",
      objectFit: "contain",
      filter: "drop-shadow(0 10px 30px rgba(0, 240, 255, 0.1))",
      transition: "filter 0.4s ease, transform 0.4s ease",
      padding: orient ? "1vh 4vw" : "2vh 4vw",
      borderRadius: "24px",
    },
    projectTitle: {
      gridArea: "title",
      fontSize: orient ? "6vw" : "clamp(2rem, 3vw, 3rem)",
      fontWeight: 700,
      color: "var(--text-primary)",
      fontFamily: "var(--font-display)",
      padding: "1vh 2vw",
      letterSpacing: "-0.02em",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: 0,
      lineHeight: 1.1,
      textShadow: "0 2px 20px rgba(0,0,0,0.5)",
    },
    projectDesc: {
      gridArea: "description",
      fontSize: orient ? "3.5vw" : "1.05rem",
      lineHeight: 1.7,
      color: "var(--text-secondary)",
      padding: orient ? "2vh 5vw" : "2rem 4rem",
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      overflow: "auto",
      alignItems: "center",
      justifyContent: "flex-start",
      margin: 0,
    },
    skillContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.6rem",
      justifyContent: "center",
      alignItems: "center",
      padding: 0,
      margin: 0,
      width: "100%",
    },
    skillLabel: {
      fontSize: "0.85rem",
      fontWeight: 600,
      color: "var(--text-primary)",
      marginRight: "0.5rem",
      fontFamily: "var(--font-display)",
      letterSpacing: "0.5px",
      whiteSpace: "nowrap",
    },
    skills: {
      padding: "0.4rem 1rem",
      background: "rgba(0, 240, 255, 0.05)",
      border: "1px solid rgba(0, 240, 255, 0.1)",
      borderRadius: "999px",
      color: "var(--accent-cyan)",
      fontSize: "0.8rem",
      fontWeight: 500,
      fontFamily: "var(--font-body)",
      transition: "all 0.3s ease",
      cursor: "default",
      whiteSpace: "nowrap",
    },
    linksContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.75rem",
      justifyContent: "center",
      alignItems: "center",
      margin: 0,
      width: "100%",
    },
    linkBtn: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.7rem 1.4rem",
      fontSize: "0.8rem",
      color: "#ffffff",
      background: "rgba(255, 255, 255, 0.04)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      borderRadius: "999px",
      textDecoration: "none",
      fontWeight: 600,
      fontFamily: "var(--font-body)",
      transition: "all 0.3s ease",
      backdropFilter: "blur(12px)",
      letterSpacing: "0.02em",
    },
  };

  return (
    <section id="projects" style={{ position: "relative", width: "100%" }}>
      {/* Heading - separate from pinned area so cards don't cover it */}
      <div
        style={{
          textAlign: "center",
          padding: "4rem 1.5rem 2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h1
          ref={headingRef}
          className="font-display text-gradient"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          My Projects
        </h1>
        <p
          style={{
            fontSize: "0.9rem",
            color: "var(--text-muted)",
            marginTop: "0.75rem",
            fontFamily: "var(--font-body)",
          }}
        >
          Scroll to explore my work
        </p>
      </div>

      {/* Pinned card stack container */}
      <div
        ref={pinRef}
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {proj.map((p) => (
          <div key={p.id} className="project" style={style.project}>
            <h2 className="proj-name" style={style.projectTitle}>
              {p.name}
            </h2>
            <img
              src={dict[p.id - 1]}
              alt={`${p.name} project`}
              style={style.image}
              onMouseEnter={(e) => {
                e.target.style.filter =
                  "drop-shadow(0 15px 40px rgba(0, 240, 255, 0.2))";
                e.target.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.target.style.filter =
                  "drop-shadow(0 10px 30px rgba(0, 240, 255, 0.1))";
                e.target.style.transform = "scale(1)";
              }}
            />
            <div className="proj-desc" style={style.projectDesc}>
              <p
                style={{
                  margin: "0",
                  fontWeight: 400,
                  lineHeight: 1.7,
                  maxWidth: "700px",
                }}
              >
                {p.bigdesc}
              </p>

              <div style={style.skillContainer}>
                <span style={style.skillLabel}>Tech:</span>
                {p.skills.map((skill, index) => (
                  <div
                    key={index}
                    style={style.skills}
                    onMouseEnter={(e) => {
                      e.target.style.background = "rgba(0, 240, 255, 0.1)";
                      e.target.style.borderColor = "rgba(0, 240, 255, 0.25)";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "rgba(0, 240, 255, 0.05)";
                      e.target.style.borderColor = "rgba(0, 240, 255, 0.1)";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>

              <div style={style.linksContainer}>
                {Object.keys(p.link).map((linkName) => (
                  <a
                    key={linkName}
                    href={p.link[linkName]}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={style.linkBtn}
                    onMouseEnter={(e) => {
                      e.target.style.background = "rgba(255, 255, 255, 0.08)";
                      e.target.style.borderColor = "var(--accent-cyan)";
                      e.target.style.boxShadow =
                        "0 0 15px rgba(0, 240, 255, 0.1)";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "rgba(255, 255, 255, 0.04)";
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.08)";
                      e.target.style.boxShadow = "none";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    {linkName.replace(/_/g, " ")}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
