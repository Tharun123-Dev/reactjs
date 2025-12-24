import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Videos from "./components/Videos";
import Music from "./components/Music";
import "./App.css";

function App() {
  const [showMusic, setShowMusic] = useState(false);

  return (
    <>
      <Header />
      <div className="app-body">
        <Sidebar setShowMusic={setShowMusic} />
        <div className="content">
          {showMusic ? <Music /> : <Videos />}
        </div>
      </div>
    </>
  );
}

export default App;
