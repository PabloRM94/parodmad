import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });
  const form = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });
    
    emailjs.sendForm(
      'service_cr2togj',
      'template_5b67jxc',
      form.current,
      'Iwaxv-m_aagPVrTRl'
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setStatus({ submitting: false, success: true, error: null });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        
        // Provide more user-friendly error messages based on the error type
        let userFriendlyError = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.';
        
        if (error.text && error.text.includes('Gmail_API')) {
          userFriendlyError = 'Error de autenticación con Gmail. Por favor, contacta al administrador del sitio.';
        }
        
        setStatus({ submitting: false, success: false, error: userFriendlyError });
      });
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '50px 20px',
      background: '#1a1a1a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }}>
      <h1 style={{ marginBottom: '40px' }}>Contacto</h1>
      
      {status.success && (
        <div style={{ 
          backgroundColor: '#4CAF50', 
          padding: '10px 20px', 
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          ¡Mensaje enviado correctamente!
        </div>
      )}
      
      {status.error && (
        <div style={{ 
          backgroundColor: '#f44336', 
          padding: '10px 20px', 
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          Error al enviar el mensaje: {status.error}
        </div>
      )}
      
      <form 
        ref={form}
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        <div>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#2a2a2a',
              color: 'white'
            }}
          />
        </div>
        
        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#2a2a2a',
              color: 'white'
            }}
          />
        </div>
        
        <div>
          <label htmlFor="subject" style={{ display: 'block', marginBottom: '5px' }}>Asunto</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#2a2a2a',
              color: 'white'
            }}
          />
        </div>
        
        <div>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#2a2a2a',
              color: 'white'
            }}
          ></textarea>
        </div>
        
        <button 
          type="submit"
          disabled={status.submitting}
          style={{
            background: status.submitting ? '#cccccc' : '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '12px',
            borderRadius: '4px',
            cursor: status.submitting ? 'default' : 'pointer',
            fontSize: '16px',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            if (!status.submitting) {
              e.currentTarget.style.backgroundColor = '#3e8e41';
            }
          }}
          onMouseOut={(e) => {
            if (!status.submitting) {
              e.currentTarget.style.backgroundColor = '#4CAF50';
            }
          }}
        >
          {status.submitting ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </form>
    </div>
  );
};

export default ContactSection;