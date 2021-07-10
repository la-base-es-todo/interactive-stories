import { useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import MainText from "./MainText";
import Options from "./Options";
import getPageStory from "../api";
import stories from "../db";


const Story = ({ storyId }) => {
    const [pageToRender, setPageToRender] = useState({ page: "home" }); // which page to extract from the story book
    const [pageObj, setPageObj] = useState({}); // store the history page to be render
    const [storyBook, setStoryBook] = useState(null); // store the story book data: the pages
  
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
  
  export default Story;