import React from 'react'

export default function TodoItem({ text, done }) {
    return (
        done ? 
            <div>{text}</div> 
            : 
            <div style={{ textDecoration: 'line-through'}}>{text}</div>
    )
}
