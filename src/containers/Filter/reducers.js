import {
  FILTER_ALL,
  FILTER_DONE,
  FILTER_UNDONE,
} from './constants';

const initialStateFilter = {
  filter: FILTER_ALL,
};

const changeFilter = (state = initialStateFilter, action = {}) => {
  switch (action.type) {
    case FILTER_ALL:
      return { ...state, filter: FILTER_ALL };
    case FILTER_DONE:
      return { ...state, filter: FILTER_DONE };
    case FILTER_UNDONE:
      return { ...state, filter: FILTER_UNDONE };
    default:
      return state;
  }
};

export default changeFilter;
