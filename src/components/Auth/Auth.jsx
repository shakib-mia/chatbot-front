import React, { useState } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';

const Auth = ({ setToken }) => {
    const [method, setMethod] = useState('login')
    return (
        <>
            {method === 'login' &&  <Login setToken={setToken} setMethod={setMethod} />}
            {method === 'register' && <Register setMethod={setMethod} />}
        </>
    );
};

export default Auth;