import { useState } from "react"


function TaskAddForm({ addTask }) {
    const [hasDeadLine, setHasDeadLine] = useState(false)
    const [userTask, setUserTask] = useState("")

    const handleInput = (e) => {
        setUserTask(e.target.value)
    }

    const handleCheckboxClick = () => {
        setHasDeadLine(!hasDeadLine)
    }

    const submitForm = (e) => {
        e.preventDefault()
        addTask(userTask)
        setUserTask('')

    }

    return (
        <form action="" onSubmit={submitForm}>

            <input type="text" value={userTask} onChange={handleInput} />
            <input type="checkbox" name="deadlineVisible" id="deadline" checked={hasDeadLine} onClick={handleCheckboxClick} />
            <label htmlFor="deadline">add deadline</label>
            {hasDeadLine && <input type="date" />}

            <input type="submit" value="add" />
        </form>
    )
}

export default TaskAddForm