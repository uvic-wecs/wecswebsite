import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const service_id = secrets.REACT_APP_YOUR_SERVICE_ID;
    const template_id = secrets.REACT_APP_YOUR_TEMPLATE_ID;
    const public_key = secrets.REACT_APP_YOUR_PUBLIC_KEY;
    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: public_key,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact-form'>
      <h3>This feature is being tested and doesn't currently work!</h3>
      <h4>Please email us at uvicwecs.official@gmail.com to connect.</h4>
      <h2>Get in touch!</h2>

      <form ref={form} onSubmit={sendEmail}>
        <label for='userName'>Name</label>
        <input type="text" name="user_name" id="userName" autoComplete='on' />
        <label for='emailID'>Email</label>
        <input type="email" name="user_email" id="emailID" />
        <label for='messageBox'>Message</label>
        <textarea name="message" id="messageBox" />
        <input type="submit" value="Send" id="submitButton" />
      </form>
    </div>
  )
};

export default ContactForm;