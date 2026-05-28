'use client'
import React, { useEffect } from "react";
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Lenis from "lenis";
import Background from "./components/Background";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function App() {

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.08,
            smooth: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        lenis.on("scroll", ScrollTrigger.update);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <Background />
            <main>
                <About />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}

export default App;
