import React from 'react';

const Login = ({ setToken }) => {

    const getToken = (e) => {
        e.preventDefault()
        localStorage.setItem('token', 'abcdef')
        setToken(localStorage.getItem('token'))

        
    }

    return (
        <div className='bg-dark-ash h-screen w-screen md:p-5'>
            <div className='w-11/12 md:w-1/3 mx-auto bg-blue text-white p-3 md:p-5'>
                <h1 className='text-center text-2xl font-medium'>Login</h1>
                <hr className='text-secondary-ash w-1/2 mx-auto my-2' />

                <form className='w-2/3 mx-auto text-white' onSubmit={getToken}>
                    <label htmlFor="email" className='ml-1 text-lg'>Email:</label>
                    <input type="email" id='email' className='w-full p-2 focus:outline-none rounded-md text-black mb-3' placeholder='Enter Your Email Address Here' />

                    <label htmlFor="password" className='ml-1 text-lg'>Password:</label>
                    <input type="password" id='password' className='w-full p-2 focus:outline-none rounded-md text-black' placeholder='Enter your Password Here' />


                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Login;