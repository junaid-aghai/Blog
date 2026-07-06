import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Check against your password (or an API call)
    if (password === 'admin') {
      // 2. Redirect to the dashboard
      navigate('/admin/dashboard');
    } else {
      setError('Invalid password');
    }
  };
  return (
    <div className="admin">
      <div>
        <h1>Admin Dashboard</h1>
        <p>Enter your password to access the admin panel</p>
        <p style={{ color: 'red' }}>password: admin</p>
      </div>
      <div>
        <form onSubmit={handleLogin}>
          <input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}
export default Admin