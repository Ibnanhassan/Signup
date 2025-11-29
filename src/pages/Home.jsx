import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
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