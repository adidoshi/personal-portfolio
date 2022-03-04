import React, { useRef, useState } from "react";
import { CheckCircle } from "@mui/icons-material";
import './Contact.css'
import emailjs from 'emailjs-com';

const Contact = () => {
    const [done, setDone] = useState(false)

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
            <div className="info">
              <div className="contact-icon">
              <i className="fa-solid fa-envelope"></i>
              </div>
              <p className="info-text">adityadoshi25@gmail.com</p>
            </div>

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
