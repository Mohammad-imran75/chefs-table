import PropTypes from 'prop-types'
import Prepared from '../Prepared/Prepared';

const Prepareds = ({prepareds}) => {
    
    console.log(prepareds);
    return (
        <div>
            <h1 className='text-2xl font-bold text-center mt-5'>Cunrrently Cooking : {prepareds.length}</h1>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
  </table>
</div>
       {
        prepareds.map((prepared,idx) =><Prepared prepared = {prepared}
        index = {idx}
        key={idx}
        ></Prepared>)
       }
        </div>
    );
};
Prepareds.propTypes ={
    prepareds:PropTypes.object
}
export default Prepareds;