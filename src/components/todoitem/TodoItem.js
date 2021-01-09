import React from 'react'

export default function TodoItem({ text, done, index, onToggle, onRemove }) {
    const pStyle = {
        textDecoration: done ? 'line-through' : 'none',
    }

    const liStyle = {
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
    }

    return (
        <li key={index} style={liStyle}>
            <p style={pStyle} onClick={onToggle}>{text}</p>
            <button onClick={onRemove}>[x]</button>
        </li>  
            
    )
}
