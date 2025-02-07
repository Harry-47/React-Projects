import style from './todoItem.module.css';

function TodoItem({ item, deleteItem }) {
    const handleDelete = () => {
        deleteItem(item);
    };

    return (
        <div classNameNameName={style.todoItem}>
            <p>{item.name}</p>
            <p>{item.date}</p>
            <button classNameNameName={style.button} onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default TodoItem;
