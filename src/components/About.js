import React from "react";

export default function About(props) {
  return (
    <div className="container my-5">
      <div className="accordion accordion-flush " id="accordionFlushExample"
      style={{
        backgroundColor: props.theme === "dark" ? '#333333' : "white",
        color: props.theme === "dark" ? "white" : "black",
      }}>
        <div className="accordion-item ">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{
                backgroundColor: props.theme === "dark" ? '#333333' : "white",
                color: props.theme === "dark" ? "white" : "black",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              UpperCase
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
            style={{
              backgroundColor: props.theme === "dark" ? '#333333' : "white",
              color: props.theme === "dark" ? "white" : "black",
            }}
          >
            <div className="accordion-body">
              Converts given text characters to upper case.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{
                backgroundColor: props.theme === "dark" ? '#333333' : "white",
                color: props.theme === "dark" ? "white" : "black",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              LowerCase
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
            style={{
              backgroundColor: props.theme === "dark" ? '#333333' : "white",
              color: props.theme === "dark" ? "white" : "black",
            }}
          >
            <div className="accordion-body">
             Converts the given text characters to lower case.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{
                backgroundColor: props.theme === "dark" ? '#333333' : "white",
                color: props.theme === "dark" ? "white" : "black",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Clear
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
            style={{
              backgroundColor: props.theme === "dark" ? '#333333' : "white",
              color: props.theme === "dark" ? "white" : "black",
            }}
          >
            <div className="accordion-body">
              Clears the text area.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{
                backgroundColor: props.theme === "dark" ? '#333333' : "white",
                color: props.theme === "dark" ? "white" : "black",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              CopyText
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
            style={{
              backgroundColor: props.theme === "dark" ? '#333333' : "white",
              color: props.theme === "dark" ? "white" : "black",
            }}
          >
            <div className="accordion-body">
              Copies content to clipboard.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{
                backgroundColor: props.theme === "dark" ? '#333333' : "white",
                color: props.theme === "dark" ? "white" : "black",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              RemoveExtraSpaces
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
            style={{
              backgroundColor: props.theme === "dark" ? '#333333' : "white",
              color: props.theme === "dark" ? "white" : "black",
            }}
          >
            <div className="accordion-body">
              Removes extra spaces from the text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              style={{
                backgroundColor: props.theme === "dark" ? '#333333' : "white",
                color: props.theme === "dark" ? "white" : "black",
              }}
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
              SentenceCase
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
            style={{
              backgroundColor: props.theme === "dark" ? '#333333' : "white",
              color: props.theme === "dark" ? "white" : "black",
            }}
          >
            <div className="accordion-body">
              <b>E.g</b><br></br>
              <p>
                how are you?  
              </p>
              <p>
                How are you?
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              style={{
                backgroundColor: props.theme === "dark" ? '#333333' : "white",
                color: props.theme === "dark" ? "white" : "black",
              }}
              data-bs-target="#flush-collapseSeven"
              aria-expanded="false"
              aria-controls="flush-collapseSeven"
            >
              TitleCase
            </button>
          </h2>
          <div
            id="flush-collapseSeven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
            style={{
              backgroundColor: props.theme === "dark" ? '#333333' : "white",
              color: props.theme === "dark" ? "white" : "black",
            }}
          >
            <div className="accordion-body">
            <b>E.g</b><br></br>
              <p>
                how are you?  
              </p>
              <p>
                How Are You?
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{
                backgroundColor: props.theme === "dark" ? '#333333' : "white",
                color: props.theme === "dark" ? "white" : "black",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseEight"
              aria-expanded="false"
              aria-controls="flush-collapseEight"
            >
              CamelCase
            </button>
          </h2>
          <div
            id="flush-collapseEight"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
            style={{
              backgroundColor: props.theme === "dark" ? '#333333' : "white",
              color: props.theme === "dark" ? "white" : "black",
            }}
          >
            <div className="accordion-body">
            <b>E.g</b><br></br>
              <p>
                how are you?  
              </p>
              <p>
              howAreYou?  
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{
                backgroundColor: props.theme === "dark" ? '#333333' : "white",
                color: props.theme === "dark" ? "white" : "black",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseNine"
              aria-expanded="false"
              aria-controls="flush-collapseNine"
            >
              SnakeCase
            </button>
          </h2>
          <div
            id="flush-collapseNine"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
            style={{
              backgroundColor: props.theme === "dark" ? '#333333' : "white",
              color: props.theme === "dark" ? "white" : "black",
            }}
          >
            <div className="accordion-body">
            <b>E.g</b><br></br>
              <p>
                how are you?  
              </p>
              <p>
              how_are_you?  
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{
                backgroundColor: props.theme === "dark" ? '#333333' : "white",
                color: props.theme === "dark" ? "white" : "black",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTen"
              aria-expanded="false"
              aria-controls="flush-collapseTen"
            >KebabCase
            </button>
          </h2>
          <div
            id="flush-collapseTen"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
            style={{
              backgroundColor: props.theme === "dark" ? '#333333' : "white",
              color: props.theme === "dark" ? "white" : "black",
            }}
          >
            <div className="accordion-body">
            <b>E.g</b><br></br>
              <p>
                how are you?  
              </p>
              <p>
              how-are-you?  
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{
                backgroundColor: props.theme === "dark" ? '#333333' : "white",
                color: props.theme === "dark" ? "white" : "black",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseEleven"
              aria-expanded="false"
              aria-controls="flush-collapseEleven"
            >
              Reverse
            </button>
          </h2>
          <div
            id="flush-collapseEleven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
            style={{
              backgroundColor: props.theme === "dark" ? '#333333' : "white",
              color: props.theme === "dark" ? "white" : "black",
            }}
          >
            <div className="accordion-body" >
              Reverses the text.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
