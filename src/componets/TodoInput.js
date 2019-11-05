import React, { useState } from 'react';


const TodoInput = (props) => {
    const { handleTodo } = props;
    const [todo, setTodo] = useState('');

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
    
    return (
        <div>
            <input 
                type="text"
                placeholder="Add Todo Here" 
                value={todo}
                onChange={handleChange}                
            />

            <button 
                type="button"
                onClick={handleClick}
            > 
                Add Todo
            </button>
        </div>
    )
};


export default TodoInput;
