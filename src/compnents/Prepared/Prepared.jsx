import PropTypes from 'prop-types'


const Prepared = ({prepared,index}) => {
    const {name,preparing_time,calories,} = prepared;
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    <tbody>
      {/* row 1 */}
      <tr>
        <th>{index+1}</th>
        <td>{name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td> 
      </tr>
      {/* row 2 */}
      
    </tbody>
  </table>
</div>
</div>
    );
};
Prepared.propTypes = {
    prepared:PropTypes.object,
    index:PropTypes.number
}
export default Prepared;