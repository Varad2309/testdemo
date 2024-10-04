import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'; // Ensure you have styles for the updated layout

const Register = () => {
  const [formData, setFormData] = useState({
    userID: '',
    fname: '',
    lname: '',
    gender: 'Male', // Default gender value
    email: '',
    password: '',
    mobilenumber: '',
    role: 'employee', // Default role value
    courseid: '',
    compantid: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className='register-page'>
      <div className='register-container'>
        <div className='register-left'>
          <h1>Welcome to Registration</h1>
          <p className='left-text'>
            Please register to create a new account.
          </p>
        </div>
        
        <div className='register-right'>
          <h2>Register</h2>
          <form>
            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor='userID'>User ID</label>
                <input
                  type="text"
                  id='userID'
                  placeholder='User ID'
                  name='userID'
                  value={formData.userID}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='fname'>First Name</label>
                <input
                  type="text"
                  id='fname'
                  placeholder='First Name'
                  name='fname'
                  value={formData.fname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor='lname'>Last Name</label>
                <input
                  type="text"
                  id='lname'
                  placeholder='Last Name'
                  name='lname'
                  value={formData.lname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='gender'>Gender</label>
                <select
                  id='gender'
                  name='gender'
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Other'>Other</option>
                </select>
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type="email"
                  id='email'
                  placeholder='Email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  type="password"
                  id='password'
                  placeholder='Password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor='mobilenumber'>Mobile Number</label>
                <input
                  type="text"
                  id='mobilenumber'
                  placeholder='Mobile Number'
                  name='mobilenumber'
                  value={formData.mobilenumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='courseid'>Course ID</label>
                <input
                  type="text"
                  id='courseid'
                  placeholder='Course ID'
                  name='courseid'
                  value={formData.courseid}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor='compantid'>Company ID</label>
                <input
                  type="text"
                  id='compantid'
                  placeholder='Company ID'
                  name='compantid'
                  value={formData.compantid}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='role'>Role</label>
                <select
                  id='role'
                  name='role'
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value='employee'>Employee</option>
                  <option value='admin'>Admin</option>
                  <option value='hr'>HR</option>
                </select>
              </div>
            </div>

            <button className='register-button' type='button'>
              Register
            </button>
          </form>
          {error && <p className='error-message'>{error}</p>}
          {success && <p className='success-message'>{success}</p>}
          <div className='login-prompt'>
            Already have an account?{' '}
            <Link
              className='login-link'
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
