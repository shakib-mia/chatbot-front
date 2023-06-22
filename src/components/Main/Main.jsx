import { useEffect, useState } from "react";
import sendIcon from "./../../assets/images/sendIcon.png";
import Header from "./../Header/Header";
import Message from "./../Message/Message";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { url } from "../../constants";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";

const Main = ({ setToken }) => {
  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState([]);
  // const [reload, setReload] = useState(false);
  const [user, setUser] = useState({});

  const content = document.getElementById("content");

  useEffect(() => {
    setTimeout(content?.scrollTo(0, content.scrollHeight), 50);
  }, [content]);

  const get = (e) => {
    e.preventDefault();
    const body = {
      prompt: e.target.prompt.value,
    };

    const config = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };

    axios
      .post("http://localhost:5000/query", body, config)
      .then((data) => console.log(data));

    setPrompt("");
  };

  const signOut = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Consumer>
      {(user) => (
        <div className="bg-dark-ash h-screen w-screen md:p-5">
          <div className="fixed top-2.5 right-2.5 z-50">
            <span className="text-white capitalize">
              {user.name ? user.name : "Loading..."}
            </span>{" "}
            <button
              className="bg-red text-white hover:bg-dark-red px-4 py-2 rounded-md"
              style={{ transition: "all 0.1s" }}
              onClick={signOut}
            >
              Sign Out
            </button>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 drop-shadow-2xl text-white mx-auto relative md:rounded-[17px] overflow-hidden h-full">
            <Header />
            <div
              className="relative h-[90%] overflow-y-auto p-2 lg:p-4 bg-violate"
              id="content"
            >
              {data.map((item) => (
                <Message item={item} key={item._id} />
              ))}
            </div>
            <div className="w-full shadow-md bg-dark-violate">
              <form
                className="bottom-4 w-full flex gap-3 items-center"
                onSubmit={get}
              >
                <input
                  type="text"
                  onChange={(e) => setPrompt(e.target.value)}
                  value={prompt}
                  name="prompt"
                  className="w-full bg-dark-violate text-white focus:outline-none p-2 pl-5 py-5 rounded-[12px]"
                  placeholder="Type Your Message Here"
                />
                <input
                  type="image"
                  src={sendIcon}
                  alt="submit"
                  title='Or Press "Enter" to send'
                  className="mr-5 hover:bg-[#7b3b97] p-1 rounded-full"
                  width={35}
                  height={35}
                  value="Send"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default Main;
