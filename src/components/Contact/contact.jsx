import React from 'react';
import './contact.css';

function Contact() {
  return (
    <section className="contact-page">
      <h2 className="page-title">CONTACT US</h2>
      <form className="contact-form">
        <div className="name-fields">
    <input type="text" placeholder="First Name" />
    <input type="text" placeholder="Last Name" />
  </div>
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone Number" /> 
        <textarea placeholder="Message"></textarea>
        <button type="submit">SEND</button>
      </form>
    </section>
  );
}

export default Contact;