import React, { useState } from 'react';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    input: {
        height: 70,
        [theme.breakpoints.down("xs")]: {
            height: 130
        },
        position: "fixed",
        width: "100%",
        bottom: 0,
        padding: theme.spacing(2)
    },
    inputText: { 
        flex: 1
    }
}));

const TodoInput = (props) => {
    const { handleTodo } = props;
    const [todo, setTodo] = useState('');

    const classes = useStyles();

    const handleChange = (event) => {
        setTodo(event.target.value);
    };

    const handleClick = () => {
        handleTodo({
            id: new Date().getMilliseconds(),
            name: todo,
            completed: false
        });

        setTodo('');
    };
    
    const isDisabled = (todo) => {
        return todo.length > 0 
            ? false
            : true
    };

    return (
        <Paper className={classes.input}>
            <Grid container spacing={3}>
                <Grid item className={classes.inputText} xs={12} sm={9}>
                    <TextField 
                        onChange={handleChange}
                        value={todo}
                        fullWidth
                        placeholder="Type todo here..." 
                    />
                </Grid>

                <Grid item xs={12} sm={3}>
                    <Button
                        disabled={isDisabled(todo)}
                        startIcon={<AddIcon />}
                        onClick={handleClick}
                        color="primary" 
                        variant="contained" 
                        fullWidth
                    >
                        Add Todo
                    </Button>
                </Grid>              
            </Grid>
        </Paper>
    )
};


export default TodoInput;
