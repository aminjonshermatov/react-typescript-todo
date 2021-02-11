import React, { useState } from 'react';

interface TodoFormProps {
    onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
    const [title, setTitle] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onAdd(title)
            setTitle('')
        }
    }

    return (
        <div className="input-field mt-2">
            <input
                value={title}
                onChange={handleChange}
                placeholder="Type the name of work"
                type="text"
                id="title"
                onKeyPress={handleKeyPress}
            />
            <label htmlFor="title" className='active'>
                Type the name of work
            </label>
        </div>
    );
}

export default TodoForm;