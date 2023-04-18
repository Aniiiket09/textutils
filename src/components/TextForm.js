import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper case was clicked :" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert(" Converted to uppercase", "success");
  };

  const handleLoClick = () => {
    // console.log("Upper case was clicked :" + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("  Converted to lowercase", "success");
  };
  const handleclearClick = () => {
    // console.log("Upper case was clicked :" + text)
    let newText = "";
    setText(newText);
    props.showalert("  Text Has Been Cleared", "success");
  };
  const handleLocLoClick = () => {
    // console.log("Upper case was clicked :" + text)
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showalert("  Converted to Lowercase of captitalize Word", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change")
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("  Text Has Copied", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("  Extra Spaces Removed", "success");
  };

  const [text, setText] = useState("");
  // text ="new state" // wrong way to change the state
  // setText="new state anything" // correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
          // backgroundColor: props.mode === "dark " ? "red" : "white",
        }}
      >
        <h1
          style={
            {
              // backgroundColor: props.mode === "dark " ? "blue" : "white",
            }
          }
        >
          {props.heading}
        </h1>

        <div
          className="mb-3"
          style={{
            color: props.mode === "dark" ? "black" : "white",
          }}
        >
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              // backgroundColor: props.mode === "dark " ? "white" : "blue",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2 my-2 " onClick={handleUpClick}>
          {" "}
          Convert to Uppercase
        </button>

        <button className="btn btn-primary  mx-2 my-2" onClick={handleLoClick}>
          {" "}
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary  mx-2 my-2"
          onClick={handleclearClick}
        >
          {" "}
          Clear
        </button>

        <button
          className="btn btn-primary  mx-2 my-2"
          onClick={handleLocLoClick}
        >
          {" "}
          Try it
        </button>
        <button className="btn btn-primary  mx-2 my-2" onClick={handleCopy}>
          {" "}
          Copy Text
        </button>
        <button
          className="btn btn-primary  mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          {" "}
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "black" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes to read words
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing To Preview!"}</p>
      </div>
    </>
  );
}
