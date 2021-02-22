import React, { useRef, useEffect, useState, useContext } from "react";
import { Scrollbars } from "rc-scrollbars";

// import socket from "./gettingSocket";

import { FrameContext } from "../context/frameContext";


export default function ImageGrid() {
  /*  useEffect(() => {
    //image
    socket.on(
      "FromAPI",
      function (dataJSON) {
        console.log(dataJSON);
      },
      []
    );
  }); */

  // draw rectangle
  //   const drawRect = (info, style = {}) => {
  //     /* const { x, y, w, h } = info;
  //   const { borderColor = 'red', borderWidth = 1.5 } = style;

  //   ctx.beginPath();
  //   ctx.strokeStyle = borderColor;
  //   ctx.lineWidth = borderWidth
  //   ctx.rect(x, y, w, h);
  //   ctx.stroke(); */
  //   };

  //   //draw images
  //   const drawImg = (info, binaryData) => {
  //     /* const { x, y, w, h } = info;
  //   var img = new Image();

  //   img.setAttribute("src", binaryData);

  //   ctx.drawImage(img,0,0,0,0, x, y,w,h);

  //  */
  //   };

  //   useEffect(() => {
  //     /* drawImg({x:200,y:200,w:300,h:300},)
  //   const r1Info = { x: 20, y: 30, w: 100, h: 50 };
  //   const r1Style = { borderColor: 'red', borderWidth: 2};
  //   drawRect(r1Info, r1Style);

  //   const r2Info = { x: 100, y: 100, w: 80, h: 150 };
  //   drawRect(r2Info); */
  //   }, []);

  //   var st = `h`;

  return (
    <div>
      <Scrollbars style={{ width: "auto", height: 540 }}>
        <ImagesGrid />
      </Scrollbars>
    </div>
  );
}

function ImagesGrid() {
  //destructuring
  const { frameState } = useContext(FrameContext);
  // const [selectedCameras,setSelectedCameras] = useContext(CameraSelectContext);


  //state extraction
  const [frameValues, setFrameValues] = frameState;

  // useEffect(() => {
  //   // console.log(frameValues);
  //   // var arrCamera = frameValues.detectedPersons.map((item)=>item.cameraIndex)
  //   // setSelectedCameras(Array.from(new Set(arrCamera)));
  // }, [frameValues]);


  // const cameraClickHandler=()=>{

  // }

  return (
    <div className="imagesGrid">
      {frameValues.images.map((binaryImage) => (
        <img alt="nano" src={`data:image/jpeg;base64,${binaryImage}`} style={{ width: "auto", height: 200 ,padding:"auto",margin:"auto",border:"5px solid red"}} />
      ))}
    </div>
  );
}
