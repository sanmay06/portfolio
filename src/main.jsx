import React from "react";
import Bar from "./navbar";
import { SlideProvider } from "./slidecontext"; // Import the SlideProvider
import Content from "./content";

function App() {
    return (
        <SlideProvider> {/* Use SlideProvider here */}
            <section>
                <Bar />
                <Content />
            </section>
        </SlideProvider>
    );
}

export default App;
