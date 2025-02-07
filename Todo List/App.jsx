import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './components/addTodo';
import Itemmaker from './components/Itemmaker';
import Container from './components/container';

function App() {
    const [initialTasks, setTasks] = useState([]);

    // Add new task
    function handlenewTasks(name, date) {
        let newTasks = [...initialTasks, { name, date }];
        setTasks(newTasks);
    }

    // Delete task
    function deleteItem(taskToDelete) {
        const newTasks = initialTasks.filter(task => task.name !== taskToDelete.name || task.date !== taskToDelete.date);
        setTasks(newTasks);
    }
   
    return (
        <center>
            <Container>
                <h1>TODO List</h1>
                <AddTodo handlenewTasks={handlenewTasks} />
                <Itemmaker initialTasks={initialTasks} deleteItem={deleteItem} />
            </Container>
        </center>
    );
}

export default App;
