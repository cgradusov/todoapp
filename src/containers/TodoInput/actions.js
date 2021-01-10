import {
    INPUT_CHANGE
} from './constants';

export const changeInput = (text) => {
    return {
        type: INPUT_CHANGE,
        payload: text
    }
}
