import React, { useState, useEffect } from 'react';

import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { ITodo } from '../Interfaces';
declare var confirm: (question: string) => boolean


export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(saved);
      }, []);
    
      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos])

    const handleAdd = (title: string) => {
        const newTodo: ITodo = {
          title,
          id: Date.now(),
          completed: false
        }
    
        setTodos(prev => [newTodo, ...prev]);
      }
    
      const handleToggle = (id: number) => {
        setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
      }
    
      const handleRemove = (id: number) => {
        const sure = confirm('Are you sure to delete todo');
    
        if (sure) {
          setTodos(prev => prev.filter(todo => todo.id !== id));
        }
      }

    return (
        <>
            <TodoForm onAdd={handleAdd} />
            <TodoList
                onToggle={handleToggle}
                onRemove={handleRemove}
                todos={todos}
            />
        </>
    )
}