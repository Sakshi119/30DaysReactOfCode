import React from 'react'
import Counter from './components/CounterApp/Counter'
import SearchFilter from './components/SearchFilter/SearchFilter'
const App = () => {
  return (
    <div>
      <section id="center">
        <h1>30 Days of writing code</h1>
      </section>
      <Counter />
      <SearchFilter />
    </div>
  )
}

export default App