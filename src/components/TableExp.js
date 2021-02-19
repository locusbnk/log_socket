import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
/* import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper"; */

import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:4001/";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

/* var rows = {
  picture: "picture_data",
  frame_data: [
    {
      //person 1
      personIndex: "1",
      cameraIndex: [
        {
          camera_no: "1",
          camera_flag: "y",
        },
        {
          camera_no: "2",
          camera_flag: "y",
        },
        {
          camera_no: "3",
          camera_flag: "n",
        },
        {
          camera_no: "4",
          camera_flag: "y",
        },
      ],
    },
    {
      //person 2
      personIndex: "2",
      cameraIndex: [
        {
          camera_no: "1",
          camera_flag: "y",
        },
        {
          camera_no: "2",
          camera_flag: "n",
        },
        {
          camera_no: "3",
          camera_flag: "n",
        },
        {
          camera_no: "4",
          camera_flag: "n",
        },
      ],
    },
    {
      //person 3
      personIndex: "3",
      cameraIndex: [
        {
          camera_no: "1",
          camera_flag: "y",
        },
        {
          camera_no: "2",
          camera_flag: "y",
        },
        {
          camera_no: "3",
          camera_flag: "n",
        },
        {
          camera_no: "4",
          camera_flag: "y",
        },
      ],
    },
  ],
};




var rowsGenerated = {};
var mainData = {};

var cameraData = {};
var cameraDump = [];
var personDump = [];

for (let j = 0; j < 5; j++) {
  cameraData.camera_no = "1";
  cameraData.camera_flag = "y";
  cameraDump.push(cameraData);
}

for (let i = 0; i < 10; i++) {
  mainData.personIndex = "1";
  mainData.cameraIndex = cameraDump;
  personDump.push(mainData);
}

rowsGenerated.picture = "picture data";
rowsGenerated.frame_data = personDump; */

export default function BasicTable() {
  const classes = useStyles();

 /*  const [frameValues, setFrameValues] = useState({
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
  }); */

 


  const [respons, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    });
  }, []);
/*   useEffect(() => {
    const interval = setInterval(() => setFrameValues(rowsGenerated), 1000);
    setTimeout(() => {
      return () => {
        clearInterval(interval);
      };
    }, 10000);
  }, []);
 */
 

  return (
    <div>
    <h3>{respons}</h3>

    </div>
    
    
   /*  <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {frameValues.frame_data.map((item) => (
              <TableCell>Person {item.personIndex}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            {frameValues.frame_data.map((item) => (
              <TableCell>
                {item.cameraIndex.map((camera) => (
                  <TableCell>{camera.camera_no}</TableCell>
                ))}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            {frameValues.frame_data.map((item) => (
              <>
                <TableCell>
                  {item.cameraIndex.map((camera) => (
                    <TableCell>{camera.camera_flag}</TableCell>
                  ))}
                </TableCell>
              </>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer> */
  );
}
