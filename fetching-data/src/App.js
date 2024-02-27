import Header from "./components/Header";
import Main from "./components/Main";
import axios from "axios";
import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await axios("https://randomuser.me/api/");
      setUser(res.data.results[0]);
    } catch (error) {
      alert(error);
    }
    await setTimeout(() => {}, 5000);
    setIsLoading(false);
  };

  return !isLoading ? (
    <div className="appWrapper">
      <span className="cardWrapper">
        <Header user={user} />
        <Main user={user} />
        <button className="refreshBtn" onClick={getData}>
          Refresh
        </button>
      </span>
    </div>
  ) : (
    <div className="loading">
      <video className="video" src="https://i.gifer.com/ZKZg.mp4" />
    </div>
  );
}

export default App;
