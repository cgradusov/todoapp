import {
    ADD_TODO_ITEM,
    REMOVE_TODO_ITEM,
    EDIT_TODO_ITEM,

    TOGGLE_ITEM,

    FILTER_ALL,
    FILTER_DONE,
    FILTER_UNDONE,

    INPUT_CHANGE
} from './constants';


const initialStateTodoList = {
    inputText: '',
    todoItems: []
}

export const editTodoList = (state = initialStateTodoList, action = {}) => {

    switch (action.type) {
        case ADD_TODO_ITEM:
            return state.inputText !== ''
                ?
                { ...state, todoItems: [...state.todoItems, { text: state.inputText, done: false }], inputText: '' }
                : state
        case REMOVE_TODO_ITEM:
            return {
                ...state, todoItems: state.todoItems.filter((el, index) => {
                    return index !== action.payload
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
        case INPUT_CHANGE:
            return { ...state, inputText: action.payload }
        case TOGGLE_ITEM:
            return {
                ...state, todoItems: state.todoItems.map((el, index) => {
                    if (index === action.payload) {
                        el.done = !el.done
                    }
                    return el
                })
            }
        default:
            return state;
    }
}

const initialStateFilter = {
    filter: FILTER_ALL
};

export const changeFilter = (state = initialStateFilter, action = {}) => {
    switch (action.type) {
        case FILTER_ALL:
            return { ...state, filter: FILTER_ALL}
        case FILTER_DONE:
            return { ...state, filter: FILTER_DONE }
        case FILTER_UNDONE:
            return { ...state, filter: FILTER_UNDONE }
        default:
            return state       
    }
}
