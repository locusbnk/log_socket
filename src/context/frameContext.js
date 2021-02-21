import React, { useState, createContext,useEffect } from "react";
import socket from "../gettingSocket/gettingSocket";

export const FrameContext = createContext();

export const FrameProvider = (props) => {
  //detected person state
  const [frameValues, setFrameValues] = useState([
    {
      "detectedPersons":[
        {
          cameraIndex: 0,
          globalpersonIndex: 0,
          bbox: [199.0, 101.0, 236.0, 246.0],
        }
      ],
      "images":""
    }
  ]);
  //images that we got state
 


  useEffect(() => {
    //image
    socket.on(
      "FromAPI",
      function (dataJSON) {
        setFrameValues(dataJSON.default)
      },
      []
    );
  },[]);


 /*  useEffect(()=>{
    console.log(frameValues)
  },[frameValues]) */

  return (
    <FrameContext.Provider
      value={{
        frameState:[frameValues, setFrameValues]
      }}
      key={Date.now()}
    >
      {props.children}
    </FrameContext.Provider>
  );
};
 