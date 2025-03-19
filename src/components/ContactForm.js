import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false); // Add loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start spinner

    emailjs
      .send(
        'service_row9bpj',
        'template_sxrbiq5',
        formData,
        'aSu3i1_mZ7_aIjlJe',
      )
      .then(
        (response) => {
          alert('Message sent successfully. Thank you for contacting!');
          console.log('SUCCESS!', response.status, response.text);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error('FAILED...', error);
        },
      )
      .finally(() => setLoading(false)); // Stop spinner
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
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
      {loading && <div className="spinner"></div>} {/* Spinner */}
    </form>
  );
};

export default ContactForm;
