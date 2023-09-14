import React, { useState, useEffect } from 'react';


export const PostDownloader =() =>{
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json') 
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []);
  
    
        return <div>{JSON.stringify(data)}</div>;
   
    
  };
  
  