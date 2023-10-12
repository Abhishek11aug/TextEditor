import React, { useState } from "react";

const propTypes = { Theme: String };
const defaultProps = { Theme: "Light" };

const Text_Form = (props) => {
  const [text, settext] = useState("");
  const [textToFind, setTextToFind] = useState("");
  const [btnText, setbtnText] = useState("SPEAKOUT");

  const handleOnChange = (event) => {
    settext(event.target.value);
  };

  const handleOnChange2 = (event) => {
    setTextToFind(event.target.value);
  };

  const handleUC = () => {
    const newText = text.toUpperCase();
    settext(newText);
  };

  const handleLC = () => {
    const newText = text.toLowerCase();
    settext(newText);
  };

  const handleTrim = () => {
    const newText = text.replace(/\s+/g, " ").trim();
    settext(newText);
  };

  const handleClear = () => {
    settext("");
  };

  const highlightWordOccurrences = () => {
    const len = textToFind.length;
    let index = 0;
    const textarea = document.getElementById("myTextarea");

    const findAndHighlight = () => {
      index = text.indexOf(textToFind, index);
      if (index !== -1) {
        textarea.focus();
        textarea.setSelectionRange(index, index + len);
        index += len;
        setTimeout(findAndHighlight, 1000);
      }
      else{
        textarea.setSelectionRange(0,0);
      }
    };

    findAndHighlight();
  };

  const countWords = (text) => {
    const newText = text.replace(/\s+/g, " ").trim();
    if (newText === "" || newText === " ") return 0;
    return newText.split(" ").length;
  };

  const buttonChange = () => {
    setbtnText("SPEAKOUT");
  };

  const handleSpeak = () => {
    if (btnText === "SPEAKOUT") {
      setbtnText("STOP");
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
      setTimeout(() => {
        buttonChange();
      }, text.length * 100);
    } else {
      setbtnText("SPEAKOUT");
      speechSynthesis.cancel();
    }
  };

  const HeadingTheme = props.Theme === "Dark" ? "light" : "dark";
  const ContentTheme = props.Theme === "Light" ? "black" : "white";
  const buttonTheme = props.Theme === "Dark" ? "success" : "primary";

  return (
    <>
      <h1 className={`my-1 d-block text-center text-decoration-underline text-${HeadingTheme} mb-3`}>
        Shape - Style your Text
      </h1>

      <div className="w-75 m-auto m-3">
        <textarea
          className="form-control bg-transparent"
          id="myTextarea"
          placeholder={text === "" ? "Enter your text here" : ""}
          value={text}
          onChange={handleOnChange}
          rows="6"
          style={{ color: ContentTheme }}
        ></textarea>
      </div>

      <div className="input-group mb-3 w-75 m-auto my-4">
        <input
          type="text"
          className="form-control bg-transparent"
          placeholder={textToFind === "" ? "Enter text to be searched" : ""}
          value={textToFind}
          onChange={handleOnChange2}
          style={{ color: ContentTheme }}
        ></input>
        <div className="input-group-append">
          <button
            className={`btn btn-${buttonTheme}`}
            onClick={highlightWordOccurrences}
            type="button"
          >
            Find
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center w-75 flex-md-wrap m-auto">
        <button
          type="button"
          className={`btn btn-${buttonTheme} m-2 w-25`}
          onClick={handleUC}
        >
          UPPERCASE
        </button>
        <button
          type="button"
          className={`btn btn-${buttonTheme} m-2 w-25`}
          onClick={handleLC}
        >
          LOWERCASE
        </button>
        <button
          type="button"
          className={`btn btn-${buttonTheme} m-2 w-25`}
          onClick={handleTrim}
        >
          CHOPPING
        </button>
        <button
          type="button"
          className={`btn btn-${buttonTheme} m-2 w-25`}
          onClick={handleClear}
        >
          CLEAR
        </button>

        <button
          type="button"
          className={`btn btn-${buttonTheme} m-2 w-25`}
          onClick={handleSpeak}
        >
          {btnText}
        </button>
      </div>

      <h3 className={`d-block text-decoration-underline text-${HeadingTheme} m-2`}> Details of Your Text </h3>

      <div className="w-50 m-2" style={{ color: ContentTheme }}>
        Number of Words Entered: {countWords(text)}
        <br></br>
        Number of Characters Entered: {text.length}
      </div>
    </>
  );
};

Text_Form.propTypes = propTypes;
Text_Form.defaultProps = defaultProps;
export default Text_Form;
