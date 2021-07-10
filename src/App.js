import { useState } from "react";
import Headroom from "react-headroom";

import NavBar from "./components/NavBar";
import Content from "./components/Content";

function App() {
  const [view, setView] = useState("home");
  const [storyId, setStoryId] = useState(1);

  return (
    <div className="App">
      <Headroom>
        <NavBar setView={setView} />
      </Headroom>

      <main className="App-content">
        <Content
          view={view}
          storyId={storyId}
          setView={setView}
          setStoryId={setStoryId}
        />
      </main>
    </div>
  );
}

export default App;
