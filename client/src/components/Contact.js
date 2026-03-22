import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required');
      return;
    }

    try {
      console.log('Submitting form:', formData);
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      console.log('Response:', response.data);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Error details:', err.response?.data || err.message);
      setError(err.response?.data?.error || 'MESSAGE FAILED. TRY AGAIN.');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>CONTACT</h2>
        <p className="contact-intro">REACH OUT. LET'S BUILD SOMETHING.</p>
        <div className="contact-grid">
          <a href="mailto:sanjana.rajbhar321@gmail.com" className="contact-card">
            <i className="fas fa-envelope"></i>
            <h3>EMAIL</h3>
            <p>sanjana.rajbhar321@gmail.com</p>
          </a>
          <a href="tel:+919891065976" className="contact-card">
            <i className="fas fa-phone"></i>
            <h3>PHONE</h3>
            <p>+91-9891065976</p>
          </a>
          <a href="https://linkedin.com/in/sanjana21" target="_blank" rel="noopener noreferrer" className="contact-card">
            <i className="fab fa-linkedin"></i>
            <h3>LINKEDIN</h3>
            <p>linkedin.com/in/sanjana21</p>
          </a>
          <a href="https://github.com/sanjana1-2" target="_blank" rel="noopener noreferrer" className="contact-card">
            <i className="fab fa-github"></i>
            <h3>GITHUB</h3>
            <p>github.com/sanjana1-2</p>
          </a>
        </div>

        <div style={{ marginTop: '3rem', maxWidth: '600px', margin: '3rem auto 0' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SEND MESSAGE</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text"
              name="name"
              placeholder="YOUR NAME"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                padding: '0.75rem',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="YOUR EMAIL"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                padding: '0.75rem',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            />
            <textarea
              name="message"
              placeholder="YOUR MESSAGE"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                padding: '0.75rem',
                fontSize: '1rem',
                fontFamily: 'inherit',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            ></textarea>
            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'center' }}>
              SEND
            </button>
            {submitted && <p style={{ color: '#ff0000', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>MESSAGE SENT.</p>}
            {error && <p style={{ color: '#ff0000', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
