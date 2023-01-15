import React from "react";
import "./MiniPalette.css";

function MiniPalette(props) {
  const { paletteName, colors, emoji } = props;
  const miniColorBoxes = colors.map((color) => {
    return (
      <div
        className="mini-box"
        style={{ backgroundColor: color.color }}
        key={color.name}
      />
    );
  });
  return (
    <div className="mini-palette" onClick={props.handleClick}>
      <div className="colors">{miniColorBoxes}</div>
      <h5 className="title">{paletteName}</h5>
    </div>
  );
}

export default MiniPalette;
