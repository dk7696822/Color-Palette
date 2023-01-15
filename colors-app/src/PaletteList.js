import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import "./PaletteList.css";

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes } = this.props;
    return (
      <div className="palette-list">
        <div className="container">
          <nav className="nav">
            <h1>Welcome to FabColour</h1>
          </nav>
          <div className="palettes">
            {/* <MiniPalette /> */}

            {palettes.map((palette) => {
              return (
                <MiniPalette
                  {...palette}
                  handleClick={() => this.goToPalette(palette.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default PaletteList;
