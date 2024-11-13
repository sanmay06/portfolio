import React from "react";
import Loan from "../pictures/LoanManagemnet.png";
import weather from "../pictures/weather.png";
import clean from "../pictures/cleanup.jpeg";
import { BrowserView, MobileView } from "react-device-detect";
import { motion } from "framer-motion";

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
            x:0,
            transition: {
                delay: props.id * 0.5,
                duration: 1,
            },
        },
        hiddenA: {
            x:props.k%2==0?1000:-1000,
        }
    };

    return (
        <>
            <BrowserView>
                <motion.a
                    className="project"
                    href={props.url}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: props.k * 0.5, duration: 1 }}
                >
                    <img src={dict[props.k - 1]} alt="project-image" />
                    <h1 className="proj-name">{props.name}</h1>
                    <span className="proj-desc">{props.description}</span>
                </motion.a>
            </BrowserView>
            <MobileView>
                <motion.a
                    className="project"
                    href={props.url}
                    variants={variant}
                    initial="hiddenM"
                    animate="animateM"
                >
                    <div class='project-cont'>
                        <img src={dict[props.k - 1]} alt="project-image" />
                        <h1 className="proj-name">{props.name}</h1>
                        <span className="proj-desc">{props.description}</span>
                    </div>
                </motion.a>
            </MobileView>
        </>
    );
}

export default Project;
