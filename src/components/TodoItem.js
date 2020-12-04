import './TodoItem.css';
import closeIcon from '../close-icon.png';

function TodoItem(props) {
  return (
    <div className="TodoItem">
      {props.text}
      <img src={closeIcon} className="CloseIcon" onClick={(evt) => { console.log(evt) } }/>
    </div>
  );
}

export default TodoItem;
