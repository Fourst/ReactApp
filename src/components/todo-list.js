import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = () => { 

    const items = ["Learn","Build","React"];

    return(
        <ul>
            <li><TodoListItem label="Drink" /></li>
            <li><TodoListItem label="Build" important /></li>
            <li><TodoListItem label="Reactx"/></li>
        </ul>
    );
};
export default TodoList;