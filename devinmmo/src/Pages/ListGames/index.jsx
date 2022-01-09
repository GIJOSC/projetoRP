import React, { useEffect, useState } from "react";
import Game from "../../Components/Game";
import NavigationBar from "../../Components/NavigationBar";

const ListGames = () => {
  
  useEffect (() =>{
    async function getGame() {
      const resultado = await fetch("https://mmo-games.p.rapidapi.com/games", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "mmo-games.p.rapidapi.com",
          "x-rapidapi-key": "b5827b4c24msh19008387eed520bp19157ejsncdd910156db5"
        }
      });
      const data = await resultado.json();
      setGame(data);
    }
    getGame();


  },[] );

  const [game, setGame] = useState([]); 

  return (<><NavigationBar title="Lista de Games"/><div> 
    {game.map((item) => (<Game Title={item.title} thumbnail={item.thumbnail} description={item.short_description} id={item.id}/>))}
  </div></>)
}

export default ListGames;