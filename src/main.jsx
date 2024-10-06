import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const colors = [
  "#FF5733",      // Hex code for a bright red-orange
  "#33FF57",      // Hex code for a bright green
  "#3357FF",      // Hex code for a bright blue
  "rgb(255, 99, 71)",    // RGB code for tomato red
  "rgb(135, 206, 250)",  // RGB code for light sky blue
  "rgba(255, 165, 0, 0.5)",  // RGBA code for a semi-transparent orange
  "lightcoral",   // Named color for light coral
  "gold",         // Named color for gold
  "midnightblue", // Named color for a deep blue
 
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App colors={colors}/>
  </StrictMode>,
)
