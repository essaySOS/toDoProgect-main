import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import TasksManager from './components/TasksManager'

import TasksList from './components/TasksList'

function App() {

  return (
    <>
      <TasksManager></TasksManager>
    </>
  )
}

export default App
