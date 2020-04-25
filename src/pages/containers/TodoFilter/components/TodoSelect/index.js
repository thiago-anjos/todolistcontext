import React from 'react';

export default ({value, onOptionChange, options}) =>{

    return (
        <select value={value} onChange={onOptionChange}>
            {options.map(select =>(
                <option value={select.value} key={select.value}>{select.title}</option>
            ))}
        </select>
    )
}