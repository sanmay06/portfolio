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
        })
    
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
        if (i !== 0 )
          t1.to(
            cards[i - 1],
            {
              x: '-100vw',
              ease: 'none',
            },
            i - 1
          )
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
      // start: () => `+=${childHeight / 2}`,
      end: () => `+=${(cards.length * childHeight) + document.querySelector('.proj-head')}`,
      snap: 1 / (cards.length - 1),
      // markers: true,
      onUpdate: self => console.log(self.progress.toFixed(2)),
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
    },
    heading: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: orient? '5vh': '2.5vw',
      color: "#f0f0f0",
      textAlign: "center",
      height: "10vh",
      margin: 0,
      padding: 0,
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
      gridTemplateRows: orient ? "15vh 45vh 40vh" : "40vh 60vh",
      gridTemplateColumns: orient ? "100%" : "50% 50%",
      gridTemplateAreas: orient
        ? `"title" "image" "description"`
        : `"image title" "image description"`,
      textAlign: "center",
      cursor: "pointer",
      position: "absolute", // necessary for stacking
    },
    image: {
      gridArea: "image",
      width: "100%",
      height: "95%",
      objectFit: "contain",
    },
    projectTitle: {
      gridArea: "title",
      fontSize: orient? "5vw":"5vh",
      fontWeight: 600,
      color: "#ffffff",
      fontFamily: "'Poppins', sans-serif",
      padding: "1vh 2vw",
    },
    projectDesc: {
      gridArea: "description",
      fontSize: orient? "2.5vw": "2.5vh",
      lineHeight: 1.6,
      color: "#cccccc",
      padding: "2vh 2vw",
    },
    
  };

  return (
    <section className="projects" style={style.projects}>
      <h1 className="proj-head headings" style={style.heading}>
        My Projects
      </h1>
      <div className="projectsCont" style={style.container} ref={ref}>
        {proj.map((p) => (
          <div
            className="project"
            style={style.project}
            // href={p.url}
            key={p.id}
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <h1 className="proj-name" style={style.projectTitle}>
              {p.name}
            </h1>
            <img
              src={dict[p.id - 1]}
              alt={`${p.name} project`}
              style={style.image}
            />
            <div className="proj-desc" style={style.projectDesc}>
              {p.bigdesc}
              <br />
              {Object.keys(p.link).map((linkName) => (
                <a
                  key={linkName}
                  href={p.link[linkName]}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    margin: '1vh 1vw',
                    padding: orient ? '1vh 3vw' : '1vh 1.5vw',
                    fontSize: orient ? '2.2vw' : '2vh',
                    color: '#ffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  {linkName.replace(/_/g, ' ')}
                </a>
              ))}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
