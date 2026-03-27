import React from 'react'
import Counter from './components/CounterApp/Counter'
import SearchFilter from './components/SearchFilter/SearchFilter'
import Todo from './components/todoApp/Todo'
const App = () => {
  return (
    <div>
      <section id="center">
        <h1>30 Days of writing code</h1>
      </section>
      <Counter />
      <SearchFilter />
      <Todo />
    </div>
  )
}

export default App