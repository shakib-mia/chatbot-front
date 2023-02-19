import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { url } from '../../constants';

const Login = ({ setToken, setMethod }) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const getToken = (e) => {
        e.preventDefault();
        axios.get(url + '/users/' + email + '/' + pass).then(res => {
            // console.log(!!res.data.length);
            if (!!res.data.length) {
                localStorage.setItem('token', res.data[0]._id)
                setToken(res.data[0]._id)
            } else {
                toast.warn('User not found', {
                    position: 'bottom-center'
                })

                console.log('object');
            }

        })
    }

    return (
        <div className='bg-dark-ash h-screen w-screen md:p-5'>
            <div className='w-11/12 md:w-1/3 mx-auto bg-blue text-white p-3 md:p-5'>
                <h1 className='text-center text-2xl font-medium'>Login</h1>
                <hr className='text-secondary-ash w-1/2 mx-auto my-2' />

                <form className='w-2/3 mx-auto text-white' onSubmit={getToken}>
                    <label htmlFor="email" className='ml-1 text-lg'>Email:</label>
                    <input type="email" id='email' className='w-full p-2 focus:outline-none rounded-md text-black mb-3' placeholder='Enter Your Email Address Here' onChange={e => setEmail(e.target.value)} />

                    <label htmlFor="password" className='ml-1 text-lg'>Password:</label>
                    <input type="password" id='password' className='w-full p-2 focus:outline-none rounded-md text-black' placeholder='Enter your Password Here' onChange={e => setPass(e.target.value)} />


                    <div className='flex justify-end'>
                        <input type="submit" className='bg-green hover:bg-dark-green px-5 py-2 mt-3 rounded-md' value="Submit" />
                    </div>
                </form>

                <div className='text-center'>
                    Don't have an account? <button className='underline' onClick={() => setMethod('register')}>Register</button>
                </div>
            </div>
        </div>
    );
};

export default Login;