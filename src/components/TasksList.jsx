import Task from "./Task"

const TasksList = ({tasks, removeTask}) => {

    return <ul>
        {tasks.map(task => <Task key={task.id} task={task} removeTask={() => removeTask(task.id)} />)}
    </ul>
}

export default TasksList