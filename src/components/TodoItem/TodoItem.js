import React from 'react'
import { 
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    ListItemIcon
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

export default function TodoItem({ text, done, index, onToggle, onRemove }) {
    const [checked, setChecked] = React.useState(false);

    const pStyle = {
        textDecoration: done ? 'line-through' : 'none',
    }

    const labelId = `checkbox-list-label-${index}`;
    const onClick = () => {
        onToggle()
        setChecked(!checked)
    }

    return (
        <ListItem key={index} dense button onClick={onClick}>
            <ListItemIcon>
                <Checkbox
                    checked={checked}
                    edge="start"
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                />
            </ListItemIcon>
            <ListItemText style={pStyle}>{text}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton onClick={onRemove}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>  
            
    )
}
