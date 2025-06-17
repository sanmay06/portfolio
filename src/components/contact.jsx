import React, { useEffect, useState } from "react";
import { BsEnvelope } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import gsap from "gsap";

function Contacts() {
    const [clicked, setclick] = useState(false);

    useEffect(() => {
        gsap.set('.cont', { y: 20 });
        gsap.to('.cont', {
          y: -10,
          duration: 1.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          stagger: {
            each: 0.1,
            grid: 'auto',
            // amount: 1.5,
            from: "center",
          },
        });
      }, []);

    const sendmail = (e) => {
        e.preventDefault();

    };
    return <section id="contact">
            <div><h1 className = "headings">Lets Connect</h1></div>
            <div className="contact body">
                <a href="https://www.linkedin.com/in/sanmay-krishnapur-38b5892b6/" className="cont" >
                    <div className="cont">
                        <FaLinkedin size={50}/>
                    </div>
                </a>
                <a href="https://wa.me/919353246593" className="cont" >
                    <div className="cont">
                        <FaWhatsappSquare size={50}/>
                    </div>
                </a>
                <a href="https://github.com/sanmay06" className="cont" >
                    <div className="cont">
                        <FaGithub size={50}/>
                    </div>
                </a>
                <a href="https://leetcode.com/u/sanmay06/" className="cont" >
                    <div className="cont">
                        <SiLeetcode size={50}/>
                    </div>
                </a>
                <button onClick={() => {setclick(!clicked);}} className="cont" >
                    <div className="cont">
                        <BsEnvelope size={50}/>
                    </div>
                </button>
            </div>
            {
                clicked && (<form onSubmit={sendmail} className="mail">
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