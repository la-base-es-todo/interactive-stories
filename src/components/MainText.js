import { useEffect, useState } from "react";

const MainText = ({ pageObj }) => {
  const [textSplitted, setTextSplitted] = useState([]);

  // split the chapter text according /n token
  useEffect(() => {
    if (pageObj.text) {
      const _textSplitted = pageObj.text.split("\n");
      setTextSplitted(_textSplitted);
    }
  }, [pageObj]);

  return (
    <div className="main-text">
      {pageObj.title ? <h1 className="title">{pageObj.title}</h1> : null}
      {textSplitted.map((text) => (
        <p className="text-paragraph" key={text}>{text}</p>
      ))}
    </div>
  );
};

export default MainText;
