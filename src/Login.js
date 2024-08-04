import React, { useState } from 'react';
import './Login.css';
import img48 from './Images/Login in page image.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/users.json');
      const users = await response.json();
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        setMessage(`Login successful! Welcome, ${user.role === 'admin' ? 'Admin' : 'User'} ${email}.`);
      } else {
        setMessage('Invalid email or password.');
      }
    } catch (error) {
      setMessage('Error fetching user data.');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className="space-bottom1" style={{ fontSize: '33px' }}>B.planet</p>
        <div className="product-grid">
          <div className="product-item">
             <img src={img48} alt="" className="plant-image" />
          </div>
          <div className="product-item1">
          <p className="input-group" style={{ fontSize: '28px' }}>Login</p>
          <p className="input-group" style={{ fontSize: '13px' }}>Welcome back!!</p>
          <form onSubmit={handleLogin}>
              <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="wide-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="wide-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="button">Login</button>
            </form>
            {message && <p className="input-group" style={{ fontSize: '13px' }}>{message}</p>}
            <p className="input-group" style={{ fontSize: '13px' }}>Don't have an account? <a href="/signup">Sign up for free!</a></p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Login;
