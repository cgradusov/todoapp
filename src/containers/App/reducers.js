import {
  ADD_TODO_ITEM,
  REMOVE_TODO_ITEM,
  EDIT_TODO_ITEM,
  TOGGLE_ITEM,
} from './constants';

const initialStateTodoList = {
  todoItems: [],
};

const editTodoList = (state = initialStateTodoList, action = {}) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return action.payload !== ''
        ? { ...state, todoItems: [...state.todoItems, { text: action.payload, done: false }] }
        : state;
    case REMOVE_TODO_ITEM:
      return {
        ...state,
        todoItems: state.todoItems.filter((el, index) => index !== action.payload),
      };
    case EDIT_TODO_ITEM:
      return {
        ...state,
        todoItems: state.todoItems.map((el, index) => {
          if (index === action.payload.index) {
            return { ...el, text: action.payload.text };
          }
          return el;
        }),
      };
    case TOGGLE_ITEM:
      return {
        ...state,
        todoItems: state.todoItems.map((el, index) => {
          if (index === action.payload) {
            return { ...el, done: !el.done };
          }
          return el;
        }),
      };
    default:
      return state;
  }
};

export default editTodoList;
