import React from 'react'
import { connect } from 'react-redux';
import { changeInput } from "./actions";

function TodoInput(props) {
    const { onInputChange, inputText, onAdd } = props;

    return <input type="text" onChange={onInputChange} value={inputText} onKeyUp={(e) => e.key === 'Enter' ? onAdd() : null} />
}

const mapStateToProps = state => ({
    inputText: state.changeInput.inputText
})

const mapDispatchToProps = dispatch => ({
    onInputChange: e => dispatch(changeInput(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
