import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SignupInput from '../components/Signupinput';
import './login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/home", { state: { message: "Logged in successfully!" } });
    } catch (error) {
      console.log(error.code);
      if (error.code === 'auth/user-not-found') {
        setError('No account found with this email');
      } else if (error.code === 'auth/wrong-password') {
        setError('Incorrect password');
      } else if (error.code === 'auth/invalid-email') {
        setError('Invalid email address');
      } else if (error.code === 'auth/invalid-credential') {
        setError('Invalid email or password');
      } else {
        setError('Login failed. Please try again');
      }
    }
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign in clicked');
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        {error && <div className="error-message">{error}</div>}
        
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
        <button className="login-btn" type="submit">
          Log in
        </button>
        <Link to="/signup" className="signup-btn">
          Sign Up
        </Link>
        <button className="google-btn" type="button" onClick={handleGoogleSignIn}>
          <span className="google-icon">G</span>
          Continue With Google
        </button>
      </form>
    </div>
  );
};

export default Login;