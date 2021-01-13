/* eslint-disable react/prop-types */
import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  ListItemIcon,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

export default function TodoItem({
  id, text, done, index, onToggle, onRemove,
}) {
  const pStyle = {
    textDecoration: done ? 'line-through' : 'none',
    overflowWrap: 'break-word',
  };

  const labelId = `checkbox-list-label-${index}`;

  return (
    <ListItem key={id} dense button onClick={onToggle}>
      <ListItemIcon>
        <Checkbox
          checked={done}
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

  );
}
