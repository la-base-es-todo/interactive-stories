import { useHistory } from "react-router-dom";


const Options = ({ options, setNextChapter }) => {
  const history = useHistory();

  if (!options) {
    return null;
  }

  return (
    <>
      {options.length ? (
        <div className="options">
          {/* <p>¿Quieres</p> */}
          {options.map((option) => (
            <button
              key={option.pid}
              className="option-slot"
              onClick={() => setNextChapter({ pid: option.pid })}
            >
              {option.text}
            </button>
          ))}
        </div>
      ) : (
        <div className="options-end">
          <p>FIN</p>
          <div className="end-buttons">
            <button className="back-button" onClick={() => history.push('/')}>volver al inicio</button>
          </div>

        </div>
      )}
    </>
  );
};

export default Options;
