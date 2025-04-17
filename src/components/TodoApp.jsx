import { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { v4 as uuid } from 'uuid';
import Filter from './Filter';

const TodoApp = () => {
  const [todoList, setTodoList] = useState(() => {
    return JSON.parse(localStorage.getItem('todoList')) || []
  });
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('ALL');
  const [filteredList, setFilteredList] = useState(todoList);

  /**
   * @description Updates the todo list in the local storage whenver the todo list gets updated
   */
  useEffect(() => localStorage.setItem('todoList', JSON.stringify(todoList)), [todoList]);

  /**
   * @description Filters the todo list
   */
  useEffect(() => {
    switch (filter) {
      case 'ALL':
        setFilteredList(todoList);
        break;
      case 'COMPLETED':
        setFilteredList(todoList.filter(task => task.isCompleted));
        break;
      case 'PENDING':
        setFilteredList(todoList.filter(task => !task.isCompleted));
        break;
      default:
        console.error('Invalid filter!');
    }
  }, [filter, todoList]);

  /**
   * @description Updates the task description of the would be added task
   * @param {*} e 
   */
  const handleSetNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  /**
   * @description Adds a new task
   */
  const handleAddTodo = () => {
    const newTodoList = [{
      id: uuid(),
      description: newTodo,
      isCompleted: false
    }, ...todoList];
    console.log({newTodoList});
    setTodoList(newTodoList);
    setNewTodo('');
  };

  /**
   * @description Changes the filter option
   * @param {*} e 
   */
  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
  }

  /**
   * @description Changes the completion state of a task
   * @param {*} e 
   * @param {number} id 
   */
  const handleChecked = (e, id) => {
    console.log(e.target.checked);
    console.log(id);
    todoList.map(task => {
      if(task.id === id) {
        task.isCompleted = e.target.checked;
      }
      return task;
    });

    localStorage.setItem('todoList', JSON.stringify(todoList));
    setTodoList(todoList);
  };

  /**
   * @description Deletes a task
   * @param {number} id 
   */
  const handleDelete = (id) => {
    const newTodoList = todoList.filter(task => task.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <>
      <AddTodo newTodo={newTodo} handleChange={handleSetNewTodo} handleAdd={handleAddTodo} />
      <Filter filter={filter} handleChangeFilter={handleChangeFilter} />
      <TodoList todoList={filteredList} handleChecked={handleChecked} handleDelete={handleDelete} />
    </>
  );
}

export default TodoApp;
