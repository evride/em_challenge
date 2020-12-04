import './List.css';
import TodoItem from './TodoItem';

function List(props) {
  return (
    <div className="List">
      {
        props.list.map((item, i) => <TodoItem key={item.key} text={item.text} />)
      }
    </div>
  );
}

export default List;
