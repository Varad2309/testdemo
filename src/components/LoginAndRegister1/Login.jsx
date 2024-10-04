import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLogin = () => {
    // You can add any validation or other logic here if needed
    setSuccess('Login successful!');
    setError('');
    navigate('/home'); // Navigate to home page
  };

  return (
    <div className='login-page'>
      <div className='login-container'>
        <div className='login-left'>
          <h1>Welcome Back</h1>
          <p className='left-text'>
            Please login using your personal information to stay connected with us.
          </p>
        </div>
        
        <div className='login-right'>
          <h2>Login</h2>
          <form>
            <input
              type="text"
              placeholder='Email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder='Password'
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
            <button className='login-button' type='button' onClick={handleLogin}>
              Login
            </button>
          </form>
          {error && <p className='error-message'>{error}</p>}
          {success && <p className='success-message'>{success}</p>}
          <div className='signup-prompt'>
            Don't have an account?{' '}
            <Link
              className='signup-link'
              to="/register"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
