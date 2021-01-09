import React from 'react'
import TodoItem from './todoitem/TodoItem';
import { FILTER_ALL, FILTER_DONE, FILTER_UNDONE } from "../constants";

export default function TodoList(props) {
    const { todoItems, onRemove, onToggle, filter } = props;
    return (
        <ul>
            {todoItems
                .filter((el) => {
                    switch (filter) {
                        case FILTER_ALL:
                            return true
                        case FILTER_DONE:
                            return el.done
                        case FILTER_UNDONE:
                            return !el.done
                        default:
                            return true;
                    }
                })
                .map((el, index) => (
                    <TodoItem text={el.text} done={el.done} onRemove={() => onRemove(index)} onToggle={() => onToggle(index)} index={index} key={index} />
                ))
            }
        </ul>
    )
}

