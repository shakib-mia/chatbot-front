import './App.css';
import { useState } from 'react';
import axios from 'axios';
import botIcon from "./assets/images/bot-icon.png";
import soundEffect from './assets/audio/message-incoming-132126.mp3';
import sendIcon from "./assets/images/sendIcon.png"
import Header from './components/Header/Header';


function App() {
  const [prompt, setPrompt] = useState("");

  const get = (e) => {
    e.preventDefault();


    const query = document.createElement('div');
    query.classList.add("px-5", 'py-2', 'text-right', 'bg-ash', 'w-fit', 'ml-auto', 'mt-2', 'text-justify', 'rounded-[17px]', "text-dark-ash")
    query.innerText = prompt
    document.getElementById("content").appendChild(query)

    e.target.reset()

    const reply = document.createElement('div');
    reply.classList.add('px-5', 'py-2', 'bg-dark-blue', 'max-w-1/2', 'text-white', 'text-justify', 'rounded-[17px]', 'opacity-60');
    const dots = document.createElement('div');
    dots.classList.add('dots');
    for (let o = 0; o <= 2; o++) {
      const span = document.createElement('span');
      dots.appendChild(span)
    }
    reply.appendChild(dots);

    const replyContainer = document.createElement('div');
    replyContainer.classList.add('flex', 'items-top', 'gap-2', 'mt-2');
    const icon = document.createElement('img');
    icon.src = botIcon;
    icon.classList.add('w-[40px]', 'h-[40px]', 'rounded-full')

    replyContainer.appendChild(icon)
    replyContainer.appendChild(reply)


    axios.get(`http://localhost:4000/query/${prompt}`).then(res => {
      reply.innerHTML = res.data.text;
      reply.classList.remove('opacity-60')
      document.getElementById('audio').play()
      document.getElementById('audio').volume = 0.5
    })

    const formData = new FormData();
    formData.append('message', 'hello')
    document.getElementById("content").appendChild(replyContainer)
  }

  return <div className='bg-dark-ash h-screen w-screen p-5'>
    <audio src={soundEffect} controls id='audio' className='hidden'></audio>
    <div className="flex flex-col w-full lg:w-1/2 drop-shadow-2xl text-white h-[95%] mx-auto relative rounded-[17px] overflow-hidden">
      <Header />
      <div className='relative h-[90%] overflow-y-auto p-4 bg-violate' id='content'></div>
      <div className="w-full shadow-md bg-dark-violate">
        <form className='bottom-4 w-full flex gap-3 items-center' onSubmit={get}>
          <input type="text" onChange={e => setPrompt(e.target.value)} className='w-full bg-dark-violate text-white focus:outline-none p-2 pl-5 py-5 rounded-[12px]' placeholder='Type Your Message Here' />
          <input type="image" src={sendIcon} alt="submit" title='Or Press "Enter" to send' className='mr-5' width={30} height={30} value="Send" />
        </form>
      </div>
    </div>

    <footer className='w-full mt-7 text-center'>
      Sound Effect by <a target="_blank" rel='noreferrer' href="https://pixabay.com/users/universfield-28281460/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=132126">Universfield</a> from <a target="_blank" rel='noreferrer' href="https://pixabay.com/sound-effects//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=132126">Pixabay</a>
    </footer>
  </div>;
}

export default App;
