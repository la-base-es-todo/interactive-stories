import { BrowserRouter, Link } from "react-router-dom";
import stories from "../db";

const Home = ({ setView, setStoryId }) => {
  return (
    <>
      {stories.map((item) => {
        return (
          <div className="story-data" key={item.id}>
            <img className="story-img" src={item.cover} alt="Logo" />
            <div className="story-desc">
              <h1>{item.title}</h1>
              <p className="story-desc">{item.synopsis}</p>
              <Link to={`/story/${item.id}`}>leer...</Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
