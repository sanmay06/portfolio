import React, { useEffect, useRef, useState, useContext } from "react";
import Loan from "../pictures/LoanManagemnet.png";
import weather from "../pictures/weather.png";
import SlideContext from "../slidecontext";
import clean from "../pictures/cleanup.jpeg";
import { BrowserView, MobileView } from "react-device-detect";
import { motion } from "framer-motion";

const dict = [Loan, weather, clean];

function Project(props) {
    const [isvis, visible] = useState(false);
    const ref = useRef();
    const { add, remove } = useContext(SlideContext);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => visible(entry.isIntersecting), // Proper state update
            {
                root: null,
                threshold: 0.01,
            }
        );

        if (ref.current) obs.observe(ref.current);

        return () => {
            if (ref.current) obs.unobserve(ref.current);
        };
    }, []);
    useEffect(() => {
        if (isvis) {
            add("projects");
        } else {
            remove("projects");
        }
    }, [isvis]);

    const variant = {
        animateB: {
            opacity: 1,
            transition: {
                delay: props.id * 0.5,
                duration: 1,
            },
        },
        hiddenB: {
            opacity: 0,
        },
        animateA: {
            x: 0,
            transition: {
                delay: props.id * 0.5,
                duration: 1,
            },
        },
        hiddenA: {
            x: props.k % 2 === 0 ? "100vw" : "-100vw", // Using strict equality
        },
    };

    return (
        <div ref={ref}>
            {isvis? (
                <>
                    <BrowserView>
                        <motion.a
                            className="project"
                            href={props.url}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: props.k * 0.5, duration: 2 }}
                        >
                            <img src={dict[props.k - 1]} alt={`${props.name} project`} />
                            <h1 className="proj-name">{props.name}</h1>
                            <span className="proj-desc">{props.description}</span>
                        </motion.a>
                    </BrowserView>
                    <MobileView>
                        <motion.a
                            className="project"
                            href={props.url}
                            initial={{ x: props.k % 2 === 0 ? 100 : -100 }}
                            animate={{ x : 0 }}
                            transition={{duration: 2,type: "spring"}}
                        >
                            <h1 className="proj-name">{props.name}</h1>
                            <div className='project-cont'> 
                                <img src={dict[props.k - 1]} alt={`${props.name} project`} />
                                <span className="proj-desc">{props.description}</span>
                            </div>
                        </motion.a>
                    </MobileView>
                </>
            ):(<div className="placeholder"></div>)}
        </div>
    );
}

export default Project;
