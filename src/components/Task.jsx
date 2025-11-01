

const Task = ({task, removeTask}) => {

    return <li>
        <div>
            {task.text}
        </div>
        <div>
            <button onClick={removeTask}>Delete</button>
        </div>
    </li>
}

export default Task