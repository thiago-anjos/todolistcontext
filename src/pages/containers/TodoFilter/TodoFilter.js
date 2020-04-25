import React, { useState, useContext, useCallback, useEffect } from 'react';
import FilterContext from '../../../state/filter/context';
import * as filterActions from '../../../state/filter/actions';
import TodoSelect from './components/TodoSelect'
import styles from './todoFilter.module.scss'

export default props =>{

    // pega sempre do provider
    const {filter, dispatchToFilter} = useContext(FilterContext)
    const [selectValue , setSelectValue] = useState(filter)

    const handleOptionChange = useCallback((evt)=>{
        setSelectValue(evt.target.value);
    },[])

    const optionsSelect = [
        {value: 'all', title: 'Todas as tarefas'},
        {value: 'active', title: 'Tarefas a se fazer'},
        {value: 'completed', title: 'Tarefas realizadas'},
    ]

    const updateFilter = useCallback((filter)=>{
        dispatchToFilter(filterActions.toggleFilter(filter))
    },[dispatchToFilter])

    useEffect(()=>{
        updateFilter(selectValue);
        console.log(selectValue);
    },[selectValue, updateFilter])

    return(
        <>
            <div className={styles.filter}>

                <TodoSelect 
                    value={selectValue} 
                    onOptionChange={handleOptionChange} 
                    options={optionsSelect}
                    onUpdateFilter={updateFilter}
                />
            </div>
        </>
    )
}