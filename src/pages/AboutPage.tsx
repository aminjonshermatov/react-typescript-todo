import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    }

    return (
        <>
            <h1>About page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo libero nemo beatae obcaecati impedit corporis iure quam atque incidunt! Praesentium.
            </p>
            <button onClick={handleClick} className='btn'>Go to todo</button>
        </>
    )
}