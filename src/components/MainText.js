const MainText = ({ title, text }) => {

  if (!text) return null;

  return (
    <div className="main-text">
      {title ? <h1 className="title">{title}</h1> : null}
      {text.map((textLine) => (
        <p className="text-paragraph" key={textLine}>{textLine}</p>
      ))}
    </div>
  );
};

export default MainText;
