const Filter = (props) => (
  <select value={props.filter} onChange={(e) => props.handleChangeFilter(e)}>
    <option value='ALL'>ALL</option>
    <option value='COMPLETED'>COMPLETED</option>
    <option value='PENDING'>PENDING</option>
  </select>
);

export default Filter;
