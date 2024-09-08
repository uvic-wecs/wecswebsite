import React from 'react';
import welcomeImage from "../../resources/Welcome Home Page.png";
import './home.css';

const Home = () => {
    return (
      <div>
            <img src = {welcomeImage} style={{height:"100%", width:"100%"}}/>
          </div>

    )
  }

export default Home;