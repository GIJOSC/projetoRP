import React from "react";
import { useNavigate } from "react-router-dom";

const Game = ({Title, thumbnail, description,id}) => {

  const navigate = useNavigate();
  const openGame = () => {
    navigate("/detalhe", {state:id})
  }
  return (
    <div>
      <h1>{Title}</h1>
      <img src={thumbnail}></img>
      <p>{description}</p>
      <button onClick={openGame}>Detalhes do Jogo</button>
    </div>
  
  
  )
}

export default Game;