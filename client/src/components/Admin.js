import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/contact');
      setMessages(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>Contact Messages</h1>
      
      {loading ? (
        <p>Loading...</p>
      ) : messages.length === 0 ? (
        <p>No messages yet</p>
      ) : (
        <div>
          <p>Total messages: {messages.length}</p>
          {messages.map((msg, idx) => (
            <div key={idx} style={{
              border: '1px solid #ddd',
              padding: '1rem',
              marginBottom: '1rem',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9'
            }}>
              <h3>{msg.name}</h3>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Date:</strong> {new Date(msg.submittedAt).toLocaleString()}</p>
              <p><strong>Message:</strong></p>
              <p style={{ whiteSpace: 'pre-wrap', backgroundColor: '#fff', padding: '0.5rem' }}>
                {msg.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Admin;
