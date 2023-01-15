import React, { Component } from "react";
import Palette from "./Palette";
import { Route, Routes } from "react-router-dom";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<h1>Palette list</h1>} />
        <Route exact path="/palette/:id" element={<h1>Individual</h1>} />
        {/* <div>
          <Palette palette={generatePalette(seedColors[4])} />
        </div> */}
      </Routes>
    );
  }
}

export default App;
