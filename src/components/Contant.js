import React, { useRef } from 'react';
import { BsFillTelephoneFill, BsGithub } from 'react-icons/bs';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai'
import emailjs from '@emailjs/browser';

const Contant = () => {
    const ref = useRef();

    const handleSubmit = e => {
        e.preventDefault ();

        emailjs
        .sendForm (
            'service_gmm2fzk',
            'template_86th7a9',
            ref.current,
            '_dJ_N-ANzeW06Z19C'
        )
        .then (
            result => {
            console.log (result.text);
            },
            error => {
            console.log (error.text);
            }
        );
    };



  return (
    <div className='contact' id="contact">
        <h2>Contact Me</h2>
        <div className="contact-inner">
            <div className="left">
                <p>Contact with Me__</p>
                <div className="items">
                    <div className="item">
                        <i><BsFillTelephoneFill /></i>
                        <span>+959 940095846</span>
                    </div>
                    <div className="item">
                        <i><MdEmail /></i>
                        <span>myoaung.dev@gmail.com</span>
                    </div>
                    <div className="item">
                        <i><MdLocationOn /></i>
                        <span>Yangon, Myanmar</span>
                    </div>
                    <div className="links">
                        <i><BsGithub /></i>
                        <i><AiFillLinkedin /></i>
                    </div>
                </div>
            </div>
            <form  ref={ref} onSubmit={handleSubmit} >
                <div className="form-data">
                    <input type="text" name='name' placeholder='Your Name...' />
                </div>
                <div className="form-data">
                    <input type="email" name='email' placeholder='Email Address...' />
                </div>
                <div className="form-data">
                    <textarea rows="5" name='message' placeholder='Message'/>
                </div>
                <button type="submit">Send Email</button>
            </form>
        </div>
        
    </div>
  )
}

export default Contant