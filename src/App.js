import { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
// import Opener from './components/Opener/Opener';


function App() {
  // const [hidden, setHidden] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'))

  return <>
    {token ? <Main /> : <Login setToken={setToken} />}
    {/* {!hidden && <Opener />} */}
  </>
}

export default App;
