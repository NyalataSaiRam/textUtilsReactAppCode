import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextSpace from "./components/TextSpace";
import Alerts from "./components/Alerts";
import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#333333";
      document.body.style.color = "white";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    
      // {/* <Navbar title="TextUtils" theme={mode} toggleMode = {toggleMode}  />
      // <Alerts alert = {alert}/> */}
      // {/* <About theme={mode}/> */}
      // {/* <TextSpace  heading='Enter your text here' theme={mode} showAlert = {showAlert}/> */}
        <>
       

      <Router>
        <Navbar title="TextUtils" theme={mode} toggleMode={toggleMode} />
        <div className=" h-[50px]" >
        <Alerts alert={alert} />
        </div>
        <Switch>
          <Route exact path="/">
            <TextSpace
              heading="Enter your text here"
              theme={mode}
              showAlert={showAlert}
            />
          </Route>
          <Route exact path="/about">
            <About theme={mode} />
          </Route>
        </Switch>
      </Router>
       
        </>
    
  );
}

export default App;
