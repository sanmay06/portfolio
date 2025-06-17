import React, {useEffect} from "react";
import proj from "../porj";
import Loan from "../pictures/LoanManagemnet.png";
import weather from "../pictures/weather.png";
import clean from "../pictures/cleanup.jpeg";
// import gsap from "gsap";

const dict = [Loan, weather, clean];

function Projects() {

    const style = {
        projects: {
          minHeight: '100vh',
          maxWidth: '100vw',
          padding: '2rem 1rem',
          color: '#c7c7c7',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        heading: {
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: '3em',
          color: '#f0f0f0',
          textAlign: 'center',
          marginBottom: '2rem',
        },
        container: {
          width: '100%',
          maxWidth: '1200px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
        },
        project: {
          width: '300px',
          height: '450px',
          display: 'grid',
          gridTemplateRows: '60px 1fr auto',
          backgroundColor: '#2c2c2c',
          borderRadius: '16px',
          boxShadow: '0 6px 18px rgba(0,0,0,0.4)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          textAlign: 'center',
          overflow: 'hidden',
          cursor: 'pointer',
        },
        projectHover: {
          transform: 'scale(1.05)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.6)',
        },
        image: {
          width: '100%',
          height: '180px',
          objectFit: 'cover',
        },
        projectTitle: {
          fontSize: '1.4em',
          fontWeight: 600,
          color: '#ffffff',
          padding: '0.5rem 1rem',
          fontFamily: "'Poppins', sans-serif",
        },
        projectDesc: {
          padding: '1rem',
          fontSize: '0.95em',
          lineHeight: '1.5',
          color: '#cccccc',
        },
      };
       
      

    useEffect(() => {
        
    }, []);

    return (
        <section id="projects" style={style.projects}>
                    <h1 className="proj-head headings" style={style.heading}>Projects</h1>
                    <div className="projects" style={style.container}>
                        {proj.map((p) => (
                            <a className="project" style = {style.project} href={p.url}>
                            <h1 className="proj-name"
                                style = {style.projectTitle}
            
                            >{p.name}</h1>
                                <div className='project-cont'
    
                                > 
                                    <img src={dict[p.id - 1]} alt={`${p.name} project`} style = {style.image} />
                                    <div className="proj-desc" style = {style.projectDesc}>{p.description}</div>
                                </div>
                            </a>
                        ))}
                    </div>
        </section>
    );
}

export default Projects;
