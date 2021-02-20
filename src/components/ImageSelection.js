import React, { useState, useEffect, useRef } from "react";

import "./ImageSelection.css";

import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:4001/";

export default function ImageSelection() {

  const canvasRef = useRef(null);




  //const [response, setResponse] = useState("");

  // implement draw on ctx here

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("imageConversionByServer", function (data) {
      var img = new Image();

      img.setAttribute("src", data);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 100, 100);
    });


    /* socket.on("image", function (info) {
      if (info.image) {
        var img = new Image();
        img.src = "data:image/jpeg;base64," + info.buffer;
        
       
      }
    }); */
  }, []);

  return (
    <div className="viewController">
      <div className="myCanvas">
        <canvas ref={canvasRef} width={500} height={400} />
      </div>
      <div>

      </div>
      
    </div>
  );
}
