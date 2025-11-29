import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SignupInput from '../components/Signupinput';
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = () => {
    // Firebase login logic will go here
    console.log('Login clicked:', formData);
  };

  const handleSignup = () => {
    // Navigate to signup page
    console.log('Navigate to signup');
  };

  const handleGoogleSignIn = () => {
    // Google sign in logic will go here
    console.log('Google sign in clicked');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <SignupInput
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />

        <SignupInput
          type="password"
          name="password"
          placeholder="••••••••••••••••"
          value={formData.password}
          onChange={handleChange}
        />

        
        <button className="login-btn" onClick={handleLogin}>
          Log in
        </button>

        <Link to="/signup" className="signup-btn">
            Sign Up
        </Link>

        <button className="google-btn" onClick={handleGoogleSignIn}>
          <span className="google-icon">G</span>
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;