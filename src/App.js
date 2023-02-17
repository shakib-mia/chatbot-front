import './App.css';
import { useEffect, useState } from 'react';
import sendIcon from "./assets/images/sendIcon.png"
import Header from './components/Header/Header';
import Message from './components/Message/Message';


function App() {
  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://192.168.0.103:4000/messages")
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [data]);

  const get = (e) => {
    // setQuery
    e.preventDefault();
    fetch(`http://192.168.0.103:4000/query/${prompt}`)
      .then((response) => response.json())
      .then((data) => {
      })
      .catch(err => console.error(err));

    setPrompt('')
  }

  return <div className='bg-dark-ash h-screen w-screen md:p-5'>
    <div className="flex flex-col w-full lg:w-1/2 drop-shadow-2xl text-white h-[95%] mx-auto relative rounded-[17px] overflow-hidden">
      <Header />
      <div className='relative h-[90%] overflow-y-auto p-2 lg:p-4 bg-violate' id='content'>
        {data.map(item => <Message item={item} key={item._id} />)}
      </div>
      <div className="w-full shadow-md bg-dark-violate">
        <form className='bottom-4 w-full flex gap-3 items-center' onSubmit={get}>
          <input type="text" onChange={e => setPrompt(e.target.value)} value={prompt} className='w-full bg-dark-violate text-white focus:outline-none p-2 pl-5 py-5 rounded-[12px]' placeholder='Type Your Message Here' />
          <input type="image" src={sendIcon} alt="submit" title='Or Press "Enter" to send' className='mr-5 hover:bg-[#7b3b97] p-1 rounded-full' width={35} height={35} value="Send" />
        </form>
      </div>
    </div>
  </div>;
}

export default App;
