import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    console.log(formData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        rows="4"
        placeholder="Write your message here..."
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
