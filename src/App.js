import { useState } from 'react';
import './App.css';
import Auth from './components/Auth/Auth';
import Main from './components/Main/Main';


const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  // const [method, setMethod] = useState('register')

  return <>
    {token
      ?
      <Main setToken={setToken} />
      :
      <Auth setToken={setToken} />}
  </>
}

export default App;
