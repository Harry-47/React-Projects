import { useState, useEffect } from "react";
import Newsitem from "./Newsitem";

const NewsitemList = ({ category }) => {
  const [newsCategory, setNewsCategory] = useState([]);
  
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6824ec0b77c440518c65222c3491f692`;
    
    fetch(url)
      .then(response => response.json())
      .then(newsObj => {
        setNewsCategory(newsObj.articles)
      console.log(newsObj)
    }) // Assuming 'articles' contains the list of news items.
  }, [category]); // Re-fetch if category changes

  return (
    <div>
      {newsCategory.map((item, index) => (
        <Newsitem
          key={index}
          title={item.title}
          description={item.description}
          url={item.url}
          urlToimage={item.urlToImage}
        />
      ))}
    </div>
  );
};

export default NewsitemList;
