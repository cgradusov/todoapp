/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import changeInput from './actions';

function TodoInput(props) {
  const { onInputChange, inputText, onAdd } = props;

  return <TextField fullWidth onChange={onInputChange} value={inputText} onKeyUp={(e) => (e.key === 'Enter' ? onAdd() : null)} />;
}

const mapStateToProps = (state) => ({
  inputText: state.changeInput.inputText,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (e) => dispatch(changeInput(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
