import './App.css';
import TodoList from '../../components/TodoList/TodoList';
import Filter from '../Filter/Filter'
import TodoInput from "../TodoInput/TodoInput";
import { connect } from 'react-redux';
import {
  addTodoItem, 
  removeTodoItem, 
  toggleItem,
} from "./actions";

function App(props) {
  const {
    onAdd, 
    todoItems, 
    onRemove,
    onToggle,
    filter,
    inputText
  } = props;

  return (
    <div>
      <Filter />
      <br />
      <TodoInput onAdd={ () => onAdd(inputText) } />
      <button onClick={ () => onAdd(inputText) }>Add</button>
      <TodoList todoItems={todoItems} onRemove={onRemove} onToggle={onToggle} filter={filter} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todoItems: state.editTodoList.todoItems,
    inputText: state.changeInput.inputText,
    filter: state.changeFilter.filter,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (inputText) => dispatch(addTodoItem(inputText)),
    onRemove: (index) => dispatch(removeTodoItem(index)),
    onToggle: (index) => dispatch(toggleItem(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
