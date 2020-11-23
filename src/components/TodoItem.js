import './TodoItem.scss';
import closeIcon from '../close-icon.png';

function TodoItem(props) {
  return (
    <div className="TodoItem">
      {props.text}
      <img src={closeIcon} className="CloseIcon" />
    </div>
  );
}

export default TodoItem;
