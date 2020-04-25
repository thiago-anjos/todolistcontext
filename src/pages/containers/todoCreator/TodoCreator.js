import React, { useState , useContext, useEffect, useCallback, useRef } from 'react';
import TodosContext from '../../../state/todos/Context';
import * as todoActions from '../../../state/todos/actions';
import styles from './styles.module.css'

export default props =>{

    const { dispatchToTodos} = useContext(TodosContext);
    const [addNewTask, setAddNewTask] = useState('');
    const inputTitleFocus = useRef(null);
    const [errorInputEmpty, setErrorInputEmpty] = useState(false);

    useEffect(()=>{
        // somente para selecionar o elemento e dar um focus nele... js é mais rápido
        inputTitleFocus.current.focus();
        setErrorInputEmpty(false);
    },[addNewTask])

    const handleTodo = useCallback((e)=>{
        e.preventDefault();
        if(addNewTask === ""){
            setErrorInputEmpty(true);
            return;
        }
        dispatchToTodos(todoActions.addTodo(addNewTask))
        setAddNewTask('');
    },[addNewTask, dispatchToTodos])

    return(
        <>
            <form onSubmit={handleTodo} className={[styles.form]}>
                <input type="text" placeholder="Nova Tarefa" ref={inputTitleFocus} value={addNewTask} onChange={(e)=> setAddNewTask(e.target.value)}></input>
                {errorInputEmpty && <small> Você precisa preencher com uma tarefa </small>}
                <button type="submit">Adicionar tarefa</button>
            </form>
        </>
    )
}