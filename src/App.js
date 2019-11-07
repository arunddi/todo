import React, { useState } from "react";
import "./App.css";
import Header from "./componets/Header";
import TodoInput from "./componets/TodoInput";
import TodoList from "./componets/TodoList";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";



// App css

const useStyles = makeStyles(theme => ({
  content: {
    paddingTop: 30,  
    backgroundColor: theme.palette.grey[300],
    height: "100vh"
  }
}));

const initialTodos = [
  {
    id: 1,
    name: "Todo 1",
    completed: false
  },
  {
    id: 2,
    name: "Todo 2",
    completed: false
  },
  {
    id: 3,
    name: "Todo 3",
    completed: false
  }
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodos = todo => {
    setTodos([...todos, todo]);
  };

  const classes = useStyles();

  return (
    <React.Fragment>
        <CssBaseline />

        <Header />
        <main >
            <div className={classes.content}>
                
                {/* Todo List */}
                
                <TodoList todos={todos} />
            {/* Todo Input */}

                <TodoInput handleTodo={addTodos} /> 
            </div>
        </main>            
    </React.Fragment>
  );
};

export default App;
