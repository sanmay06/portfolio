import React from "react";
import Bar from "./navbar";
import { SlideProvider } from "./slidecontext"; // Import the SlideProvider
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"

function App() {
    return (
        <SlideProvider> 
            <section>
                {/*<Bar />*/}
                <About />
                <Projects />
                <Contact />
            </section>
        </SlideProvider>
    );
}

export default App;
