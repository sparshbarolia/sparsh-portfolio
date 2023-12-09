import React from 'react'
import dreamloot from '../projects_photos/dreamloot.PNG';
import quizshala from '../projects_photos/quizshala.PNG';
import textcase from '../projects_photos/textCase.PNG';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import { IoMdArrowForward } from "react-icons/io";

export default function Projects() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <>
        <div className="projects-container" id="projectpg" data-bs-theme="dark">
            <div className="skill-heading-container">
                <div className="skill-heading my-2">Projects</div>
            </div>
            <div className="projects-cards">
                <div className="project-single-card" data-aos="zoom-in-up">
                    <div className="card">
                        {/* <img src="..." className="card-img-top" alt="..."/> */}
                        <img src={dreamloot} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <a href="https://ill-teal-gosling-slip.cyclic.cloud/" className="card-link" >Demo <IoMdArrowForward /></a>
                        </div>
                    </div>
                </div>
                <div className="project-single-card" data-aos="zoom-in-up">
                    <div className="card">
                        <img src={quizshala} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <a href="https://shimmering-begonia-442e75.netlify.app/" className="card-link">Demo <IoMdArrowForward /></a>
                        </div>
                    </div>
                </div>
                <div className="project-single-card" data-aos="zoom-in-up">
                    <div className="card">
                        <img src={textcase} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <a href="https://sage-druid-c32c18.netlify.app/" className="card-link">Demo <IoMdArrowForward /></a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}
