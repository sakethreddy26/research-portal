import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// API configuration
axios.defaults.baseURL = '';
axios.defaults.withCredentials = true;

const styles = {
    body: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      margin: 0,
      overflow: 'hidden',
      fontFamily: 'Arial, sans-serif',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '100%',
      height: '100%',
      padding: '2rem',
      background: 'rgba(255, 255, 255, 0.7)',
    },
    logo: {
      position: 'fixed',
      top: '1rem',
      left: '1rem',
      width: '201px',
      height: '88px',
    },
    logoImage: {
      display: 'block',
      margin: '0 auto 1rem',
      width: '201px',
      height: '88px',
    },
    formContainer: {
      background: 'rgba(255, 255, 255, 0.8)',
      padding: '25px',
      borderRadius: '10px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      width: '350px',
      textAlign: 'center',
    },
    heading: {
      marginBottom: '30px',
      fontSize: '24px',
    },
    input: {
      width: '90%',
      padding: '12px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
    },
    button: {
      width: '96%',
      background: '#0a1f44',
      color: 'white',
      padding: '12px',
      fontSize: '17px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '10px',
      marginBottom: '20px',
    },
    link: {
      color: '#0044cc',
      textDecoration: 'underline',
      fontSize: '15px',
      cursor: 'pointer',
    },
    linkContainer: {
      marginTop: '25px',
    },

  errorText: {
    color: '#ff0000',
    fontSize: '14px',
    marginBottom: '10px',
    textAlign: 'left',
    width: '90%',
    margin: '0 auto 15px'
  },
  successText: {
    color: '#008000',
    fontSize: '14px',
    marginBottom: '10px',
    textAlign: 'center'
  }
};

const SignUpPage = ({ onSignUpSuccess }) => {
  const [formData, setFormData] = useState({
    employeeId: '',
    email: '',
    phone: '',
    name: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.employeeId) {
      newErrors.employeeId = 'Employee ID is required';
    }
    
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate inputs before sending
    const validationErrors = {};
    if (!formData.employeeId) validationErrors.employeeId = 'Employee ID is required';
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.phone) validationErrors.phone = 'Phone is required';
    if (!formData.password) validationErrors.password = 'Password is required';
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://10.2.80.90:5000/v1/api/signup', {
        employeeId: formData.employeeId,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password
      }, {
        withCredentials: true
      });

      setSuccessMessage('Sign up successful! Redirecting to login...');
      setTimeout(() => {
        onSignUpSuccess();
      }, 2000);
    } catch (error) {
      setErrors({
        submit: error.response?.data?.message || 'An error occurred during signup'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div style={{ ...styles.body, backgroundImage: "url('/login_bg_acdemy.jpg')" }}>
      <div style={styles.container}>
        
        
        <div style={styles.formContainer}>
          <h2 style={styles.heading}>Sign Up</h2>
          
          {successMessage && (
            <div style={styles.successText}>{successMessage}</div>
          )}
          
          {errors.submit && (
            <div style={styles.errorText}>{errors.submit}</div>
          )}
          
          <form onSubmit={handleSignup}>
            <input
              type="text"
              name="employeeId"
              placeholder="Employee ID"
              style={styles.input}
              value={formData.employeeId}
              onChange={handleChange}
            />
            {errors.employeeId && (
              <div style={styles.errorText}>{errors.employeeId}</div>
            )}
            
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              style={styles.input}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <div style={styles.errorText}>{errors.name}</div>
            )}
            
            <input
              type="email"
              name="email"
              placeholder="Email"
              style={styles.input}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div style={styles.errorText}>{errors.email}</div>
            )}
            
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              style={styles.input}
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <div style={styles.errorText}>{errors.phone}</div>
            )}
            
            <input
              type="password"
              name="password"
              placeholder="Password"
              style={styles.input}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div style={styles.errorText}>{errors.password}</div>
            )}
            
            <button 
              type="submit" 
              style={{
                ...styles.button,
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? 'not-allowed' : 'pointer'
              }}
              disabled={isLoading}
            >
              {isLoading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
          
          <p style={styles.linkContainer}>
            <a onClick={onSignUpSuccess} style={styles.link}>
              Already have an account? Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const LoginPage = ({ onSignUpClick }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    employeeId: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.employeeId) {
      newErrors.employeeId = 'Employee ID is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    try {
      const response = await axios.post('http://10.2.80.90:5000/v1/api/login', {
        employeeId: formData.employeeId,
        password: formData.password
      }, {
        withCredentials: true
      });

      // Set login state in sessionStorage
      sessionStorage.setItem('userName', response.data.user.name);
      sessionStorage.setItem('isLoggedIn', 'true');
      
      // Force a reload to ensure the navbar updates
      window.location.href = '/';
    } catch (error) {
      setErrors({
        submit: error.response?.data?.message || 'Invalid credentials'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div style={{ ...styles.body, backgroundImage: "url('/pixelcut-export.jpg')" }}>
      <div style={styles.container}>
        
        
        <div style={styles.formContainer}>
          <h2 style={styles.heading}>Sign in</h2>
          
          {errors.submit && (
            <div style={styles.errorText}>{errors.submit}</div>
          )}
          
          <form onSubmit={handleLogin}>
            <input
              type="text"
              name="employeeId"
              placeholder="Employee ID"
              style={styles.input}
              value={formData.employeeId}
              onChange={handleChange}
            />
            {errors.employeeId && (
              <div style={styles.errorText}>{errors.employeeId}</div>
            )}
            
            <input
              type="password"
              name="password"
              placeholder="Password"
              style={styles.input}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div style={styles.errorText}>{errors.password}</div>
            )}
            
            <button 
              type="submit" 
              style={{
                ...styles.button,
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? 'not-allowed' : 'pointer'
              }}
              disabled={isLoading}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
          
          <p style={styles.linkContainer}>
            <a onClick={onSignUpClick} style={styles.link}>
              Don't have an account? Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const AuthPages = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <>
      {isSignUp ? (
        <SignUpPage onSignUpSuccess={() => setIsSignUp(false)} />
      ) : (
        <LoginPage onSignUpClick={() => setIsSignUp(true)} />
      )}
    </>
  );
};

export default AuthPages;
