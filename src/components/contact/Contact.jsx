import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

const Contact = () => {
  
  const formRef = useRef();
  const [result, showResult] = useState(false);
  const notify = () => toast.success("😎 Your Message has Sucessfully sent! I will get back to you soon!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 3,
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4t7fygq', 'template_xri4tkf', formRef.current, 'LzpdRhj-XGGS86vXv')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
    showResult(true);
  }
  return (
    <section id="contact">
      <h5>Let me know about your dream project, we will turn it into reality!!</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>shrijitsrivastav@gmail.com</h5>
            <a href="mailto:shrijitsrivastav@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Full Name" name="fullName" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <textarea placeholder="Your message" rows="7" name="message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
         <div className="message">
            {result ? notify()  : null }

         </div>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </form>
      </div>

    </section>
  )
}

export default Contact