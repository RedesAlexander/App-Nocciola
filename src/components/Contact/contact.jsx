import React from 'react';
import './contact.css';

function Contact() {
  return (
    <section className="contact-page">
      <h2 className="page-title">CONTACT US</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">SEND</button>
      </form>
    </section>
  );
}

export default Contact;