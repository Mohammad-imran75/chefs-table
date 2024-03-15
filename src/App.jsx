import Banner from './compnents/banner/Banner';
import { useState } from 'react'
import './App.css'
import Recipes from './compnents/Recipes/Recipes';
import { useEffect } from 'react';

function App() {
  const [recipes,setRecipes] = useState([]);
  const [wantToCook , setWantToCook] = useState([]);
  useEffect(()=>{
    fetch('recipe.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  },[])
  
  const handleWantToClick = recipe =>{
    console.log("almost click",recipe)
  }

  return (
    <>
      
      
      <div className=''>
      <Banner></Banner>
   <Recipes 
   recipes={recipes}
   handleWantToClick={handleWantToClick}>
    </Recipes>
   </div>
      
      
    </>
  )
}

export default App
