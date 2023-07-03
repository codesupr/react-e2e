import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useAuth } from './AuthWrapper';
import { Navigate } from 'react-router-dom';

function Counter() {
    const [count, setCount] = React.useState(0);
    const { user } = useAuth();

    if (!user.loggedIn) {
        return <Navigate to='/login' />
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Explore the React counter</p>
                <div>
                    <button onClick={() => setCount(prevCount => prevCount <= 0 ? 0 : prevCount - 1)}>-</button>
                    <p>{count}</p>
                    <button onClick={() => setCount(count + 1)}>+</button>
                </div>
            </header>
        </div>
    );
}

export default Counter;
