import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiGoogledocs } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa6";

export default function Social() {
  return (
    <>
        <div className="social-container">
            <ul className="social-ul">
                <li className="social-li">
                    {/* resume pdf ko public folder me rkha h(ptani q) */}
                    <a className="social-a" target="_blank" href='/resume.pdf'>
                    {/* <SiGoogledocs /> */}
                    <FaFilePdf />
                    </a>
                    
                </li>
                <li className="social-li">
                    <a className="social-a" target="_blank" href="https://www.linkedin.com/in/sparsh-976216221">
                    <FaLinkedin />
                    </a>
                </li>
                <li className="social-li">
                    <a className="social-a" target="_blank" href="mailto:sparshbarolia@gmail.com">
                    <IoIosMail />
                    </a>
                    </li>
                {/* <li>
                    <a href="#">
                    <i class="fab fa-opera"></i>
                    </a> 
                </li> */}
            </ul>
        </div>
    </>
  )
}
