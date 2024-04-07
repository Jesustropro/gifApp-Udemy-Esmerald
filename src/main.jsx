import React from "react";
import ReactDOM from "react-dom/client";
import GifExpertApp from "./GifExpertApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
/* const API_KEY = `8GgSOIs3MROqjae7LMn16w6KACAaTeYJ`;
   const resp = await fetch(
     `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
   );*/
