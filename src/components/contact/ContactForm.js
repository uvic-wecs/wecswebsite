import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import validator from 'validator';

const ContactForm = () => {

  const form = useRef();
  const [formErrors, setFormErrors] = useState({
    userName: '',
    userEmail: '',
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();
    //form validation 
    const formData = new FormData(form.current);
    const userName = formData.get('user_name');
    const userEmail = formData.get('user_email');
    const message = formData.get('message');
    
    // Reset errors
    setFormErrors({
      userName: '',
      userEmail: '',
      message: ''
    });

    // Simple validation checks
    let isValid = true;
    let errors = {};

    if (!userName) {
      isValid = false;
      errors.userName = 'Name is required';
    }

    if (!userEmail) {
      isValid = false;
      errors.userEmail = 'Email is required';
    } else if (!validator.isEmail(userEmail)) {
      isValid = false;
      errors.userEmail = 'Invalid email format';
    }

    if (!message) {
      isValid = false;
      errors.message = 'Message cannot be empty';
    }

    // If validation fails, set error messages
    if (!isValid) {
      setFormErrors(errors);
      return;
    }

    const service_id = process.env.REACT_APP_YOUR_SERVICE_ID;
    const template_id = process.env.REACT_APP_YOUR_TEMPLATE_ID;
    const public_key = process.env.REACT_APP_YOUR_PUBLIC_KEY;
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
      <h2>Get in touch!</h2>

      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor='userName'>Name</label>
        <div className='form-input'>
          <input type="text" name="user_name" id="userName" autoComplete='on' />
          {formErrors.userName && <p className="error">{formErrors.userName}</p>}
        </div>
        
        
        <label htmlFor='emailID'>Email</label>
        <div className='form-input'>
          <input type="email" name="user_email" id="emailID" />
          {formErrors.userEmail && <p className="error">{formErrors.userEmail}</p>}
        </div>

        <label htmlFor='messageBox'>Message</label>
        <div className='form-input'>
           <textarea name="message" id="messageBox" />
          {formErrors.message && <p className="error">{formErrors.message}</p>}
        </div>
        
        <input type="submit" value="Send" id="submitButton" />
      </form>
    </div>
  )
};

export default ContactForm;