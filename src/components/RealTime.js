import React from "react";
import './RealTime.css'


// import Table from "./TableExp";
import ImageSection from './ImageSelection'
import ImageGrid from "./imageGrid";

export default function RealTime() {
  return (
    <div className="mainPage">
      <div className="mainCanvas">
        <ImageSection/>
      </div>

        <div className="sideGrid">
          <ImageGrid/>
        </div>
     {/*  <div className="tablePart">
        <Table />
      </div> */}
    </div>
  );
}




