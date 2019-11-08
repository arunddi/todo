import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./componets/Header";
import TodoInput from "./componets/TodoInput";
import TodoList from "./componets/TodoList";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getTodos } from './actions';

// App css

const useStyles = makeStyles(theme => ({
  content: {
    paddingTop: 30,
    backgroundColor: theme.palette.grey[300],
    height: "100vh"
  }
}));

const App = props => {
  const { todos, dispatch, loading } = props;

  const addTodos = todo => {
    const action = {
      type: "ADD_TODO",
      ...todo
    };

    dispatch(action);
  };

  const classes = useStyles();


  useEffect(() => {
    dispatch(getTodos());
  }, []);


  console.log(todos);

  return (
    <React.Fragment>
      <CssBaseline />

      <Header />
      <main>
        <div className={classes.content}>
          {/* Todo List */}

          <TodoList todos={todos} loading={loading} />
          {/* Todo Input */}

          <TodoInput handleTodo={addTodos} />
        </div>
      </main>
    </React.Fragment>
  );
};

const mapStateProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateProps)(App);
