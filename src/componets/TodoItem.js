import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const TodoItem = (props) => {

    const { name, completed} = props;

    const getCompleted = (completed) => {
        return completed? "completed": "pending";
    };

    return (
        <ListItem button>
            <ListItemText  
                primary={name} 
                secondary={getCompleted(completed)}
            />

            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
};

export default TodoItem;
