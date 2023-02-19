import axios from 'axios';
import React, { useState } from 'react';
import { url } from '../../constants';

const Register = ({ setMethod, setToken }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [disabled, setDisabled] = useState(false)


    const getToken = (e) => {
        e.preventDefault();
        setDisabled(true)
        // axios.get(url + '/users/' + email + '/' + pass).then(res => {
        //     localStorage.setItem('token', res.data[0]._id)
        //     setToken(res.data[0]._id)
        // })
        // console.log(email, pass);

        if (pass === confirmPass) {
            axios.post(url + '/users', {
                email,
                pass
            }).then(res => {
                if (res.data.insertedId) {
                    setDisabled(false)
                    localStorage.setItem('token', res.data.insertedId);
                    setToken(true)
                }

                if (res.data.statusCode === 409) {
                    setDisabled(false)
                }
            }).catch(err => console.error(err))
        }
    }
    return (
        <div className='bg-dark-ash h-screen w-screen md:p-5'>
            <div className='w-11/12 md:w-1/3 mx-auto bg-blue text-white p-3 md:p-5'>
                <h1 className='text-center text-2xl font-medium'>Register</h1>
                <hr className='text-secondary-ash w-1/2 mx-auto my-2' />

                <form className='w-2/3 mx-auto text-white' onSubmit={getToken}>
                    <label htmlFor="email" className='ml-1 text-lg'>Email:</label>
                    <input type="email" id='email' className='w-full p-2 focus:outline-none rounded-md text-black mb-3' placeholder='Enter Your Email Address Here' onChange={e => setEmail(e.target.value)} />

                    <label htmlFor="password" className='ml-1 text-lg'>Password:</label>
                    <input type="password" id='password' className='w-full p-2 focus:outline-none rounded-md text-black mb-3' placeholder='Enter your Password Here' onChange={e => setPass(e.target.value)} />

                    <label htmlFor="confirmPass" className='ml-1 text-lg'>Confirm Password:</label>
                    <input type="password" id='confirmPass' className='w-full p-2 focus:outline-none rounded-md text-black' placeholder='Retype your Password Here' onChange={e => setConfirmPass(e.target.value)} />

                    <div className='flex justify-end'>
                        <input type="submit" disabled={disabled} className={`${disabled ? "bg-dark-green" : "bg-green"} hover:bg-dark-green px-5 py-2 mt-3 rounded-md cursor-pointer`} value="Submit" />
                    </div>
                </form>

                <div className='text-center'>
                    Already have an account? <button className='underline' onClick={() => setMethod('login')}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Register;