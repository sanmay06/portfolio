import React from "react";
import Bar from "./navbar";
import { SlideProvider } from "./slidecontext"; // Import the SlideProvider
import Content from "./content";
import { motion } from "framer-motion";

function App() {
    return (
        <SlideProvider> {/* Use SlideProvider here */}
            <section>
                <motion.div
                 initial = {{y:-100, z:1}}
                 animate = {{y:0, z:1}}
                 transition = {{delay:1, duration:1}}>
                    <Bar />
                </motion.div>
                <Content />
            </section>
        </SlideProvider>
    );
}

export default App;
