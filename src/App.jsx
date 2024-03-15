
import { useState } from 'react'
import './App.css'
import Recipes from './compnents/Recipes/Recipes';
import { useEffect } from 'react';

function App() {
  const [recipes,setRecipes] = useState([]);
  useEffect(()=>{
    fetch('recipe.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  },[])
  
  return (
    <>
      
      <Recipes recipes={recipes}></Recipes>
      
      
    </>
  )
}

export default App
