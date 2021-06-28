import { useState, useEffect } from "react";

const MainText = ({ pageObj }) => {

  return (
    <div className="main-text">
          {pageObj.title ? <h1 className="title">{pageObj.title}</h1> : null}
          <p className="text-paragraph">{pageObj.text}</p>
    </div>
  );
};

export default MainText;
