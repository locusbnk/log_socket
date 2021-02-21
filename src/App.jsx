import React from "react";

import RealTime from "./components/RealTime";

import {FrameProvider} from "./context/frameContext";

export default function App() {
  return (
    <div>
      <FrameProvider>
        <RealTime />
      </FrameProvider>
    </div>
  );
}
