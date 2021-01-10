import {
    FILTER_ALL,
    FILTER_DONE,
    FILTER_UNDONE,
} from './constants';

export const filterTodoItemsAll = () => ({
    type: FILTER_ALL,
})

export const filterTodoItemsDone = () => ({
    type: FILTER_DONE,
})

export const filterTodoItemsUndone = () => ({
    type: FILTER_UNDONE,
})
