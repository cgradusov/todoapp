import {
    ADD_TODO_ITEM,
    REMOVE_TODO_ITEM,
    EDIT_TODO_ITEM,

    MARK_TODO_ITEM_DONE,
    MARK_TODO_ITEM_UNDONE,

    FILTER_ALL,
    FILTER_DONE,
    FILTER_UNDONE
} from './constants';


const initialStateTodoList = {
    todoItems: []
}

export const editTodoList = (state = initialStateTodoList, action = {}) => {
    switch (action.type) {
        case ADD_TODO_ITEM:
            return { ...state, todoItems: [...state.todoItems, action.payload] }
        case REMOVE_TODO_ITEM:
            return {
                ...state, todoItems: state.todoItems.filter((el, index) => {
                    return index !== action.payload.index
                })
            }
        case EDIT_TODO_ITEM:
            return {
                ...state, todoItems: state.todoItems.map((el, index) => {
                    if (index === action.payload.index) {
                        el.text = action.payload.text
                    }
                    return el
                })
            }
        default:
            return state;
    }
}

const initialStateTodoItem = {
    text: '',
    done: false
}

const initialStateFilter = {
    filter: FILTER_ALL
};
