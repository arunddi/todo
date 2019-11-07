import React from 'react';
import TodoItem from './TodoItem';
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    listRoot: {
        backgroundColor: theme.palette.background.paper,
        overflow: "hidden"
    }
}));



const TodoList = (props) => {

    const { todos, onDelete } = props;
    const classes = useStyles();
    
    return (
        <div>
            <List className={classes.listRoot}>
            { 
                todos.map(({ id, name, completed }) => {
                    return (
                        <TodoItem 
                            onDelete={onDelete}
                            key={id}
                            name={name} 
                            completed={completed}
                        />
                    )
                })
            }
            </List>
        </div>
    )
};

export default TodoList;
