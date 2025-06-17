import React, { useEffect, useRef } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaBootstrap, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandReactNative } from "react-icons/tb";
import { SiFlask, SiSelenium } from "react-icons/si";
import gsap from "gsap";

function Technology() {
  const techRefs = useRef([]);

  useEffect(() => {
    gsap.set('.tech', { y: 20 });
    gsap.to('.tech', {
      y: -10,
      duration: 1.2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: {
        each: 0.1,
        grid: 'auto',
        // amount: 1.5,
        from: "center",
      },
    });
  }, []);

  const styles = {
    techno: {
      width: "100vw",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
    },
    container: {
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      alignItems: "center",
    },
    tech: {
      padding: "0 15px",
      willChange: "transform", 
    },
    headings: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: "2.5em",
      color: "#ececec",
    },
  };

  const icons = [
    <FaReact size={50} />,
    <FaHtml5 size={50} />,
    <FaCss3Alt size={50} />,
    <FaJava size={50} />,
    <IoLogoJavascript size={50} />,
    <FaBootstrap size={50} />,
    <TbBrandReactNative size={50} />,
    <SiFlask size={50} />,
    <FaPython size={50} />,
    <SiSelenium size = {50} />
  ];

  return (
    <section id="techno" style={styles.techno}>
      <h1 className="tech-heading" style={styles.headings}>Technologies</h1>
      <div className="tech-cont" style={styles.container}>
        {icons.map((icon, index) => (
          <div
            key={index}
            className="tech"
            style={styles.tech}
            ref={(el) => (techRefs.current[index] = el)}
          >
            {icon}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technology;
