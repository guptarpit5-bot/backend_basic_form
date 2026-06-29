// Import React and useState hook
import React, { useState } from 'react';
import './App.css';

function App() {

  // These store what the user types
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');++

  // This stores the message from the server
  const [message, setMessage] = useState('');

  // This stores if it was success or error (used for CSS color)
  const [isSuccess, setIsSuccess] = useState(false);

  // This runs when user clicks the Login button
  const handleLogin = async () => {

    // Send username and password as simple text (NOT JSON)
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, // simple text format
      body: new URLSearchParams({ username, password }),  // sends: username=arpit&password=1234
    });

    // Read the reply from the server
    const data = await response.json();

    // Show the message on screen
    setMessage(data.message);
    setIsSuccess(data.success);
  };

  return (
    <div className="container">
      <div className="card">

        {/* Title */}
        <h1>🔐 Login</h1>
        <p>Enter your username and password</p>

        {/* Username input box */}
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Password input box */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <button className="btn" onClick={handleLogin}>
          Login
        </button>

        {/* Show message only if we have one */}
        {message && (
          <div className={isSuccess ? 'message success' : 'message error'}>
            {message}
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
