import React, { useEffect, useState } from "react";

import "./Table.css";

import SERVER_DATA from "../data/server_data";

export default function TableComponent() {
  const [frameValues, setFrameValues] = useState({
    picture: "picture data",
    frame_data: [
      {
        personIndex: "1",
        cameraIndex: [
          {
            camera_no: "1",
            camera_flag: "y",
          },
          //can expand
        ],
      },
      //can expand
    ],
  });


  console.log(SERVER_DATA);
  console.log(frameValues);

  //on getting the socket we will make the state update to the previous as well as the present data values

  useEffect(() => {}, []);

  const renderTopRow = () => {
    return (
      <div>
      <th>Person 1</th>
      <th>Person 2</th>
      <th>Person 3</th>
      </div>
      
    );
  };

  const renderTopBelowRow = () => {
    return (
      <th>
       
        <th>Camera 1 </th>
        <th>Camera 1 </th>
        <th>Camera 1 </th>
        <th>Camera 1 </th>

      </th>
    );
  };

  const renderFrame = () => {
    return (
      <div>
      <td>Camera 1</td>
      <td>Camera 2</td>
      <td>Camera 3</td>
      </div>

    );
  };


 
  return (
    <div className="table-infinite">
      <h3>Table</h3>
      <table id="frameTable">
        <thead>
          <tr>
            {renderTopRow()}
          </tr>
          <tr>
            {renderTopBelowRow()}
          </tr>
        </thead>
        <tbody>
        <tr>
            {renderFrame()}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
