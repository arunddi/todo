import React from 'react';

const TodoItem = (props) => {

    const { todo } = props;

    return (
        <div>
            <h2>
                {todo.name}
            </h2>
        </div>
    )
};

export default TodoItem;
