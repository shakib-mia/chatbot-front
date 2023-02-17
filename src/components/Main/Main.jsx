import { useEffect, useState } from 'react';
import sendIcon from "./../../assets/images/sendIcon.png"
import Header from './../Header/Header';
import Message from './../Message/Message';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { url } from '../../constants';


function Main() {
  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false)

  useEffect(() => {
    fetch(`${url}/messages`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [data]);

  const content = document.getElementById('content')

  useEffect(() => {
    setTimeout(content?.scrollTo(0, content.scrollHeight), 100)
  }, [content])

  const get = (e) => {
    e.preventDefault();
    setReload(!reload)
    toast.success("Your Query is Taken. Please wait for response", {
      position: 'bottom-center'
    })


    fetch(`${url}/query/${prompt}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
            setReload(!reload)
          setTimeout(() => {
            document.getElementById('content').scrollTo(0, document.getElementById('content').scrollHeight)
          }, 1000)
        }
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

    <ToastContainer />
  </div>;
}

export default Main;