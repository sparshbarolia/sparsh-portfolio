import React from 'react'
import { Link , animateScroll as scroll} from 'react-scroll'

export default function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container">
            {/* <a className="navbar-brand text-info text-opacity-75 fw-semibold fst-italic" href="#">Sparsh</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                <li className="nav-item">
                {/* <a className="nav-link" aria-current="page" href="#">Home</a> */}
                <Link 
                    className='nav-link'
                    // activeClass="active"
                    // onClick={scrollToTop}
                    to="headerAndParticle" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}>
                  Home
                </Link>
                </li>

                <li className="nav-item">
                {/* <a className="nav-link" href="#">About</a> */}
                <Link 
                    className='nav-link'
                    // activeClass="active"
                    to="aboutpg" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}>
                  About
                </Link>
                </li>

                <li className="nav-item">
                {/* <a className="nav-link" href="#">Skills</a> */}
                <Link 
                    className='nav-link'
                    to="skillspg" 
                    spy={true} 
                    smooth={true} 
                    offset={-90} 
                    duration={500}>
                  Skills
                </Link>
                </li>

                <li className="nav-item">
                {/* <a className="nav-link" href="#">Projects</a> */}
                <Link 
                    className='nav-link'
                    to="projectpg" 
                    spy={true} 
                    smooth={true} 
                    offset={-90} 
                    duration={500}>
                  Projects
                </Link>
                </li>

                <li className="nav-item">
                {/* <a className="nav-link" href="#">Contact Me</a> */}
                <Link 
                    className='nav-link'
                    // onClick={scrollToBottom}
                    to="contactpg" 
                    spy={true} 
                    smooth={true} 
                    offset={-90} 
                    duration={500}>
                  Contact Me
                </Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}
