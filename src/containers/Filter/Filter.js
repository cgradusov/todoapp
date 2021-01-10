import React from 'react'
import { connect } from 'react-redux';
import {
    filterTodoItemsAll,
    filterTodoItemsDone,
    filterTodoItemsUndone
} from "../../actions";

function Filter(props) {
    const { showAllTodo, showDoneTodo, showUndoneTodo } = props;

    return (
        <div>
            <button onClick={showAllTodo}>All</button>
            <button onClick={showDoneTodo}>Done</button>
            <button onClick={showUndoneTodo}>Undone</button>
        </div>
    )
}

const mapStateToProps = state => ({
    filter: state.changeFilter.filter,
})

const mapDispatchToProps = dispatch => ({
    showAllTodo: () => dispatch(filterTodoItemsAll()),
    showDoneTodo: () => dispatch(filterTodoItemsDone()),
    showUndoneTodo: () => dispatch(filterTodoItemsUndone())
})


export default connect(mapStateToProps, mapDispatchToProps)(Filter)
