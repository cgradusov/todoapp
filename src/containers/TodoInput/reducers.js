import {
    INPUT_CHANGE
} from './constants';

import { ADD_TODO_ITEM } from '../App/constants'

const initialStateTodoInput = {
    inputText: '',
}

export const changeInput = (state = initialStateTodoInput, action = {}) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return { ...state, inputText: action.payload }
        case ADD_TODO_ITEM:
            return { ...state, inputText: '' }
        default:
            return state
    }
}
