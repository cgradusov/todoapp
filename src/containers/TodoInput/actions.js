import INPUT_CHANGE from './constants';

const changeInput = (text) => ({
  type: INPUT_CHANGE,
  payload: text,
});

export default changeInput;
