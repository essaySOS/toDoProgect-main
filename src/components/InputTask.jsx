import { useState } from "react"

const InputTask = ({ addTask }) => {
    const [input, setInput] = useState('')


    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => {
                addTask(input);
                setInput('');
            }}>Добавить</button>
        </div>
    )
}

export default InputTask