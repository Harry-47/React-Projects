import TodoItem from './todoItem';

function Itemmaker({ initialTasks, deleteItem }) {
    return (
        <div>
            {initialTasks.map((item, index) => (
                <TodoItem key={index} item={item} deleteItem={deleteItem} />
            ))}
        </div>
    );
}

export default Itemmaker;
