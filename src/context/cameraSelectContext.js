import React, { useState, createContext, useEffect } from "react";
// import socket from "../gettingSocket/gettingSocket";

export const CameraSelectContext = createContext();

export const CameraSelectProvider = (props) => {
  //detected person state
  const [selectedCameras, setSelectedCameras] = useState({
    cameraIndex: [0],
  });
  //images that we got state

  // useEffect(()=>{
  //   console.log(frameValues)
  // },[frameValues])

  return (
    <CameraSelectContext.Provider
      value={
        [selectedCameras,setSelectedCameras]
      }
      key={Date.now()}
    >
      {props.children}
    </CameraSelectContext.Provider>
  );
};
