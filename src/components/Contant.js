import React, { useRef, useState} from 'react';
import { BsFillTelephoneFill, BsGithub } from 'react-icons/bs';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { AiFillLinkedin, AiOutlineDoubleRight } from 'react-icons/ai'
import emailjs from '@emailjs/browser';

const Contant = () => {
    const ref = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    

    const handleSubmit = e => {
        e.preventDefault ();
        setLoading (true);
        emailjs
        .sendForm (
            'service_gmm2fzk',
            'template_86th7a9',
            ref.current,
            '_dJ_N-ANzeW06Z19C'
        )
        .then (
            result => {
            console.log(result.text);
            setSuccess(true);
            setLoading (false);
            window.location.reload();
            },
            error => {
            console.log (error.text);
            setLoading (false);
            }
        );
    };

    console.log(loading)

  return (
    <div className='contact' id="contact">
        <h2>Contact Me</h2>
        <div className="contact-inner">
            <div className="left">
                <p>Get In Touch</p>
                <div className="items">
                    <div className="item">
                        <i><BsFillTelephoneFill /></i>
                        <span>+959 976150063</span>
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
                        <a href="https://github.com/myoaung1234"><i><BsGithub /></i></a>
                        <a href="https://www.linkedin.com/in/myo-aung-2a374823b/"><i><AiFillLinkedin /></i></a>
                    </div>
                </div>
            </div>
            <form  ref={ref} onSubmit={handleSubmit} >
                <div className="form-data">
                    <input type="text" name='name' placeholder='Your Name...' required/>
                </div>
                <div className="form-data">
                    <input type="email" name='email' placeholder='Email Address...' pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required/>
                </div>
                <div className="form-data">
                    <textarea rows="5" name='message' placeholder='Message' required/>
                </div>
                
                <button type="submit" >
                    {loading ? <span>Loading...</span> : <span style={{backgroundColor: 'transparent'}}>Send Email</span>}
                </button>
                {success ? <span>Email has been sent successfully....</span> : "" }
            </form>
        </div>
        
    </div>
  )
}

export default Contant