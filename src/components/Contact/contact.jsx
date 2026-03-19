import React, { useState } from 'react';
import './contact.css';

function Contact() {
  // Estado para guardar los datos del formulario
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  // Función para actualizar el estado cuando el usuario escribe
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    console.log('Formulario enviado:', formData); // Muestra los datos en la consola
    alert('Formulario enviado! Revisa la consola para ver los datos.');
  };

  return (
    <section className="contact-page">
      <h2 className="page-title">CONTACT US</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="name-fields">
          <input 
            type="text" 
            name="firstName"
            placeholder="First Name" 
            value={formData.firstName} 
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="lastName"
            placeholder="Last Name" 
            value={formData.lastName} 
            onChange={handleChange} 
          />
        </div>
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        <input 
          type="tel" 
          name="phone"
          placeholder="Phone Number" 
          value={formData.phone} 
          onChange={handleChange} 
        /> 
        <textarea 
          name="message"
          placeholder="Message" 
          value={formData.message} 
          onChange={handleChange} 
        ></textarea>
        <button type="submit">SEND</button>
      </form>
    </section>
  );
}

export default Contact;