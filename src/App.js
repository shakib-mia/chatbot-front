import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import loading from "./assets/images/sample.gif"

function App() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  const [query, setQuery] = useState("")

  const get = (e) => {
    e.preventDefault()
    setQuery(prompt);
    setReply("...")


    const query = document.createElement('div');
    query.classList.add("px-5", 'py-2', 'text-right', 'bg-red-600', 'w-fit', 'ml-auto', 'mt-2', 'text-justify', 'rounded-[17px]')
    query.innerText = prompt
    document.getElementById("content").appendChild(query)

    e.target.reset()

    const reply = document.createElement('div');
    reply.classList.add('px-5', 'py-2', 'bg-green-500', 'w-fit', 'text-white', 'mt-2', 'text-justify', 'rounded-[17px]', 'opacity-60');
    reply.innerHTML = "bot is typing"

    axios.get(`http://localhost:4000/query/${prompt}`).then(res => {
      console.log(res.data.text.indexOf('/n/n'));
      setReply(res.data.text.slice(0, res.data.text.length))

      reply.innerHTML = res.data.text;
      reply.classList.remove('opacity-60')
    })
    document.getElementById("content").appendChild(reply)
    document.getElementById('content').scrollTop("100%")
  }

  useEffect(() => {
    // document.getElementById('content').scrollTo("100%")
  }, [reply, query])

  return <div className='bg-slate-600 h-screen w-screen p-5'>
    <div className="flex flex-col w-full lg:w-1/2 bg-slate-500 text-white h-full mx-auto relative rounded-[17px]">
      <div className='relative h-[90%] overflow-y-auto p-4' id='content'></div>
      <div className="flex relative w-full h-[10%] ">
        <form className='px-5 absolute bottom-5 w-full' onSubmit={get}>
          <input type="text" onChange={e => setPrompt(e.target.value)} className='w-full bg-slate-600 text-white focus:outline-none p-2 rounded' placeholder='Type Your Message Here' />
        </form>
      </div>
    </div>
  </div>;
}

export default App;
