import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './signup.css';

const Signup = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login", { state: { message: "Account created successfully!" } });
    } catch (error) {
      console.log(error.code);
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('This email is already registered');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address');
          break;
        case 'auth/weak-password':
          setError('Password must be at least 6 characters');
          break;
        default:
          setError('Failed to create account. Please try again');
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Signup</h1>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSignup}>
          <input 
            type="email" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Create Account</button>
        </form>
        <div className="login-link">
          <Link to="/login">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;