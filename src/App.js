import React from 'react';
import FilterProvider from './state/filter/Provider'
import TodosProvider from './state/todos/Provider'
import TodoApp from './pages/TodoApp';
import './global.css'

function App() {
  return (
    <TodosProvider>
      <FilterProvider>
        <TodoApp></TodoApp>
      </FilterProvider>
    </TodosProvider>
  )
}

export default App;
