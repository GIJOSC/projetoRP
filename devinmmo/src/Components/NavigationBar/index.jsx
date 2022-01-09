import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const NavigationBar = ({title}) => {
  return (<div className="navigation-bar-container">
    <h1>{title}</h1>
    <Link to="/"><button>Home</button></Link>
    <Link to="/listgames"><button>Jogos</button></Link>
    <Link to="/news"><button>Notícias</button></Link>
  </div>)   
  
  
}

export default NavigationBar;