import { useState } from "react"

const Task = ({ task, removeTask, changeTask, addTag, dark, isOverdue }) => {
    const [edit, setEdit] = useState(false)
    const [text, setText] = useState(task.text)
    const [tagInput, setTagInput] = useState("")

    if (edit) return (
        <li style={{
            background: dark ? '#555' : '#fff',
            color: dark ? '#fff' : '#000'
        }}>
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => { changeTask(text, task.id); setEdit(false) }}>✓</button>
            <button onClick={() => setEdit(false)}>✗</button>
        </li>
    )

    return (
        <li style={{
            background: isOverdue(task.deadline) ? '#ff4444' : (dark ? '#555' : '#fff'),
            color: dark ? '#fff' : '#000',
            margin: '5px 0',
            padding: '5px',
            border: isOverdue(task.deadline) ? '2px solid red' : 'none'
        }}>
            {task.text}

            {task.deadline && (
                <span style={{
                    margin: '0 5px',
                    color: isOverdue(task.deadline) ? '#fff' : (dark ? '#ff9999' : '#ff4444'),
                    fontWeight: 'bold'
                }}>
                    📅 {new Date(task.deadline).toLocaleDateString()}
                    {isOverdue(task.deadline) && ' ⚠️ ПРОСРОЧЕНО'}
                </span>
            )}

            {task.tags.map(tag =>
                <span key={tag} style={{
                    margin: '0 5px',
                    background: dark ? '#777' : '#eee',
                    padding: '2px 5px',
                    color: dark ? '#fff' : '#000'
                }}>
                    #{tag}
                </span>
            )}

            <input
                value={tagInput}
                onChange={e => setTagInput(e.target.value)}
                placeholder="+ тег"
                style={{
                    width: '60px',
                    margin: '0 5px',
                    background: dark ? '#666' : '#fff',
                    color: dark ? '#fff' : '#000'
                }}
                onKeyDown={e => {
                    if (e.key === 'Enter' && tagInput.trim()) {
                        addTag(task.id, tagInput.trim())
                        setTagInput("")
                    }
                }}
            />

            <button onClick={() => setEdit(true)}>Edit</button>
            <button onClick={removeTask}>Delete</button>
        </li>
    )
}

export default Task