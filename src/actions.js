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


export const addTodoItem = (text) => ({
    type: ADD_TODO_ITEM,
    payload: text
})

export const removeTodoItem = () => ({
    type: REMOVE_TODO_ITEM,
})

export const editTodoItem = (text) => ({
    type: EDIT_TODO_ITEM,
    payload: text
})


export const markTodoItemDone = () => ({
    type: MARK_TODO_ITEM_DONE,
})

export const markTodoItemUndone = () => ({
    type: MARK_TODO_ITEM_UNDONE,
})


export const filterTodoItemsAll = () => ({
    type: FILTER_ALL,
})

export const filterTodoItemsDone = () => ({
    type: FILTER_DONE,
})

export const filterTodoItemsUndone = () => ({
    type: FILTER_UNDONE,
})
