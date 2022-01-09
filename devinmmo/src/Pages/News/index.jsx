import React, { useEffect, useState } from "react";
import NewsItem from "../../Components/NewsItem";
import NavigationBar from "../../Components/NavigationBar";


const News = () => {
  
  useEffect (() =>{
    async function getNews() {
      const resultado = await fetch("https://mmo-games.p.rapidapi.com/latestnews", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "mmo-games.p.rapidapi.com",
          "x-rapidapi-key": "b5827b4c24msh19008387eed520bp19157ejsncdd910156db5"
        }
      });
      const data = await resultado.json();
      setNews(data);
    }
    getNews();


  },[] );

  const [news, setNews] = useState([]); 

  return (<><NavigationBar title="Lista de Notícias"/><div>
    {news.map((item) => (<NewsItem Title={item.title} thumbnail={item.thumbnail} description={item.short_description}/>))}
  </div></>)
}

export default News;