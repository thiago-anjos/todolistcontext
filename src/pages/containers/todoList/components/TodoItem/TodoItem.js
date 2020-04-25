import React, {useState, useCallback, useEffect} from 'react';
import styles from '../../TodoItem.module.scss';

export default ({ title, deleteItemList, completed, changeStatusPropertie, id, onModalOpen}) =>{

    const [status, setStatus] = useState(completed);

    const handleStatus = useCallback((e)=>{
        setStatus(e.target.checked);
    },[])

    useEffect(()=>{
        changeStatusPropertie(id, status)
    },[status, changeStatusPropertie, id])

    const handleEdit = useCallback((e)=>{
        onModalOpen(id);
    },[onModalOpen, id])


    return (
            <li>
                <h1 className={status ? styles.completed : null}>{title}</h1>
                <div>
                    <button onClick={deleteItemList} className="deletar">Deletar</button>
                    <input type="checkbox" checked={status} onChange={handleStatus}/>
                    <button onClick={handleEdit}>Editar</button>
                </div>
            </li>
    )
}