import React,{useState,useEffect} from "react";

import "./ImageSelection.css";



import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:4001/";



export default function ImageSelection() {
  var ctx = document.getElementById('canvas').getContext('2d')

  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("image", function(info) {
      if (info.image) {
        var img = new Image();
        img.src = 'data:image/jpeg;base64,' + info.buffer;
        setResponse(ctx.drawImage(img, 0, 0));
      }
    });
    
  }, []);





  return (
    <div className="myCanvas">
      <canvas id="canvas" width="500" height="500" style={{ border: "2px black solid" }}>
        Your browser does not support the HTML canvas tag.
      </canvas>


      



    </div>
  );
}

