import Home from "./Home";
import Story from "./Story";

const Content = ({ view, setView, storyId, setStoryId }) => {
  switch (view) {
    default:
    case "home":
      return <Home setView={setView} setStoryId={setStoryId} />;
    case "story":
      return <Story setView={setView} storyId={storyId} />;
  }
};

export default Content;
