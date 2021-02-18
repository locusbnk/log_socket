import React from "react";

import "./ImageSelection.css";

export default function ImageSelection() {
  return (
    <div className="myCanvas">
      <canvas width="500" height="500" style={{ border: "2px black solid" }}>
        Your browser does not support the HTML canvas tag.
      </canvas>
    </div>
  );
}

