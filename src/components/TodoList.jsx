import TodoItem from './TodoItem';

const TodoList = (props) => (
  <ul>
    {
      props.todoList.length === 0
        ? <p>No task found</p>
        : props.todoList.map((task) => (
            <li key={task.id}>
              <TodoItem
                id={task.id}
                description={task.description}
                isCompleted={task.isCompleted}
                handleChecked={props.handleChecked}
                handleDelete={props.handleDelete}
              />
            </li>
          ))
    }
  </ul>
);

export default TodoList;
