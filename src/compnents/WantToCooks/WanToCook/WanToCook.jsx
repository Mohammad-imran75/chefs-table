import PropTypes  from 'prop-types';



const WanToCook = ({wantToCook,index,handlePrepared,prepareds}) => {
    const {name,preparing_time,calories}=wantToCook;
    // console.log(wantToCook)
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
         <td><button onClick={()=>handlePrepared(wantToCook)} className='bg-green-400 p-4 rounded-xl text-black'>Preparing</button></td>
      </tr>
    </tbody>
  </table>
</div>
      
    </div>
   );
};
WanToCook.propTypes ={
    wantToCook:PropTypes.object,
    index:PropTypes.number,
    handlePrepared:PropTypes.func,
    
}
export default WanToCook;