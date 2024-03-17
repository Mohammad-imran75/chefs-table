import { CiTimer } from "react-icons/ci";
import PropTypes from 'prop-types';
import { FaFire } from "react-icons/fa";


const Recipe = ({recipe,handleWantToClick,caloriess,preparingTime}) => {
    const {image,name,short_description,ingredients,calories,preparing_time} = recipe;
    // console.log(recipe);
    
    return (
       
        <div className='card-container  p-5 bg-[#28282833]'>
        <div className="card card-compact shadow-xl">
<figure><img src={image} alt="Shoes" /></figure>
<div className="card-body space-y-4">
<h2 className="card-title text-[20px] font-semibold">{name}</h2>
<p className='text-[#878787]'> {short_description}</p>
<h1 className='text-[20px] font-semibold'>Ingredients :{ingredients.length}</h1>
{
 ingredients.map((item,idx)=>{
    return <li key={idx} className='bg-white p-3 rounded-xl'>{item}</li>
 })
}
<div className='flex justify-between '>
    <p className="flex items-center gap-2"><CiTimer />{preparing_time}</p>
    <p className="flex items-center gap-2"><FaFire />{calories} Calories</p>
</div>
<div className="card-actions ">
<button onClick={()=>handleWantToClick(recipe)}
   className="btn bg-green-400 p-4 rounded-xl ">Want To cook</button>
  
</div>
</div>
</div>
    </div>
    );
};
Recipe.propTypes ={
    recipe:PropTypes.object,
    handleWantToClick:PropTypes.func
   
}
export default Recipe;