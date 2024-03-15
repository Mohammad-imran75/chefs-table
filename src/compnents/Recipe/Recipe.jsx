import PropTypes from 'prop-types';

const Recipe = ({recipe,handleWantToClick}) => {
    const {image,name,short_description,ingredients,calories,preparing_time} = recipe;
    // console.log(recipe);
    return (
        <div className='card-container  p-5 bg-[#28282833]'>
        <div className="card card-compact shadow-xl">
<figure><img src={image} alt="Shoes" /></figure>
<div className="card-body space-y-4">
<h2 className="card-title text-[20px] font-semibold">{name}</h2>
<p className='text-[#878787]'> {short_description}</p>
{
 ingredients.slice(0,3)
}
<div className='flex justify-between '>
    <p>{preparing_time}</p>
    <p>{calories} Calories</p>
</div>
<div className="card-actions ">
  <button onClick={()=>handleWantToClick(recipe)} className="btn bg-green-400 p-4 rounded-xl ">Want To cook</button>
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