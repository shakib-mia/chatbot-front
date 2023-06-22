import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Main from "./components/Main/Main";
import { url } from "./constants";
import axios from "axios";
import { UserContext } from "./contexts/UserContext";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .post(url + "user", { token: localStorage.getItem("token") })
      .then((res) => setUser(res.data));
  }, []);

  // const [method, setMethod] = useState('register')

  return (
    <UserContext.Provider value={user}>
      {token ? <Main setToken={setToken} /> : <Auth setToken={setToken} />}

      <ToastContainer />
    </UserContext.Provider>
  );
};

export default App;
