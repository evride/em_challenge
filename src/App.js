import './App.scss';
import { useState } from 'react';

import List from './components/List';
import TodoInput from './components/TodoInput';

function App() {
  const [ todoList, setTodoList ] = useState([]);

  const addTodoListItem = (str) => {
    //Adds a todo item to the todoList
    const newTodoList = todoList.concat();
    const newTodoItem = { text: str, key: new Date().getTime()}
    newTodoList.push(newTodoItem);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <List list={todoList}></List>
        <TodoInput addTodoItem={addTodoListItem}></TodoInput>
      </header>
    </div>
  );
}

export default App;
