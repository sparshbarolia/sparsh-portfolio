import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiGoogledocs } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

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
                <li className="social-li">
                    <a className="social-a" target="_blank" href="https://github.com/sparshbarolia">
                    <FaGithub />
                    </a>
                </li>
            </ul>
        </div>
    </>
  )
}
