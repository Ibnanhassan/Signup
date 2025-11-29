import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SignupInput from '../components/Signupinput';
import './login.css';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
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
      navigate("/home");
    } catch (error) {
      console.log('Firebase Error Code:', error.code);

      switch (error.code) {
        case 'auth/invalid-credential':
          setError('Invalid email or password');
          break;
        case 'auth/invalid-email':
          setError('Please enter a valid email address');
          break;
        case 'auth/user-disabled':
          setError('This account has been disabled');
          break;
        case 'auth/too-many-requests':
          setError('Too many failed attempts. Try again later');
          break;
        case 'auth/network-request-failed':
          setError('Network error. Check your connection');
          break;
        case 'auth/missing-password':
          setError('Please enter your password');
          break;
        default:
          setError('Login failed. Please try again');
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setError(''); 
    try {
      const googleProvider = new GoogleAuthProvider(); 
      await signInWithPopup(auth, googleProvider);
      navigate("/home", { state: { message: "Logged in successfully!" } });
    } catch (error) {
      console.log('Google Sign-In Error:', error.code);
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          setError('Sign-in cancelled');
          break;
        case 'auth/popup-blocked':
          setError('Popup blocked. Please allow popups for this site');
          break;
        case 'auth/account-exists-with-different-credential':
          setError('An account already exists with this email');
          break;
        case 'auth/network-request-failed':
          setError('Network error. Check your connection');
          break;
        default:
          setError('Google sign-in failed. Please try again');
      }
    }
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

        <button 
          className="google-btn" 
          type="button" 
          onClick={handleGoogleSignIn}
        >
          <span className="google-icon">G</span>
          Continue With Google
        </button>
      </form>
    </div>
  );
};

export default Login;