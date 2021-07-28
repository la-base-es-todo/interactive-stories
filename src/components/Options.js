const Options = ({ pageObj, setPageToRender }) => {
  if (!pageObj.options) {
    return null;
  }

  return (
    <>
      {pageObj.options.length ? (
        <div className="options">
          {/* <p>¿Quieres</p> */}
          {pageObj.options.map((option) => (
            <button
              key={option.page}
              className="option-slot"
              onClick={() => setPageToRender({ page: option.link })}
            >
              {option.text}
            </button>
          ))}
        </div>
      ) : (
        <div className="options-end">
          <p>FIN</p>
          <div className="end-buttons">
            <button className="back-button">volver al inicio</button>
          </div>

        </div>
      )}
    </>
  );
};

export default Options;
