import Task from "./Task"

const TasksList = ({ tasks, removeTask, changeTask, addTag, dark, isOverdue }) => {
    return (
        <ul>
            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    removeTask={() => removeTask(task.id)}
                    changeTask={changeTask}
                    addTag={addTag}
                    dark={dark}
                    isOverdue={isOverdue}
                />
            ))}
        </ul>
    )
}

export default TasksList