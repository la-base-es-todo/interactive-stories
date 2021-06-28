import { useEffect, useState } from "react";
import Headroom from "react-headroom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import MainText from "./components/MainText";
import NavBar from "./components/NavBar";
import Options from "./components/Options";
import getPageStory from "./api";
import stories from "./db";

const Home = ({ setView, setStoryId }) => {
  const handleStoryIdView = () => {
    setView("story");
    setStoryId(1);
  };

  return (
    <>
      {stories.map((item) => {
        return (
          <div className="story-data">
            <img className="story-img" src={item.cover} alt="Logo" />
            <div className="story-desc">
              <h1>{item.title}</h1>
              <p className="story-desc">{item.synopsis}</p>
              <button onClick={() => handleStoryIdView()}>leer...</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

const Story = ({ storyId }) => {
  const [pageToRender, setPageToRender] = useState({ page: "home" }); // which page to extract from the story book
  const [pageObj, setPageObj] = useState({}); // store the history page to be render
  const [storyBook, setStoryBook] = useState(null); // store the story book data: the pages

  // const [inProp, setInProp] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setInProp(true);
  //   }, 300);
  // }, []);

  // get the story book
  useEffect(() => {
    const _storyBook = stories.filter((item) => item.id === storyId)[0];
    setStoryBook(_storyBook);
  }, []);

  // get the history page to be render (fires on each choice)
  useEffect(() => {
    if (storyBook === null) return;
    const _pageObj = getPageStory(pageToRender, storyBook);
    setPageObj(_pageObj);
  }, [pageToRender, storyBook]);

  return (
    <SwitchTransition>
      <CSSTransition
        in={true}
        key={pageObj.page}
        timeout={300}
        classNames="text"
      >
        <div className="story-container">
          <MainText pageObj={pageObj} />
          <Options pageObj={pageObj} setPageToRender={setPageToRender} />
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

const Content = ({ view, setView, storyId, setStoryId }) => {
  switch (view) {
    default:
    case "home":
      return <Home setView={setView} setStoryId={setStoryId} />;
    case "story":
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
