import stories from "../db";

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
  
  export default Home;