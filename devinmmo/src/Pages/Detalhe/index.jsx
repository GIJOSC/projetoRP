import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Details from "../../Components/Details";
import NavigationBar from "../../Components/NavigationBar";

const Detalhe = () => {

 const location = useLocation();
 const idGame = location.state; 
 const [game,setGame] = useState([]);
 const [fotos,setFotos] = useState([]);

 useEffect (() =>{
  async function getGame() {
    const resultado = await fetch(`https://mmo-games.p.rapidapi.com/game?id=${idGame}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
        "x-rapidapi-key": "b5827b4c24msh19008387eed520bp19157ejsncdd910156db5"
      }
    })

    const data = await resultado.json();
    setGame(data);
    setFotos(data.screenshots);
  }
  getGame();


},[] );

return (<><NavigationBar title="DEVinMMO"/>
<Details title={game.title}
          description={game.short_description}
          thumbnail={game.thumbnail}
          genre={game.genre}
          platform={game.platform}
          publisher={game.publisher}
          screenshots={fotos} /></>
)
}

export default Detalhe;