import { useState } from 'react';
import './TodoInput.css';


function TodoInput(props) {
  const [ todoText, setTodoText ] = useState("");

  const handleKeyUp = (evt) => {
  	if (evt.keyCode === 13) {
  		// Enter Key Pressed
  		console.log('enter pressed');
  		props.addTodoItem(todoText);
  	}
  }
  const handleChange = (evt) => {
  	setTodoText(evt.target.value);
  }
  
  return (
    <div className="TodoInput">
      <input type="text" onKeyUp={handleKeyUp} onChange={handleChange} />
    </div>
  );
}

export default TodoInput;
