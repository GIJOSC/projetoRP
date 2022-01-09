import React from "react";

const NewsItem = ({Title, thumbnail, description}) => {
  return (
    <div>
      <h1>{Title}</h1>
      <img src={thumbnail} alt='imagem'></img>
      <p>{description}</p>
    </div>
  
  
  )
}

export default NewsItem;