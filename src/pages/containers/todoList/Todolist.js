import React, {useContext, useCallback, useState} from 'react';
// informar qual contexto utilizar, usecontext
import TodosContext from '../../../state/todos/Context';
// importar o componente de lista simples
import TodoComponentList from './components/TodoItem/TodoItem';
import * as todoActions from '../../../state/todos/actions';
import TodoModal from './components/TodoModal/TodoModal';
import styles from './TodoItem.module.scss';
import FilterContext from '../../../state/filter/context';

// essa função está aqui fora porque ela não usa o escopo do componente, ela tb pode ser uma função externa.

function filterArray(listTodos, currentFilter){
    switch (currentFilter){
        case 'all':
            return listTodos
        case 'active':
            return listTodos.filter(item => item.completed === false )
        case 'completed':
            return listTodos.filter(item => item.completed === true)
        default:
            throw new Error();
    }
}

export default props =>{
    // somenter para ler a lista, vamos utilizar somente o state, sem o dispatch
    // lembrando que o estado = todos é um array de objetos
    const {todos, dispatchToTodos} = useContext(TodosContext)

    // contexto do filter
    // pegar na desestruturação o que ele disponibiliza no value do provider 
    const {filter, dispatchToFilter} = useContext(FilterContext)

    // estado para modal
    const [modalVisible, setModalVisible] = useState(false);

    const handleDeleteItem = useCallback((id)=>{
        dispatchToTodos(todoActions.removeTodo(id))
    },[dispatchToTodos])

    // essa função não recebe parametros lá no componente filhos porque senão ela se autoexecutaria
    // vamos passar essa funcao para o filho, esperando um id e um complete
    // esses parametros serão resovidos no componente TodoItem
    const changeStatusFn = useCallback((id, completed)=>{
        dispatchToTodos(todoActions.toggleTodoStatus(id, completed))
    },[dispatchToTodos])

    // passar o id e o title direto no open modal
    const [currId, setCurrId] = useState(null);

    const getTitle = useCallback((id)=>{
        const title = todos.find( item => {
            return item.id === id
        })
        return title.title
    },[todos])

    const handleModalOpen = useCallback((id, title)=>{
        setModalVisible(true);
        setCurrId(id);
    },[])

    const handleModalClose = useCallback(()=>{
        setModalVisible(false);
        setCurrId(null);
    },[])

    // editar o titulo
    const handleEditTitle = useCallback((id, title)=>{
        dispatchToTodos(todoActions.toggleTodoTitle(id, title))
    },[dispatchToTodos])

    return(
        <> 
            <div className={[styles.container]}>
            <ul >
            {filterArray(todos, filter).map( item =>(
                    <TodoComponentList 
                        key={item.id} 
                        id={item.id}
                        title={item.title} 
                        deleteItemList={()=>handleDeleteItem(item.id)}
                        completed={item.completed}
                        changeStatusPropertie={changeStatusFn}
                        onModalOpen={handleModalOpen}
                    />
            ))}
            </ul>
            {modalVisible && <TodoModal onModalClose={handleModalClose}  onEditTitle={handleEditTitle} currentId={currId} onGetTitle={getTitle}></TodoModal>}
            </div>
        </>
    )
}