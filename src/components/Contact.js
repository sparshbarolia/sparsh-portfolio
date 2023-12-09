import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

    const notify = () => toast.success('Email sent successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9x2pj1j', 'template_wqi1oj4', form.current, 'bDgWRro1tfvo-B8Lj')
        .then((result) => {
            toast.success('Email sent successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }, (error) => {
            toast.error('please try again later!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        });
    };    

  return (
    <>
        <div className="contact-container mb-5" id="contactpg" data-bs-theme="dark">
            <div className="contact-heading-container m-4">
                <div className="contact-heading my-2">Contact Me</div>
            </div>
            <div className="form-container">
                <form className='form-actual' ref={form} onSubmit={sendEmail}>
                    <div className="contact-name mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="exampleInputPassword1"
                            name="user_name"
                            // placeholder='Enter your Name here'
                        />
                    </div>

                    <div className="contact-email mb-3" >
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            name="user_email"
                            // placeholder='Enter your Email address here'
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    
                    {/* <div className="contact-textarea form-floating mt-3 mb-3"> */}
                    <div className="contact-textarea mb-3">
                        <label htmlFor="floatingTextarea2" className="form-label">Comments</label>
                        <textarea 
                            className="form-control" 
                            id="floatingTextarea2" 
                            style={{ height: '100px' }}
                            name="message">
                            {/* placeholder="Enter your message here"  */}
                        </textarea>
                    </div>
                    <button type="submit" className="btn">Let's Talk</button>
                </form>
            </div>
        </div>
        <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                />
    </>
  )
}
