
import Recipe from '../Recipe/Recipe';
const Receipes = ({recipes,handleWantToClick}) => {
    return (
        <div className='grid grid-cols-2 gap-5 w-2/3'>
            {
            recipes.map(recipe => <Recipe 
            recipe={recipe} key={recipe.id}
            handleWantToClick={handleWantToClick}></Recipe>)
            }
        </div>
    );
};


export default Receipes;