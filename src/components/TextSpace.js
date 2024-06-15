import React, { useState } from "react";

export default function TextSpace(props) {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

 

  function handleUpClick() {
    if (text.trim() === "") {
      props.showAlert("Please provide input", "warning");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to uppercase", "success");
    }
  }

  function handleLoClick() {
    if (text.trim() === "") {
      props.showAlert("Please provide input", "warning");
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase", "success");
    }
  }



  function handleUpChange(event) {
    const newText = event.target.value;
    setText(newText);
    // Count words in the updated text
    const words = newText.trim().split(/\s+/);
    setWordCount(words.length);
  }

  function handleClear() {
    setText("");
    props.showAlert("Text cleared", "success");
    setWordCount(0);
  }

  function handleCopy() {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard", "success");
  }

  const handleExtraSpaces = () => {
    if (text.trim() === "") {
      props.showAlert("Please provide input", "warning");
    } else {
      var newtext = text.split(/[" "]+/);
      setText(newtext.join(" "));
      props.showAlert("Extra spaces removed", "success");
    }
  };

  const handleSenCase = () => {
    if (text.trim() === "") {
      props.showAlert("Please provide input", "warning");
    } else {
      var sentences = text.split(". ");
      const capitalizedSentences = sentences.map((sentence) => {
        const firstLetter = sentence.charAt(0).toUpperCase();
        const restOfSentence = sentence.slice(1).toLowerCase();
        return firstLetter + restOfSentence;
      });

      setText(capitalizedSentences.join(". "));
      props.showAlert("Sentence case", "success");
    }
  };

  const handleTitlecase = () => {
    if (text.trim() === "") {
      props.showAlert("Please provide input", "warning");
    } else {
      const words = text.split(" ");
      const capitalizedWords = words.map((word) => {
        const firstLetter = word.charAt(0).toUpperCase();
        const restOfWord = word.slice(1).toLowerCase();
        return firstLetter + restOfWord;
      });

      setText(capitalizedWords.join(" "));
      props.showAlert("Title case", "success");
    }
  };

  const toCamelCase = () => {
    if (text.trim() === "") {
      props.showAlert("Please provide input", "warning");
    } else {
      const words = text.split(" ");
      const camelCasedWords = words.map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      });

      setText(camelCasedWords.join(""));
      props.showAlert("Sentence is converted to Camel case", "success");
    }
  };

  const toSnakeCase = () => {
    if (text.trim() === "") {
      props.showAlert("Please provide input", "warning");
    } else {
      setText(text.replace(/\s+/g, "_").toLowerCase());
      props.showAlert("Sentence is converted to snake case", "success");
    }
  };

  const toKebabCase = () => {
    if (text.trim() === "") {
      props.showAlert("Please provide input", "warning");
    } else {
      setText(text.replace(/\s+/g, "-").toLowerCase());
      props.showAlert("Sentence is converted to Kebab case", "success");
    }
  };

  const reverseText = () => {
    if (text.trim() === "") {
      props.showAlert("Please provide input", "warning");
    } else {
      setText(text.split("").reverse().join(""));
      props.showAlert("Sentence is reversed", "success");
    }
  };

  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <h1>{props.heading}</h1>

          <textarea
            className="form-control"
            style={{
              backgroundColor: props.theme === "dark" ? "grey" : "white",
              color: props.theme === "dark" ? "white" : "black",
            }}
            id="mybox"
            rows="6"
            placeholder="Enter text here"
            value={text}
            onChange={handleUpChange}
          ></textarea>
          <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>
            Uppercase
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>
            Lowercase
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={handleClear}>
            Clear
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>
            Copy Text
          </button>
          <button
            className="btn btn-primary my-3 mx-3"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={handleSenCase}>
            Sentence Case
          </button>
          <button
            className="btn btn-primary my-3 mx-3"
            onClick={handleTitlecase}
          >
            Title Case
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={toCamelCase}>
            Camel Case
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={toSnakeCase}>
            Snake Case
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={toKebabCase}>
            Kebab Case
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={reverseText}>
            Reverse
          </button>
        </div>
      </div>

      <div className="container">
        <h2>Text Analysis</h2>
        <p>
          {wordCount} words and {text.length} characters
        </p>
        <p>Can be read in {0.008 * text.split(" ").length} minutes</p>
      </div>
    </>
  );
}
