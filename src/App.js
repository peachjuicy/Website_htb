import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/Main";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={Main} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
