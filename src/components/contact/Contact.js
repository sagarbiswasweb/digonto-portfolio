import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {TbBrandLinkedin} from 'react-icons/tb'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_057m8ge', 'template_wxck4qs', form.current, 'Pz9j5zbhUXNZpY86J')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me To Place Order or Get Info</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <a href='mailto:debashis9872@gmail.com' target="_blank">
            <article className='contact__option'>
              <AiOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>debashis9872@gmail.com</h5>
              <small>Send Email</small>
            </article>
          </a>
          

          {/* <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Sagar Biswas</h5>
            <a href='' target="_blank">Send a message</a>
          </article> */}

          <a href='https://www.linkedin.com/authwall?trk=bf&trkInfo=bf&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fdebashis-sarkar-1a7048194' target="_blank">
            <article className='contact__option'>
              <TbBrandLinkedin className='contact__option-icon'/>
              <h4>LinkedIn</h4>
              <h5>debashis Sarkar</h5>
              <small>Send a message</small>
            </article>
          </a>
          
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required></input>
          <input type='email' name='email' placeholder='Your Email' required></input>
          <textarea name='message' rows={7} placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact