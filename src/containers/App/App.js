import './App.css';
import TodoList from '../../components/TodoList/TodoList';
import Filter from '../Filter/Filter'
import { connect } from 'react-redux';
import { 
  changeInput, 
  addTodoItem, 
  removeTodoItem, 
  toggleItem,
} from "../../actions";

function App(props) {
  const { 
    onInputChange, 
    onAdd, 
    inputText, 
    todoItems, 
    onRemove,
    onToggle,
    filter,
  } = props;

  return (
    <div>
      <Filter />
      <br />
      <input type="text" onChange={ onInputChange } value={ inputText } onKeyUp={ (e) => e.key === 'Enter' ? onAdd() : null }/>
      <button onClick={ onAdd }>Add</button>
      <TodoList todoItems={todoItems} onRemove={onRemove} onToggle={onToggle} filter={filter} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todoItems: state.editTodoList.todoItems,
    inputText: state.editTodoList.inputText,
    filter: state.changeFilter.filter,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: e => dispatch(changeInput(e.target.value)),
    onAdd: () => dispatch(addTodoItem()),
    onRemove: (index) => dispatch(removeTodoItem(index)),
    onToggle: (index) => dispatch(toggleItem(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
