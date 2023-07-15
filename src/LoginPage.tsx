import React from 'react';
import './LoginPage.css'
import { useAuth } from './AuthWrapper';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
    const { login } = useAuth();
    const [userName, setUserName] = React.useState('');
    const [pass, setPass] = React.useState('');
    const { user } = useAuth();

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        login(userName, pass);
    }

    if (user.loggedIn) {
        return <Navigate to='/' replace />
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input placeholder='User name' type="text" name="userName" required value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input placeholder='Password' type="password" name="pass" required value={pass} onChange={(e) => setPass(e.target.value)} />
                </div>
                <button className="button-container">Submit</button>
            </form>
        </div>
    )
}

export default LoginPage