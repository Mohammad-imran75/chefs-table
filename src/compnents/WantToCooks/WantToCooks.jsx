import PropTypes from 'prop-types';
import WanToCook from './WanToCook/WanToCook';

const WantToCooks = ({wantToCooks,handlePrepared}) => {


    return (
        <div  className='lg:w-1/3 items-center bg-pink-200 space-y-3'>
            <h1 className='font-semibold text-2xl p-4 '>Want To Cook :{wantToCooks.length}</h1>
            <div className="overflow-x-auto">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='bg-purple-500 text-black rounded-lg'>
        
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
  </table>
</div>
</div>
            {
              wantToCooks.map((wantToCook,idx) =>
                <WanToCook key={idx} 
                index={idx} wantToCook={wantToCook}
                handlePrepared={handlePrepared}>
              </WanToCook>
              )
            }
            
    </div>
    );
};
WantToCooks.propTypes ={
    wantToCooks:PropTypes.object,
    handlePrepared:PropTypes.func
}
export default WantToCooks;