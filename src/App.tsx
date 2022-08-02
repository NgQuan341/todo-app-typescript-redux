import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import { fetchTodos } from './components/TodoList/reducer'
import TodoContainer from './page'

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch<any>(fetchTodos())
  },[])
  return (
    <TodoContainer />
  )
}

export default App
