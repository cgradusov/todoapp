import React from 'react'

export default function TodoItem({ text, done }) {
    return (
        done ? 
            <div style={{ textDecoration: 'line-through'}}>{text}</div>
            :
            <div>{text}</div>  
            
    )
}
