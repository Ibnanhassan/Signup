import React from 'react'
import { useState } from "react";
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import './signup.css'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User created!");
    } catch (err) {
        navigate("/home", { state: { message: "Account created successfully!" } });
    }
  };
  
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Signup</h1>
        {error && <p style={{color: "red"}}>{error}</p>}
        <form onSubmit={handleSignup}>
          <input 
            type="email" 
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Signup