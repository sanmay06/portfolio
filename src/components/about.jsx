'use client';
import React, { useEffect, useRef } from "react";
import Technology from "./technologies";
import gsap from "gsap";

export default function About() {
    const ref = useRef();

    const styles = {
        welcomeSection: {
            minHeight: '100vh',
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            textAlign: 'center',
            alignItems: 'center',
            color: '#c7c7c7',
        },
        headings: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '2.5em', 
            color: '#ececec',
        },
        text: {
            fontFamily: "'Roboto', serif",
            fontEeight: 400,
            color: '#c7c7c7',
            width: '90vw',
        }
    }
    
    useEffect(() => {
        const timeline = gsap.timeline();

        // timeline.fromTo('#welcome-section', {x: -50, y: -50, opacity: 0.5}, {x: 0, y: 0, opacity: 1, duration: 2})
        timeline.fromTo('.techno', {opacity: 0}, {opacity: 1})
            .fromTo('.head', {x: 0, z: 0, opacity: 0.2}, {x: 50, y: 50, opacity: 1, duration: 2}, 0)
            .fromTo('.wel-text', {x: 0, z: 0, opacity: 0.2}, {x: 50, y: 50, opacity: 1, duration: 2}, 0)
    }, []);

    return <section id="welcome-section" 
                style={styles.welcomeSection}
                ref={ref}
            > 
                <h1 className="head" style={styles.headings}>
                    About Me
                </h1>  
                <div className="wel-text body"
                    style = {styles.text}
                    // animate = {{x:0,z:0}}   
                    // initial = {{x:50,z:0}} 
                    // transition = {{ duration:2, delay:0.3}}
                >
                    Hi, I'm Sanmay Krishnapur—a developer passionate about creating software that makes a difference. With a strong foundation in Java, I build efficient and user-friendly web applications and solutions. I enjoy problem-solving and thrive on tackling challenges with clean, effective code. Always curious and eager to learn, I strive to grow with the evolving tech landscape and bring value through my work.
                </div>
                <Technology />
            </section>
            ;
}
