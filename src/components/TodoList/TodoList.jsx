/* eslint-disable react/prop-types */
import React from 'react';
import { List } from '@material-ui/core';
import TodoItem from '../TodoItem/TodoItem';
import { FILTER_ALL, FILTER_DONE, FILTER_UNDONE } from '../../containers/Filter/constants';

export default function TodoList(props) {
  const {
    todoItems, onRemove, onToggle, filter,
  } = props;
  return (
    <List>
      {todoItems
        .filter((el) => {
          switch (filter) {
            case FILTER_ALL:
              return true;
            case FILTER_DONE:
              return el.done;
            case FILTER_UNDONE:
              return !el.done;
            default:
              return true;
          }
        })
        .map((el, index) => (
          <TodoItem
            id={el.id}
            text={el.text}
            done={el.done}
            onRemove={() => onRemove(index)}
            onToggle={() => onToggle(index)}
            index={index}
            key={el.id}
          />
        ))}
    </List>
  );
}
