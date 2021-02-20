import React, { useState, useEffect, useRef } from "react";

import "./ImageSelection.css";

//import socketIOClient from "socket.io-client";

var ENDPOINT = "http://127.0.0.1:4001/";
ENDPOINT = "ws://localhost:8000/ws/pollData/";

export default function ImageSelection() {
    const canvasRef = useRef(null);

    //const [response, setResponse] = useState("");

    // implement draw on ctx here

    useEffect(() => {
        //const socket = socketIOClient(ENDPOINT);
        const socket = new WebSocket(ENDPOINT);
        socket.onopen = () => {
            console.log("Websocket connection established");
        }
        socket.onclose = () => {
            console.log("Websocket connection established");
        }

        //socket.on("getImage", function(data) {
        socket.onmessage = (e) => {
            var data = JSON.parse(e.data)
            console.log(data)
                //var img = new Image();
                //img.onload = function() {
                //    console.log("hello");
                //    const canvas = canvasRef.current;
                //    const ctx = canvas.getContext("2d");
                //    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                //};
                //img.src = 'data:image/png;base64,' + data.value;

        };
        //});

        /* socket.on("image", function (info) {
          if (info.image) {
            var img = new Image();
            img.src = "data:image/jpeg;base64," + info.buffer;
            
           
          }
        }); */
    }, []);

    return ( <
        div className = "myCanvas" >
        <
        canvas ref = { canvasRef }
        width = { 500 }
        height = { 400 }
        /> < /
        div >

    );
}