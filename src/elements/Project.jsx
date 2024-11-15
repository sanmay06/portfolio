import React, { useEffect, useRef, useState } from "react";
import Loan from "../pictures/LoanManagemnet.png";
import weather from "../pictures/weather.png";
import clean from "../pictures/cleanup.jpeg";
import { BrowserView, MobileView } from "react-device-detect";
import { motion } from "framer-motion";
import { inView } from "framer-motion";
import { useInView } from "framer-motion";

const dict = [Loan, weather, clean];

function Project(props) {

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
        <div>
                    <BrowserView>
                        <motion.a
                            className="project"
                            href={props.url}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
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
                            whileInView={{ x : 0 }}
                            transition={{duration: 0.5,type: "spring"}}
                        >
                            <h1 className="proj-name">{props.name}</h1>
                            <div className='project-cont'> 
                                <img src={dict[props.k - 1]} alt={`${props.name} project`} />
                                <span className="proj-desc">{props.description}</span>
                            </div>
                        </motion.a>
                    </MobileView>
        </div>
    );
}

export default Project;
