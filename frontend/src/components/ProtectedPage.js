import React, { useState, useEffect } from 'react';

const Protected = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProtected = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/protected', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(`Welcome ${data.logged_in_as}`);
      } else {
        setMessage('You are not authorized');
      }
    };
    fetchProtected();
  }, []);

  return <h2>{message}</h2>;
};

export default Protected;
