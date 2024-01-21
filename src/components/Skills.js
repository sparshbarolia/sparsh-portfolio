import React from 'react'
import DSA from '../skill_photos/DSA_logo.png'
import cpp from '../skill_photos/c-logo.png'
import node from '../skill_photos/nodePhoto.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Skills() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <>
    <div className="skill-container my-5 py-4" id="skillspg" data-bs-theme="dark">
        <div className="skill-heading-container">
            <div className="skill-heading my-2">Skills</div>
        </div>
        <div className="card-group p-4">
            <div className="skill-card m-3" id='dsa' data-aos="zoom-in-up">
                <div className="card h-100 p-3">
                    <div className="profileImage m-auto">
                        {/* <img src="https://banner2.cleanpng.com/20180516/bfw/kisspng-data-structures-and-algorithms-algorithms-data-s-5afbfe8fd82fd5.0181533515264641438855.jpg" className="card-img-top" alt="..."/> */}
                        <img src={DSA} className="card-img-top" alt="..."/>
                    </div>
                    <div className="card-body d-flex justify-content-center">
                        <h5 className="card-title">DSA</h5>
                    </div>
                </div>
            </div>
            <div className="skill-card m-3" id='reactlogo' data-aos="zoom-in-up">
                <div className="card h-100 p-3">
                {/* <img src={html_logo} className="card-img-top" alt="..." width="150" height="150"/> */}
                    <div className="profileImage m-auto">
                        <img src="https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png" className="card-img-top" alt="..."/>
                    </div>
                    <div className="card-body d-flex justify-content-center">
                        <h5 className="card-title">REACT JS</h5>
                        {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                    </div>
                </div>
            </div>
            <div className="skill-card m-3" id='nodelogo' data-aos="zoom-in-up">
                <div className="card h-100 p-3">
                    <div className="profileImage m-auto">
                        <img src={node} className="card-img-top" alt="..."/>
                    </div>
                    <div className="card-body d-flex justify-content-center">
                        <h5 className="card-title">Node Js</h5>
                    </div>
                </div>
            </div>
            <div className="skill-card m-3" id='sqllogo' data-aos="zoom-in-up">
                <div className="card h-100 p-3">
                    <div className="profileImage m-auto">
                        <img src="https://img.freepik.com/free-icon/mysql_318-698177.jpg" className="card-img-top" alt="..."/>
                    </div>
                    <div className="card-body d-flex justify-content-center">
                        <h5 className="card-title">SQL</h5>
                    </div>
                </div>
            </div>
            <div className="skill-card m-3" id='cpplogo' data-aos="zoom-in-up">
                <div className="card h-100 p-3">
                    <div className="profileImage m-auto">
                        <img src={cpp} className="card-img-top" alt="..."/>
                    </div>
                    <div className="card-body d-flex justify-content-center">
                        <h5 className="card-title">C++</h5>
                    </div>
                </div>
            </div>
            <div className="skill-card m-3" id='htmllogo' data-aos="zoom-in-up">
                <div className="card h-100 p-3">
                    <div className="profileImage m-auto">
                        <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png" className="card-img-top" alt="..."/>
                    </div>
                    <div className="card-body d-flex justify-content-center">
                        <h5 className="card-title">HTML</h5>
                    </div>
                </div>
            </div>
            <div className="skill-card m-3" id='csslogo' data-aos="zoom-in-up">
                <div className="card h-100 p-3">
                    <div className="profileImage m-auto">
                        <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" className="card-img-top" alt="..."/>
                    </div>
                    <div className="card-body d-flex justify-content-center">
                        <h5 className="card-title">CSS</h5>
                    </div>
                </div>
            </div>
            <div className="skill-card m-3" id='jslogo' data-aos="zoom-in-up">
                <div className="card h-100 p-3">
                    <div className="profileImage m-auto">
                        <img src="https://cdn.pixabay.com/photo/2017/03/30/17/41/javascript-2189147_640.png" className="card-img-top" alt="..."/>
                    </div>
                    <div className="card-body d-flex justify-content-center">
                        <h5 className="card-title">Java Script</h5>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}
