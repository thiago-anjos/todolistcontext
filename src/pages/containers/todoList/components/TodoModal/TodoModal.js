import React, { useCallback, useState } from 'react';
import styles from '../../TodoItem.module.scss';

export default ({onModalClose, onEditTitle, currentId, onGetTitle}) =>{

    const [newTitle, setNewTitle] = useState(onGetTitle(currentId))

    const handleUpdateTitle = useCallback((e)=>{
        e.preventDefault();
        onEditTitle(currentId, newTitle);
        onModalClose()
    },[newTitle, onEditTitle, currentId, onModalClose])

    return(
        <>
            <div className={[styles.modal]}>
                <div>
                    <form onSubmit={handleUpdateTitle}>
                        <input type="text" placeholder="Novo título" value={newTitle} onChange={(e)=> setNewTitle(e.target.value)}/>
                        <button type="submit">Atualizar</button>
                    </form>
                    <button onClick={onModalClose}>Fechar Modal</button>
                </div>
            </div>
        </>
    )
}