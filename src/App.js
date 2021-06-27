import MainText from "./components/MainText";
import NavBar from "./components/NavBar";
import Options from "./components/Options";
import Headroom from "react-headroom";
import { useEffect, useState } from "react";
import getPageStory from "./api";
import stories from "./db";


const Home = ({setView, setStoryId}) => {

  const handleStoryIdView = () => {
    setView("story");
    setStoryId(1);
  }

  return (
    <>
      {stories.map((item) => {

        return (
          <div className="story-data">
            <img className="story-img" src={item.cover} alt="Logo" />
            <div className="story-desc">
              <h1>{item.title}</h1>
              <p className="story-desc">{item.synopsis}</p>
              <button onClick={() => handleStoryIdView() }>leer...</button>
            </div>
          </div>
        )

      })}

    </>
  )
}

const Story = ({storyId}) => {
  const [pageToRender, setPageToRender] = useState({ page: "home" });
  const [pageObj, setPageObj] = useState({});
  

  useEffect(() => {
    const storyObj = stories.filter((item) => item.id === storyId);
    console.log(storyObj[0]);
    const _pageObj = getPageStory(pageToRender, storyObj[0])[0];
    console.log("page:", _pageObj);
    setPageObj(_pageObj);
  }, [pageToRender]);

  return (
    <div>
      <MainText pageObj={pageObj} />
      <Options pageObj={pageObj} setPageToRender={setPageToRender} />
    </div>
  );
}

const Content = ({ view, setView, storyId, setStoryId }) => {
  switch (view) {
    default:
    case 'home':
      return <Home setView={setView} setStoryId={setStoryId} />
    case 'story':
      return <Story setView={setView} storyId={storyId} />;
  }
};

function App() {

  const [view, setView] = useState("home");
  const [storyId, setStoryId] = useState(1);

  return (
    <div className="App">
      <Headroom>
        <NavBar setView={setView} />
      </Headroom>

      <main className="App-content">
        <Content view={view} storyId={storyId} setView={setView} setStoryId={setStoryId} />
      </main>

    </div>
  );
}

export default App;
