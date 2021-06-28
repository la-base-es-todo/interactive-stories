import { useEffect, useState } from "react";

const MainText = ({ pageObj }) => {
  const [textSplitted, setTextSplitted] = useState([]);

  useEffect(() => {
    console.log({ pageObj });
    if (pageObj.text) {
      const _textSplitted = pageObj.text.split("\n");
      setTextSplitted(_textSplitted);
      console.log({ textSplitted });
    }
  }, [pageObj]);

  return (
    <div className="main-text">
      {pageObj.title ? <h1 className="title">{pageObj.title}</h1> : null}
      {/* <p className="text-paragraph">{pageObj.text}</p> */}
      {textSplitted.map((text) => (
        <p className="text-paragraph">{text}</p>
      ))}
    </div>
  );
};

export default MainText;
