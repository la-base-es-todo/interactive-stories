import { useState, useEffect } from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";

const MainText = ({ pageObj }) => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInProp(true);
    }, 300);
  }, []);

  return (
    <div className="main-text">
      {pageObj.title ? <h1 className="title">{pageObj.title}</h1> : null}

      <CSSTransition in={inProp} timeout={1200} classNames="text">
        <p className="text-paragraph">{pageObj.text}</p>
      </CSSTransition>

    </div>
  );
};

export default MainText;
