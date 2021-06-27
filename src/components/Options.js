import { useEffect } from "react";

const Options = ({ pageObj, setPageToRender }) => {
  if (!pageObj.options) {
    return null;
  }

  return (
    <>
      {pageObj.options.length ? (
        <div className="options">
          <p>¿Quieres</p>
          {pageObj.options.map((option) => {
            return (
              <button
                key={option.page}
                className="option-slot"
                onClick={() => setPageToRender({ page: option.link })}
              >
                {option.text}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="options-end">
          <p>FIN</p>
        </div>
      )}
    </>
  );
};

export default Options;
