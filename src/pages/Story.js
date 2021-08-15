import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useParams } from "react-router-dom";

import { useStory } from "../hooks/useStory";
import MainText from "../components/MainText";
import Options from "../components/Options";
import NavBar from "../components/NavBar";
import ScrollToTop from "../components/ScrollToTop";


const Story = () => {
  const { storyId } = useParams();// storyId: 'escape-a-marte'
  const { setNextChapter, chapterData } = useStory(storyId);

  return (
    <>
      <NavBar />
      <SwitchTransition>
        <CSSTransition
          in={true}
          key={chapterData.page}
          timeout={300}
          classNames="text"
        >
          <div className="story-container">
            <MainText title={chapterData.title} text={chapterData.text} />
            <Options options={chapterData.options} setNextChapter={setNextChapter} />
            <ScrollToTop chapterData={chapterData} />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default Story;
