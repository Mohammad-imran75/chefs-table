import PropTypes  from 'prop-types';


const WanToCook = ({wantToCook,handlePrepared,index}) => {
    const {id,name,preparing_time,calories}=wantToCook;
    console.log(wantToCook)
    return (
        <div>
            <div className="overflow-x-auto ">
  <table className="table bg-slate-200 ">
    <tbody>
      {/* row 1 */}
      <tr>
        <th>{index+1}</th>
        <td>{name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
         <td><button onClick={()=>handlePrepared(wantToCook,id,preparing_time,calories)} className='bg-green-400 p-4 rounded-xl text-black'>Preparing</button></td>
      </tr>
    </tbody>
  </table>
</div>
          
    </div>
    );
};
WanToCook.propTypes ={
    wantToCook:PropTypes.object,
    handlePrepared:PropTypes.func,
    index:PropTypes.number
}
export default WanToCook;