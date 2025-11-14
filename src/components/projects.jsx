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
  const ref = useRef();
  const [orient, setOrient] = useState(window.innerHeight > window.innerWidth);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setOrient(window.innerHeight > window.innerWidth);
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const t1 = gsap.timeline();
    const container = ref.current;
    const cards = gsap.utils.toArray(container.children);

    if (!cards.length) return;

    const childHeight = cards[0].getBoundingClientRect().height;

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
            {
              y: 0,
              duration: 0.5,
              ease: "none",
            },
            i - 1
          );
        }
        if (i !== 0)
          t1.to(
            cards[i - 1],
            {
              x: "-100vw",
              ease: "none",
            },
            i - 1
          );
      });
    };

    initCards();

    scrollTriggerRef.current?.kill();
    scrollTriggerRef.current = ScrollTrigger.create({
      animation: t1,
      trigger: ".projects",
      pin: true,
      scrub: true,
      start: "top top",
      end: () => `+=${(cards.length - 1) * childHeight}`,
      snap: 1 / (cards.length - 1),
      onUpdate: (self) => console.log(self.progress.toFixed(2)),
      invalidateOnRefresh: true,
    });

    ScrollTrigger.addEventListener("refreshInit", initCards);

    return () => {
      ScrollTrigger.removeEventListener("refreshInit", initCards);
      scrollTriggerRef.current?.kill();
    };
  }, [orient]);

  const style = {
    projects: {
      width: "100vw",
      color: "#c7c7c7",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      overflow: "hidden",
      position: "relative",
      // backgroundColor: "#0a0e27",
    },
    heading: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: orient ? "5vh" : "2.5vw",
      color: "#f0f0f0",
      textAlign: "center",
      height: "10vh",
      margin: 0,
      padding: 0,
      letterSpacing: "0.5px",
      textTransform: "uppercase",
      background: "linear-gradient(135deg, #f0f0f0, #c7c7c7)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    container: {
      width: "100vw",
      height: "100vh",
      position: "relative",
    },
    project: {
      width: "100vw",
      height: "100vh",
      display: "grid",
      gridTemplateRows: orient ? "12vh 50vh 38vh" : "40vh 60vh",
      gridTemplateColumns: orient ? "100%" : "50% 50%",
      gridTemplateAreas: orient
        ? `"title" "image" "description"`
        : `"image title" "image description"`,
      textAlign: "center",
      cursor: "pointer",
      position: "absolute",
      padding: 0,
      margin: 0,
    },
    image: {
      gridArea: "image",
      width: "100%",
      height: "100%",
      objectFit: "contain",
      filter: "drop-shadow(0 10px 30px rgba(100, 200, 255, 0.1))",
      transition: "filter 0.4s ease",
      padding: orient ? "1vh 2vw" : "2vh 2vw",
    },
    projectTitle: {
      gridArea: "title",
      fontSize: orient ? "5vw" : "5vh",
      fontWeight: 700,
      color: "#ffffff",
      fontFamily: "'Poppins', sans-serif",
      padding: "1vh 2vw",
      letterSpacing: "1px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: 0,
    },
    projectDesc: {
      gridArea: "description",
      fontSize: orient ? "2vw" : "2vh",
      lineHeight: 1.6,
      color: "#cccccc",
      padding: orient ? "1.5vh 3vw" : "1.5vh 2vw",
      display: "flex",
      flexDirection: "column",
      gap: "1vh",
      overflow: "auto",
      alignItems: "center",
      justifyContent: "flex-start",
      margin: 0,
    },
    skillContianer: {
      display: "flex",
      flexWrap: "wrap",
      gap: orient ? "1vw" : "0.8vh",
      justifyContent: "center",
      alignItems: "center",
      padding: 0,
      margin: 0,
      width: "100%",
    },
    skillLabel: {
      fontSize: orient ? "1.8vw" : "1.6vh",
      fontWeight: 600,
      color: "#e0e0e0",
      marginRight: orient ? "0.5vw" : "0.5vh",
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: "0.5px",
      whiteSpace: "nowrap",
    },
    skills: {
      padding: orient ? "0.8vh 1.5vw" : "0.6vh 1vw",
      backgroundColor: "rgba(100, 200, 255, 0.12)",
      border: "1.5px solid rgba(100, 200, 255, 0.35)",
      borderRadius: "20px",
      color: "#e8f0ff",
      fontSize: orient ? "1.6vw" : "1.4vh",
      fontWeight: 500,
      fontFamily: "'Poppins', sans-serif",
      transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
      cursor: "default",
      backdropFilter: "blur(12px)",
      whiteSpace: "nowrap",
      boxShadow: "0 4px 15px rgba(100, 200, 255, 0.05)",
    },
    linksContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: orient ? "1vw" : "0.8vh",
      justifyContent: "center",
      alignItems: "center",
      margin: 0,
      width: "100%",
    },
  };

  return (
    <section className="projects" style={style.projects}>
      <h1 className="proj-head headings" style={style.heading}>
        My Projects
      </h1>
      <div className="projectsCont" style={style.container} ref={ref}>
        {proj.map((p) => (
          <div key={p.id} className="project" style={style.project}>
            <h1 className="proj-name" style={style.projectTitle}>
              {p.name}
            </h1>
            <img
              src={dict[p.id - 1]}
              alt={`${p.name} project`}
              style={style.image}
              onMouseEnter={(e) => {
                e.target.style.filter =
                  "drop-shadow(0 15px 40px rgba(100, 200, 255, 0.2))";
              }}
              onMouseLeave={(e) => {
                e.target.style.filter =
                  "drop-shadow(0 10px 30px rgba(100, 200, 255, 0.1))";
              }}
            />
            <div className="proj-desc" style={style.projectDesc}>
              <p style={{ margin: "0", fontWeight: 500, lineHeight: 1.5 }}>
                {p.bigdesc}
              </p>

              <div style={style.skillContianer}>
                <span style={style.skillLabel}>Tech:</span>
                {p.skills.map((skill, index) => (
                  <div
                    key={index}
                    style={style.skills}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor =
                        "rgba(100, 200, 255, 0.22)";
                      e.target.style.borderColor =
                        "rgba(100, 200, 255, 0.55)";
                      e.target.style.transform = "translateY(-3px)";
                      e.target.style.boxShadow =
                        "0 8px 20px rgba(100, 200, 255, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor =
                        "rgba(100, 200, 255, 0.12)";
                      e.target.style.borderColor =
                        "rgba(100, 200, 255, 0.35)";
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow =
                        "0 4px 15px rgba(100, 200, 255, 0.05)";
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
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0",
                      padding: orient ? "0.9vh 2vw" : "0.8vh 1.4vw",
                      fontSize: orient ? "1.8vw" : "1.6vh",
                      color: "#ffffff",
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      border: "1.5px solid rgba(255, 255, 255, 0.25)",
                      borderRadius: "10px",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontFamily: "'Poppins', sans-serif",
                      transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      backdropFilter: "blur(12px)",
                      letterSpacing: "0.5px",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor =
                        "rgba(255, 255, 255, 0.15)";
                      e.target.style.borderColor =
                        "rgba(255, 255, 255, 0.45)";
                      e.target.style.transform = "translateY(-3px)";
                      e.target.style.boxShadow =
                        "0 8px 25px rgba(100, 200, 255, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor =
                        "rgba(255, 255, 255, 0.08)";
                      e.target.style.borderColor =
                        "rgba(255, 255, 255, 0.25)";
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow =
                        "0 4px 15px rgba(0, 0, 0, 0.1)";
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
