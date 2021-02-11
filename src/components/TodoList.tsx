import React from 'react';
import { ITodo } from '../Interfaces';

type TodoListProps = {
    todos: ITodo[]
    onToggle(id: number): void
    onRemove(id: number): void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {

    const removeHandler = (e: React.MouseEvent, id: number) => {
        e.preventDefault();
        onRemove(id);
    }

    return todos.length > 0 ? (
        <ul>
            {todos.map(todo => {
                const classes = ['todo'];

                if (todo.completed) {
                    classes.push('completed');
                }

                return (
                    <li className={classes.join(" ")} key={todo.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={onToggle.bind(null, todo.id)}
                            />
                            <span>{todo.title}</span>
                            <i
                                className="material-icons red-text"
                                onClick={e => removeHandler(e, todo.id)}
                            >
                                delete
                            </i>
                        </label>
                    </li>
                )
            })}
        </ul>
    ) : (
        <p className='center'>Todolist is empty</p>
    )
}

export default TodoList;