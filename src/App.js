import { useState } from 'react';
import './App.css';
import Main from './components/Main/Main';
import Opener from './components/Opener/Opener';


function App() {
  const [hidden, setHidden] = useState(false);


  setTimeout(() => setHidden(true), 2000)

  return <>
    <Main />
    {!hidden && <Opener />}
  </>
}

export default App;
