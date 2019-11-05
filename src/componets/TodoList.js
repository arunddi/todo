import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {

    const { todos } = props;
    
    return (
        <div>
            { 
                todos.map((data) => {
                    return (
                        <TodoItem
                            key={data.id}
                            todo={data}
                        />
                    )
                })
            }
        </div>
    )
};

export default TodoList;
