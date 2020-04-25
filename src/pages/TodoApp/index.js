import React from 'react';
import TodoCreator from '../containers/todoCreator/TodoCreator'
import TodoList from '../containers/todoList/Todolist'
import TodoFilter from '../containers/TodoFilter/TodoFilter'

export default props =>{
    return(
        <>
            <TodoCreator></TodoCreator>
            <TodoList></TodoList>
            <TodoFilter></TodoFilter>
        </>
    )
}
