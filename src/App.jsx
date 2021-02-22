import React from "react";

import RealTime from "./components/RealTime";

import {FrameProvider} from "./context/frameContext";
import {CameraSelectProvider} from './context/cameraSelectContext'

export default function App() {
  return (
    <div>
      <FrameProvider>
      <CameraSelectProvider>
        <RealTime />
        </CameraSelectProvider>
      </FrameProvider>
    </div>
  );
}

