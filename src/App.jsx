import Banner from './compnents/banner/Banner';
import { useState } from 'react'
import './App.css'
import Recipes from './compnents/Recipes/Recipes';
import { useEffect } from 'react';
import WantToCooks from './compnents/WantToCooks/WantToCooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const notify = () => toast("You Already Clicked!");
  const [recipes,setRecipes] = useState([]);
  const [wantToCooks , setWantToCooks] = useState([]);
  const [prepareds ,setPrpareds] =useState([]);
  console.log(prepareds);
  useEffect(()=>{
    fetch('recipe.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  },[])
  
  const handleWantToClick = recipe =>{
    const isExist = wantToCooks.find(cook=>cook.id == recipe.id);
    if(!isExist){
      setWantToCooks([...wantToCooks,recipe]);
    }else{
      notify()
     }
     
  //  const newWantToCook = [...wantToCooks,recipe];
  // setWantToCooks(newWantToCook);
   }
   const handlePrepared = (item) =>{
   const newPrepareds = [...prepareds,item]
  setPrpareds(newPrepareds);
  const remaining = wantToCooks.filter(i => i.id !==item.id)
  setWantToCooks(remaining);
   }
  

   console.log(prepareds)
  return (
    <>
      
      <ToastContainer/>
      <div className=''>
      <Banner></Banner>
      <div className="flex justify-between gap-5">
   
      <Recipes 
   recipes={recipes}
   handleWantToClick={handleWantToClick}
   
   >
   </Recipes>
   
    
    <WantToCooks wantToCooks={wantToCooks}
    handlePrepared={handlePrepared}
    prepareds = {prepareds}
    ></WantToCooks>
    </div>
   </div>
      
      
    </>
  )
}

export default App
