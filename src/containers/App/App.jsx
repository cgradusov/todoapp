/* eslint-disable react/prop-types */
import './App.css';
import { React } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Typography } from '@material-ui/core';
import TodoList from '../../components/TodoList/TodoList';
import Filter from '../Filter/Filter';
import TodoInput from '../TodoInput/TodoInput';
import {
  addTodoItem,
  removeTodoItem,
  toggleItem,
} from './actions';

function App(props) {
  const {
    onAdd,
    todoItems,
    onRemove,
    onToggle,
    filter,
    inputText,
  } = props;

  return (
    <Grid container style={{ gap: '20px' }}>
      <Grid container item xs={12} justify="center">
        <Typography variant="h2" component="h1">
          Todo App
        </Typography>
      </Grid>
      <Grid container item xs={12} justify="center">
        <Filter />
      </Grid>
      <Grid container item direction="row" xs={12} justify="center" spacing={1}>
        <Grid container item xs={5}>
          <TodoInput onAdd={() => onAdd(inputText)} />
        </Grid>
        <Button onClick={() => onAdd(inputText)}>Add</Button>
      </Grid>
      <Grid container xs={12} justify="center">
        <Grid item xs={6}>
          <TodoList todoItems={todoItems} onRemove={onRemove} onToggle={onToggle} filter={filter} />
        </Grid>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  todoItems: state.editTodoList.todoItems,
  inputText: state.changeInput.inputText,
  filter: state.changeFilter.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onAdd: (inputText) => dispatch(addTodoItem(inputText)),
  onRemove: (index) => dispatch(removeTodoItem(index)),
  onToggle: (index) => dispatch(toggleItem(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
