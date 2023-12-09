import React from 'react'
import Typed from 'react-typed';

export default function Header() {
  return (
    <div>
      <div className="header-wraper">
        <div className="main-info">
            <h3>Hi There, I'm</h3>
            <h1><b>SPARSH</b></h1>
            <Typed
                className='typed-text'
                strings={["Data Structures and Algorithm","Web Development","Data Base Management System"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
        </div>
      </div>
    </div>
  )
}
