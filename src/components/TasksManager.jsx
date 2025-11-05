import { useState, useEffect } from "react"
import TasksList from "./TasksList"
import uuid from 'react-uuid';
import InputTask from "./InputTask";
import TaskAddForm from "./TaskAddForm";


const TasksManager = () => {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem('tasks')) || []
    )
    const [search, setSearch] = useState("")
    const [dark, setDark] = useState(false)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (text, deadline = null) => {
        const newTask = {
            id: uuid(),
            text,
            tags: [],
            status: 'active',
            deadline: deadline
        }
        setTasks([newTask, ...tasks])
    }

    const isOverdue = (deadline) => {
        if (!deadline) return false
        return new Date(deadline) < new Date()
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(t => id !== t.id))
    }

    const changeTask = (text, id) => {
        const mapTask = tasks.map((item) => {
            if (id === item.id) {
                item.text = text
            }

            return item
        })
        setTasks(mapTask)
    }

    const addTag = (taskId, tag) => {
        setTasks(tasks.map(task =>
            task.id === taskId
                ? { ...task, tags: [...task.tags, tag] }
                : task
        ))
    }

       const filteredTasks = tasks.filter(task =>
        task.text.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div style={{
            background: dark ? '#333' : '#fff',
            color: dark ? '#fff' : '#000',
            minHeight: '100vh',
            padding: '10px'
        }}>
            <button onClick={() => setDark(!dark)}>
                {dark ? '☀️' : '🌙'}
            </button>

            <input
                type="text"
                placeholder="Поиск задач..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ margin: '10px', padding: '5px', width: '200px' }}
            />

            <TaskAddForm addTask={addTask} />
            <InputTask addTask={addTask} />
            <TasksList
                tasks={filteredTasks}
                removeTask={removeTask}
                changeTask={changeTask}
                addTag={addTag}
                isOverdue={isOverdue}
            />
        </div>
    )
}

export default TasksManager