import React from 'react'
import myImage from '../portfolio_profile.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="about-container my-5 py-4" id="aboutpg" data-bs-theme="dark">
        <div className="about-heading my-2">About Me</div>
        {/* <div className="card mb-3" style={{ maxWidth: '70vw' , maxHeight: '80vh'}}> */}
        <div className="card mb-3 p-3" style={{ maxWidth: '70vw'}} data-aos="zoom-in-up" data-aos-duration="3000">
        {/* <div className="card mb-3"> */}
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                <img src={myImage} className="img-fluid rounded-start m-4" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title"><b>Sparsh</b></h5>
                    <p className="card-text">I am Currently pursuing my BTech from Netaji Subhas university of Technology(NSUT)(CSE department) with background knowledge of front-end development , DSA , HTML, CSS, ReactJs, JavaScript, C++ Programming language, MySQL along with stack of building useful responsive web application.I possess strong problem-solving skills, allowing me to effectively tackle challenges and find innovative solutions.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
