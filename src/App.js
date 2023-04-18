import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import { Routes } from "react-router-dom";

import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  const [mode, setMode] = useState("light"); // whetherstarte of  dark mode is on or off
  const [alert, setAlert] = useState(null); // this is for alert function

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#172444";
      showalert("  Dark mode is enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("  Light mode is enable", "success");
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" about="About Us" /> */}
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> */}
      {/* <Navbar/> */}
      {/* <TextForm
        heading="Enter the text to analyse below "
        showalert={showalert}
      /> */}
      {/* <About /> */}
      {/* <Alert alert={alert} /> */}
      <div className="container my-3">
        {/* style={{ backgroundColor: "#172444" }} */}
        <Router>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyse below "
                  showalert={showalert}
                />
              }
            />

            <Route exact path="/about" element={<About mode={mode} />} />
            {/* <Route exact path="/register" element={<Signup />} /> */}

            {/* <Route path="*" element={<Page404 />} /> */}
            {/* React Router v6 does not use exact attribute to match the exact routes. By default it matches the exact route. To match any value use "*" in the route path. */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
