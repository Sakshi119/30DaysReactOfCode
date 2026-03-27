import React, { useState } from 'react'

const Todo = () => {
    const [task, setTask] = useState("")
    const [data, setData] = useState([]);
    const handleTaskInput = (e) => {
        setTask(e.target.value)
    }
    function handleSubmit() {
        console.log("hi data added", task);
        setData(prevTask => [...prevTask, task]);
        setTask("")
    }
    console.log(data, "data")
    return (
        <div className="Container">
            <h2>Todo App</h2>


            <div className='TodoList'>
                <input type="text" placeholder='Add your task' value={task} onChange={handleTaskInput} />
                <button className='addBtn' onClick={handleSubmit}>+</button>
            </div>
            <div className='TodoDataList'>
                <ul>
                    {data?.map((listData, index) => {
                        return (
                            <li key={index}>{listData}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Todo