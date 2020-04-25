import * as todoTypes from './types';

//action responsavel pela acao de criar um todo novo
export function addTodo(title){
    return {
        type: todoTypes.ADD_TODO,
        payload:{
            title: title
        }
    }
}
//responsavel pelo status
export function toggleTodoStatus(id, completed){
    return{
        type: todoTypes.TOGGLE_TODO_STATUS,
        payload:{
            id: id,
            completed: completed
        }
    }
}
//update title tarefa
export function toggleTodoTitle(id, title){
    return{
        type: todoTypes.TOGGLE_TODO_TITLE,
        payload:{
            id: id,
            title: title
        }
    }
}
//remove todo
export function removeTodo(id){
    return{
        type: todoTypes.REMOVE_TODO,
        payload:{
            id: id
        }
    }
}