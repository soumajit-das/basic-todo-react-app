const AddTodo = (props) => (
  <div>
    <input
      placeholder='Add task'
      value={props.newTodo}
      onChange={(e) => props.handleChange(e)}
    />
    <button onClick={props.handleAdd} disabled={!props.newTodo}>
      Add
    </button>
  </div>
);

export default AddTodo;
