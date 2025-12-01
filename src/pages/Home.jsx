import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home-container">
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
      
      <h1>Welcome Home!</h1>
      <img 
        src="https://media1.tenor.com/m/lMyK-VWhdfkAAAAd/rubbing-eye-robert-evans.gif" 
        alt="Welcome GIF"
        className="home-gif"
      />
    </div>
  );
};

export default Home;