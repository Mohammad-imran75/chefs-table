import PropTypes from 'prop-types';

const Recipe = ({recipe}) => {
    const {image,name,short_description,ingredients,calories,preparing_time} = recipe;
    // console.log(recipe);
    return (
        <div>
            <div className='card-container mt-10 '>
            <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{short_description}</p>
    {
     ingredients.slice(0,3)
    }
    <div className='flex justify-between'>
        <p>{preparing_time}</p>
        <p>{calories} Calories</p>
    </div>
    <div className="card-actions ">
      <button className="btn bg-green-400 p-4 rounded-xl">Want To cook</button>
    </div>
  </div>
</div>
        </div>
        <div>
            
        </div>
        </div>
       
    );
};
Recipe.propTypes ={
    recipe:PropTypes.object,
}
export default Recipe;