import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <p>Hello! This is cool, because we have added redux to the website!!</p>
  </div>
)
export default App