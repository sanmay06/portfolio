import React, { useContext, useEffect, useRef, useState } from "react";
import SlideContext from "../slidecontext"; 
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { BsEnvelope } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contacts() {
    const [isVisible, setVisible] = useState(false);
    const { add, remove } = useContext(SlideContext);
    const [clicked, setclick] = useState(false);
    const form = useRef();

    const variant = {
        hiddenM:{
            y:-20
        },
        hiddenA:{
            y:20
        },
        view:{
            y:0,
            transition:{
                duration:2,
                delay:0.5,
                type:"swing"
            }
        },
        hover: {
            scale:2,
            transition: {
                duration:0.5
            }
        }
    }

    const sendmail = (e) => {
        e.preventDefault();

        /*emailjs.sendForm("service_cob0hl9", "template_zxeulcb", form.current, "0dXA_5dvIGm_jONau")
        .then((result) => {
            console.log("SUCCESS!", result.text);
        }, (error) => {
            console.log("FAILED...", error.text);
        });*/
    };

    useEffect(() => {
        const ele = document.getElementById("contact");
        if (!ele) return;

        const observ = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            }, {
                root: null,
                threshold: 0.1,
            }
        );

        observ.observe(ele);
        return () => {
            observ.unobserve(ele);
        };
    }, []);
    useEffect(() => {
        if (isVisible) {
            add("contact");
        } else {
            remove("contact");
        }
    }, [isVisible]);
    return <section id="contact">
            <div><h1 className = "headings">Lets Connect</h1></div>
            <div className="contact body">
                <motion.a href="https://www.linkedin.com/in/sanmay-krishnapur-38b5892b6/"
                    variants={variant}
                    whileInView= "view" //{{y: 0}}
                    initial= "hiddenA"  //{{y: 30}}
                    whileHover= "hover"  //{{scale:2}}
                    transition= "view" //{{duration:2,delay:0.5,type:"swing"}} 
                >
                    <div className="cont">
                        <FaLinkedin size={50}/>
                    </div>
                </motion.a>
                <motion.a href="https://wa.me/919353246593" 
                     variants={variant}
                     whileInView= "view" //{{y: 0}}
                     initial= "hiddenM"  //{{y: 30}}
                     whileHover= "hover"  //{{scale:2}}
                     transition= "view" //{{duration:2,delay:0.5,type:"swing"}} 
                >
                    <div className="cont">
                        <FaWhatsappSquare size={50}/>
                    </div>
                </motion.a>
                <motion.a href="https://github.com/sanmay06"
                     variants={variant}
                     whileInView= "view" //{{y: 0}}
                     initial= "hiddenA"  //{{y: 30}}
                     whileHover= "hover"  //{{scale:2}}
                     transition= "view" //{{duration:2,delay:0.5,type:"swing"}} 
                >
                    <div className="cont">
                        <FaGithub size={50}/>
                    </div>
                </motion.a>
                <motion.a href="https://leetcode.com/u/sanmay06/"
                    variants={variant}
                    whileInView= "view" //{{y: 0}}
                    initial= "hiddenM"  //{{y: 30}}
                    whileHover= "hover"  //{{scale:2}}
                    transition= "view" //{{duration:2,delay:0.5,type:"swing"}} 
                >
                    <div className="cont">
                        <SiLeetcode size={50}/>
                    </div>
                </motion.a>
                <motion.button onClick={() => {
                    setclick(!clicked);
                }}  
                variants={variant}
                whileInView= "view" //{{y: 0}}
                initial= "hiddenA"  //{{y: 30}}
                whileHover= "hover"  //{{scale:2}}
                transition= "view" //{{duration:2,delay:0.5,type:"swing"}} 
                >
                    <div className="cont">
                        <BsEnvelope size={50}/>
                    </div>
                </motion.button>
            </div>
            {
                clicked && (<form ref={form} onSubmit={sendmail} className="mail">
                    <label>Name</label>
                    <input type="text" name="from_name" required />
                    <label>Email</label>
                    <input type="email" name="reply_to" required />
                    <label>Message</label>
                    <textarea name="message" required />
                    <input type="submit" value="Send" />
                  </form>)
            }
        </section>
}

export default Contacts;