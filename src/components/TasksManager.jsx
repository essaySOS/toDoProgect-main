import { useState } from "react"
import TasksList from "./TasksList"
import uuid from 'react-uuid';
import InputTask from "./InputTask";
import TaskAddForm from "./TaskAddForm";


const TasksManager = () => {
    const [tasks, setTasks] = useState([

    ])

    const addTask = (text) => {
        const newTask = {
            id: uuid(),
            text,
            tags: [],
            status: 'active',
        }
        setTasks([newTask, ...tasks])
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


    return (
    <>
        <TaskAddForm addTask={addTask}/>
        <InputTask addTask={addTask}></InputTask>
        <TasksList
        tasks={tasks}
        removeTask={removeTask}
        changeTask={changeTask}
        ></TasksList>
    </>
    )
}

export default TasksManager