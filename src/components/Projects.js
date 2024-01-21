import React from 'react'
import dreamloot from '../projects_photos/dreamloot.PNG';
import myntra from '../projects_photos/myntraPhoto.PNG'
import quizshala from '../projects_photos/quizshala.PNG';
import textcase from '../projects_photos/textCase.PNG';
import socialMedia from '../projects_photos/socialMedia.PNG'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                        <a href='https://github.com/sparshbarolia/EcommerceMernwebsite/tree/main' className="card-link" target="_blank">
                            {/* <img src="..." className="card-img-top" alt="..."/> */}
                            <img src={dreamloot} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                Demo <IoMdArrowForward />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project-single-card" data-aos="zoom-in-up">
                    <div className="card">
                        <a href='https://github.com/sparshbarolia/myntra-clone-project' className="card-link" target="_blank">
                            {/* <img src="..." className="card-img-top" alt="..."/> */}
                            <img src={myntra} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                Demo <IoMdArrowForward />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project-single-card" data-aos="zoom-in-up">
                    <div className="card">
                        <a href='https://github.com/sparshbarolia/Quiz-app' className="card-link" target="_blank">
                            {/* <img src="..." className="card-img-top" alt="..."/> */}
                            <img src={quizshala} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                Demo <IoMdArrowForward />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project-single-card" data-aos="zoom-in-up">
                    <div className="card">
                        <a href='https://github.com/sparshbarolia/social-media/tree/main' className="card-link" target="_blank">
                            {/* <img src="..." className="card-img-top" alt="..."/> */}
                            <img src={socialMedia} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                Demo <IoMdArrowForward />
                            </div>
                        </a>
                    </div>
                </div>
                
                {/*<div className="project-single-card" data-aos="zoom-in-up">
                    <div className="card">
                        <img src={textcase} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <a href="https://sage-druid-c32c18.netlify.app/" className="card-link">Demo <IoMdArrowForward /></a>
                        </div>
                    </div>
                </div> */}
            </div>
            
        </div>
    </>
  )
}
