import { useState } from "react";

const AddTask = ({ onAdd }) => {
    const [newTask, setNewTask] = useState({});

    const onChange = (e) => {
        setNewTask({ ...newTask, [e.target.name]: e.target.value })
    };

    const onToogleChange = (target) => {
        setNewTask({ ...newTask, [target.name]: target.checked })
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (!newTask.text) {
            alert('Please add text');
            return;
        }

        onAdd(newTask);
        setNewTask({});
    };

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' name='text' value={newTask.text} onChange={(e) => onChange(e)} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Day & Time' name='day' value={newTask.day} onChange={(e) => onChange(e)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' name='reminder' value={newTask.reminder} onChange={(e) => onToogleChange(e.target)} />
            </div>
            <input type='submit' value='Save' className='btn btn-block' />
        </form>
    );
};

export default AddTask;