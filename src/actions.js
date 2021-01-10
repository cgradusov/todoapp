import {
    ADD_TODO_ITEM,
    REMOVE_TODO_ITEM,
    EDIT_TODO_ITEM,
    TOGGLE_ITEM,
    INPUT_CHANGE
} from './constants';


export const addTodoItem = () => ({
    type: ADD_TODO_ITEM
})

export const removeTodoItem = (index) => ({
    type: REMOVE_TODO_ITEM,
    payload: index
})

export const editTodoItem = () => ({
    type: EDIT_TODO_ITEM
})


export const toggleItem = (index) => ({
    type: TOGGLE_ITEM,
    payload: index
})

export const changeInput = (text) => {
    return {
        type: INPUT_CHANGE,
        payload: text
    }
}
