import './App.css';
import TodoList from '../../components/TodoList/TodoList';
import { connect } from 'react-redux';
import { 
  changeInput, 
  addTodoItem, 
  removeTodoItem, 
  toggleItem, 
  filterTodoItemsAll, 
  filterTodoItemsDone, 
  filterTodoItemsUndone 
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
    showAllTodo,
    showDoneTodo,
    showUndoneTodo
  } = props;

  return (
    <div>

      <button onClick={showAllTodo}>All</button>
      <button onClick={showDoneTodo}>Done</button>
      <button onClick={showUndoneTodo}>Undone</button>
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
    onToggle: (index) => dispatch(toggleItem(index)),
    showAllTodo: () => dispatch(filterTodoItemsAll()),
    showDoneTodo: () => dispatch(filterTodoItemsDone()),
    showUndoneTodo: () => dispatch(filterTodoItemsUndone())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
