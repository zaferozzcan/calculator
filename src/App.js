import React from "react";

// import "./styles.scss";

const App = () => (
  <div className="Calculator-main">
    <form>
      <div className="Calculator-screen">
        <input className="result" type="text" placeholder="0" name="result" />
      </div>
      <div className="Calculator-buttons">
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </form>
  </div>
);
export default App;
