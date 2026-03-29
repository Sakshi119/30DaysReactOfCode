import React, { useState } from 'react'

const Todo = () => {
    const [task, setTask] = useState("")
    const [data, setData] = useState([]);
    const [isCompleted, setIsCompleted] = useState(false);
    const handleTaskInput = (e) => {
        setTask(e.target.value)
    }
    function handleSubmit() {
        console.log("hi data added", task);
        if (task.trim() === "") return;
        setData(prevTask => [...prevTask, { id: Date.now(), text: task, completed: isCompleted }]);
        setTask("")
    }
    // console.log(data, "data")

    function handleDelete(index) {
        const copyOfData = [...data]
        copyOfData.splice(index, 1);
        setData(copyOfData)
    }


    console.log(data, "data")
    return (
        <div className="Container">
            <h2>Todo App</h2>


            <div className='TodoList'>
                <input type="text" placeholder='Add your task' value={task} onChange={handleTaskInput} />
                <button className='addBtn' onClick={handleSubmit}>+</button>
            </div>
            {data.length > 0 &&
                <div className='TodoDataList'>
                    <ul>
                        {data?.map((listData, index) => {
                            return (
                                <li key={index} className={isCompleted === index ? "completed" : ""}>
                                    <p>{listData.id}</p>
                                    <p>{listData.text}</p>
                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                    <button onClick={() => setIsCompleted(index, !isCompleted)}>Complete</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }
        </div>
    )
}

export default Todo