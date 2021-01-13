/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from '@material-ui/core';
import {
  filterTodoItemsAll,
  filterTodoItemsDone,
  filterTodoItemsUndone,
} from './actions';
import { FILTER_ALL, FILTER_DONE, FILTER_UNDONE } from './constants';

function Filter(props) {
  const {
    showAllTodo, showDoneTodo, showUndoneTodo, filter,
  } = props;

  const isBold = (buttonFilter) => ({
    fontWeight: buttonFilter === filter ? 'bold' : 'normal',
  });

  return (
    <ButtonGroup variant="contained" color="primary">
      <Button style={isBold(FILTER_ALL)} onClick={showAllTodo}>All</Button>
      <Button style={isBold(FILTER_DONE)} onClick={showDoneTodo}>Done</Button>
      <Button style={isBold(FILTER_UNDONE)} onClick={showUndoneTodo}>Undone</Button>
    </ButtonGroup>
  );
}

const mapStateToProps = (state) => ({
  filter: state.changeFilter.filter,
});

const mapDispatchToProps = (dispatch) => ({
  showAllTodo: () => dispatch(filterTodoItemsAll()),
  showDoneTodo: () => dispatch(filterTodoItemsDone()),
  showUndoneTodo: () => dispatch(filterTodoItemsUndone()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
