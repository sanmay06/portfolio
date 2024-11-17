import React from "react";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { motion } from "framer-motion";

function Technology () {

    const variant = {
        inviewA:{
            y:[8,0,-10,0,8],
            transition:{
                duration:5,
                repeat: Infinity,
                repeatType: 'loop',
            }
        },
        inviewB:{
            y:[10,0,-8,0,10],
            transition:{
                duration:4,
                repeat: Infinity,
                repeatType: 'loop',
            }
        },inviewC:{
            y:[7,0,-12,0,7],
            transition:{
                duration:6,
                repeat: Infinity,
                repeatType: 'loop',
            }
        },

    }

    return <section id='techno'>
        <h1 className="tech-heading headings">Technologies</h1>
        <div className="tech-cont">
            <motion.div className="tech"
                variants={variant}
                whileInView="inviewA"
            >
                <FaReact size={50}/>
            </motion.div>
            <motion.div className="tech"
                variants={variant}
                whileInView="inviewB"
            >
                <FaHtml5 size={50}/>
            </motion.div>
            <motion.div className="tech"
                variants={variant}
                whileInView="inviewC"
            >
                <FaCss3Alt size={50}/>
            </motion.div>
            <motion.div className="tech"
                variants={variant}
                whileInView="inviewA"
            >
                <FaJava size={50}/>
            </motion.div>
            <motion.div className="tech"
                variants={variant}
                whileInView="inviewB"
            >
                <IoLogoJavascript size={50}/>
            </motion.div>
            <motion.div className="tech"
                variants={variant}
                whileInView="inviewC"
            >
                <FaBootstrap size={50}/>
            </motion.div>
        </div>
    </section>
}

export default Technology;