import './App.css';
import React from 'react';
import { useState } from 'react';
import GiphyLoad from './components/Giphy';
import Button from './components/Button';
import Body from './components/Body';

function App() {
   const apiKey = 'lNDWSK0J8mV6kyxYRjRbhtVqquO0kQca';
   const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
   const [giphy, setGiphy] = useState(null);
   const getGiphy = async () => {
       const response = await fetch(url);
       const data = await response.json();
       setGiphy(data);
   };
  
   return (
    <div className="App">
      <Body />
      <Button Giphy={getGiphy}/>
      <GiphyLoad giphy={giphy}/>
    </div>
  );
}

export default App;
