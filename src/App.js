import React, { useState } from 'react';
import './App.css';
import Header from './componets/Header';
import TodoInput from './componets/TodoInput';
import TodoList from './componets/TodoList';

const initialTodos = [
    {
        id: 1,
        name: 'Todo 1',
        completed: false, 
    },
    {
        id: 2,
        name: 'Todo 2',
        completed: false, 
    },
    {
        id: 3,
        name: 'Todo 3',
        completed: false
    }
];

const App = () => {
    
    const [todos, setTodos ] = useState(initialTodos);

    const addTodos = (todo) => {
        setTodos([...todos, todo]);
    };

    return (
        <div>
            <Header />
            <TodoList todos={todos} />
            <TodoInput handleTodo={addTodos} />
        </div>
    );
}

export default App;
