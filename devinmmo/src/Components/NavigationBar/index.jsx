import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const NavigationBar = ({title}) => {
  return (<><body><div className="navigation-bar-container">
    <h1>{title}</h1>
    <Link to="/"><button>Home</button></Link>
    <Link to="/listgames"><button>Jogos</button></Link>
    <Link to="/news"><button>Notícias</button></Link>
    </div>
    </body>
    <footer class="footer">
    <br/>
    <br/>
    <h3 align="center">Connect with me: </h3>
    <p align="center">
        <a href="https://www.linkedin.com/in/gesiel-neves/" target="blank"><img align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                alt="https://www.linkedin.com/in/gesiel-neves/" height="30" width="40" /></a>
        <a href="https://fb.com/https://www.facebook.com/gesiel.neves.56" target="blank"><img align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg"
                alt="https://www.facebook.com/gesiel.neves.56" height="30" width="40" /></a>
        <a href="https://instagram.com/https://www.instagram.com/gesielneves/" target="blank"><img align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
                alt="https://www.instagram.com/gesielneves/" height="30" width="40" /></a>
        <a href="https://discord.gg/Gesiel#6421" target="blank"><img align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg"
                alt="Gesiel#6421" height="30" width="40" /></a>
        <a href="/https://gesiel-dsvendas.netlify.app/" target="blank"><img align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/rss.svg"
                alt="https://gesiel-dsvendas.netlify.app/" height="30" width="40" /></a>
    </p>
    <br/>
    <p align="center" class="autor">Desenvolvido por Gesiel Neves</p>
    <p align="center" class="copyright">Copyright ©2022 </p>
</footer>  
</>
  ) 
   
}



export default NavigationBar;