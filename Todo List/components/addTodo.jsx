import style from './addTodo.module.css';
import { useState } from 'react';

function AddTodo({ handlenewTasks }) {
    const [name, changename] = useState("");
    const [date, changedate] = useState("");

    const updateName = (event) => {
        changename(event.target.value);
    };

    const updateDate = (event) => {
        changedate(event.target.value);
    };

    // Add todo logic here
    function addnewItem() {
        if (name && date) {  // Check if both fields are not empty
            handlenewTasks(name, date);
            changename("");
            changedate("");
        }
    }

    return (
        <div classNameNameName={style.container}>
            <input
                type="text"
                placeholder="Add a new todo..."
                value={name}
                onChange={updateName}
            />
            <input
                type="date"
                value={date}
                onChange={updateDate}
            />
            <button classNameNameName={style.button} onClick={addnewItem}>Add</button>
        </div>
    );
}

export default AddTodo;
