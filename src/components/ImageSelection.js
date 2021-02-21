import React, { useState, useEffect, useRef, useContext } from "react";

import "./ImageSelection.css";

/* import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:4001/";

const socket = socketIOClient(ENDPOINT); */

import socket from "../gettingSocket/gettingSocket";

import { FrameContext } from "../context/frameContext";

export default function ImageSelection() {
  //destructuring
  const { frameState } = useContext(FrameContext);

  //state extraction
  const [frameValues, setFrameValues] = frameState;

  //  useEffect(() => {
  //    console.log(frameValues);
  //  }, [frameValues]);

  const canvasRef = useRef(null);

  //const [response, setResponse] = useState("");

  // implement draw on ctx here

  // useEffect(() => {

  //   // socket.on("imageConversionByServer", function (data) {
  //     var img = new Image();

  //     img.setAttribute("src", data);
  //     const canvas = canvasRef.current;
  //     const ctx = canvas.getContext("2d");

  //     ctx.drawImage(img, 100, 100);
  //   // });

  //   /* socket.on("image", function (info) {
  //     if (info.image) {
  //       var img = new Image();
  //       img.src = "data:image/jpeg;base64," + info.buffer;

  //     }
  //   }); */
  // }, [frameValues]);

  

  return (
    <div className="viewController">
      <div className="myCanvas">
        <canvas
          ref={canvasRef}
          width={1300}
          height={500}
          style={{ border: "5px solid red" }}
        />
      </div>
      <div></div>
    </div>
  );
}
