import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useParams } from "react-router-dom";

import { useStory } from "../hooks/useStory";
import MainText from "../components/MainText";
import Options from "../components/Options";
import NavBar from "../components/NavBar";
import ScrollToTop from "../components/ScrollToTop";
import { Helmet } from "react-helmet";


const Story = () => {
  const { storyId } = useParams();// storyId: 'escape-a-marte'
  const { setNextChapter, chapterData, storyBook } = useStory(storyId);

  return (
    <>
      <Helmet>
        {storyBook && <title>{storyBook.title} - {storyBook.author}</title>}
      </Helmet>
      <NavBar />
      <SwitchTransition>
        <CSSTransition
          in={true}
          key={chapterData.pid}
          timeout={300}
          classNames="text"
        >
          <div className="story-container">
            <MainText title={chapterData.name} text={chapterData.text} />
            <Options options={chapterData.links} setNextChapter={setNextChapter} />
            <ScrollToTop chapterData={chapterData} />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default Story;
