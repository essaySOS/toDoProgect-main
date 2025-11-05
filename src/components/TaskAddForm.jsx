import { useState } from "react"


function TaskAddForm({ addTask }) {
    const [hasDeadLine, setHasDeadLine] = useState(false)
    const [userTask, setUserTask] = useState("")
    const [deadline, setDeadline] = useState("")

    const handleInput = (e) => {
        setUserTask(e.target.value)
    }

    const handleCheckboxClick = () => {
        setHasDeadLine(!hasDeadLine)
        if (hasDeadLine) setDeadline("")
    }

    const submitForm = (e) => {
        e.preventDefault()
        addTask(userTask, deadline || null)
        setUserTask('')

    }

    return (
        <form action="" onSubmit={submitForm}>
            <input type="text" value={userTask} onChange={handleInput} />
            <input
                type="checkbox"
                checked={hasDeadLine}
                onChange={handleCheckboxClick}
            />
            <label htmlFor="deadline">add deadline</label>
            {hasDeadLine && (
                <input
                    type="date"
                    value={deadline}
                    onChange={e => setDeadline(e.target.value)}
                />
            )}
            <input type="submit" value="add" />
        </form>
    )
}

export default TaskAddForm