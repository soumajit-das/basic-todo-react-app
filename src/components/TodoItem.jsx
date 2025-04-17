import { useState } from 'react';

const TodoItem = (props) => {
  const [checked, setChecked] = useState(props.isCompleted);

  return (
    <label>
      <input
        type='checkbox'
        checked={checked}
        onChange={(e) => {
          props.handleChecked(e, props.id);
          setChecked(e.target.checked);
        }}
      />
      {props.description}
      <button onClick={() => props.handleDelete(props.id)}>
        Delete
      </button>
    </label>
  );
}

export default TodoItem;
