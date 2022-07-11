import React from "react";
import "./contact.css";
import {MdOutlineEmail, MdSms} from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"

const Contact = () => {
 
  return (
    <section id="contact" className=" container">
      <h5 className="center">Get in Touch</h5>
      <h2 className="center">Contact Me</h2>
      <div className="contact_container">
      <div className="contact_options">
        <article className="contact_option">
        <MdOutlineEmail />
        <h4>Email</h4>
        <h5>melissamlycan@gmail.com</h5>
        <a href="mailto:melissamlycan@gmail.com">Send a Message!</a>
        </article>
        <article className="contact_option">
          <RiMessengerLine />
        <h4>Messenger</h4>
        <h5>Facebook</h5>
        <a href="https://m.me/melissalycan">Facebook Me!</a>
        </article>
        <article className="contact_option">
        <MdSms />
        <h4>Text Message</h4>
        <h5>(720)933-4868</h5>
        <a href="sms:+17209334868">Text Me!</a>
        </article>
      </div>
      <div className="contact_form">
      <form className="form" actions="">
        <input className="inputName" type="text" name="name" placeholder='Your Full Name' required/>
        <input className="inputEmail" type="email" name='email' placeholder="Your Email" required />
        <textarea className="inputText" name="message" id="" rows="7" placeholder="Your Message" required></textarea>
        <button type="submit" className='btn btn-primary'>Send Message</button>
      </form>
      </div>
      </div>
    </section>
  );
};

export default Contact;
