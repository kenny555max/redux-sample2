import { useState } from "react";

export interface FormDataInterface {
    task: string;
    date: string;
}

function CreateTodo() {
    const [task, setTask] = useState<string>('');
    const [date, setDate] = useState<string>("");

    const [formData, setFormData] = useState<FormDataInterface>({
        task: '',
        date: ''
    });
    const [error, setError] = useState<string>("");

    const handleAddTask = () => {
        if(!task){
            setError("Please enter a task title")
            return;
        }
    
        if(!date){
            setError("Please enter a task date")
            return;
        }
        setError("")
    }

    return (
        <div className="todo-input">
            {error && <p className="error">{error}</p>}
            <input type="text" onChange={function(event){
                setTask(event.target.value)
            }} placeholder="Enter a task" />
            <input type="date" 
                onChange={function(event){
                setDate(event.target.value)
            }}
            placeholder=""/>
            <button type="button" onClick={handleAddTask}>Add Task</button>
        </div>
    );
}

export default CreateTodo;