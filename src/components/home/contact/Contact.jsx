import React, { useRef, useState } from "react";
import { CheckCircle } from "@mui/icons-material";
import './Contact.css'
import emailjs from 'emailjs-com';
import useTheme from "../../../context/ThemeContext";


const Contact = () => {
    const [done, setDone] = useState(false)
    const { theme, iconColor } = useTheme();

    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_yochmv6', 'template_svzu2ko', formRef.current, 'FYFi7DiEgAKLNjqvJ')
      .then((result) => {
          console.log(result.text);
          setDone(true)
          formRef.current.value = "";
      }, (error) => {
          console.log(error.text);
      });

    }

  return (
    <section className="section">
         <div className="section-header">
        <h3 className="title">Contact Me</h3>
      </div>
      <div className="contact-box">
        <div className="contact-info">
       <h3>Connect with me</h3>
          <div className="info-wrap">
            <a
                href="mailto:adityadoshi25@gmail.com"
                target="_blank"
                rel="noreferrer" className="info">
              <div className="contact-icon">
              <i className="fa-solid fa-envelope" style={{color: iconColor}}></i>
              </div>
              <p className="info-text">adityadoshi25@gmail.com</p>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/adidoshi" className="info">
              <div className="contact-icon diff">
              <i className="devicon-github-original" style={{color: iconColor}}></i>
              </div>
              <p className="info-text"  style={{
        color: theme.foreground,
       
      }}>adidoshi</p>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aditya-doshi08" className="info">
              <div className="contact-icon diff">
              <i className="devicon-linkedin-plain"></i>
              </div>
              <p className="info-text"  style={{
        color: theme.foreground,
  
      }}>aditya-doshi08</p>
            </a>
          </div>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <h3 className="title">Send Message</h3>
          <div className="row">
            <input
              type="text"
              className="contact-input"
              placeholder="Name"
              name="user_name"
            />
            <input
              type="email"
              className="contact-input"
              placeholder="Email"
              name="user_email"
            />
          </div>
          
          <div className="row">
            <textarea
              name="user_message"
              className="contact-input textarea"
              placeholder="Message"></textarea>
          </div>
          <div className="email-done">
          <button type="submit" className="btn">Send</button> 
          {done && 
          <span>Sent<CheckCircle/></span>
          }
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
