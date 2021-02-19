import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
  /* 
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
  }); */


  const [personColumnData, setPersonColumnData] = useState([]);
  const [cameraColumnNoData, setCameraColumnNoData] = useState([]);
  const [cameraColumnFlagData, setCameraColumnFlagData] = useState([]);

  //const [respons, setResponse] = useState([]);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", (responseTest) => {
    //  console.log(responseTest);
      setPersonColumnData(
        responseTest.frame_data.map((item) => item.personIndex)
      );
      setCameraColumnNoData(
        responseTest.frame_data.map((item) =>item.cameraIndex.map((sItem)=>sItem.camera_no) )
      );
      setCameraColumnFlagData(prevData=>(
        
        [...prevData,responseTest.frame_data.map((item) =>item.cameraIndex.map((sItem)=>sItem.camera_flag))])
      );
      
    });
  }, []);



  /* useEffect(()=>{
  console.log(personColumnData);
  console.log(cameraColumnNoData)
  console.log(cameraColumnFlagData)


  },[personColumnData,cameraColumnNoData,cameraColumnFlagData]) */




  /*   useEffect(() => {
    const interval = setInterval(() => setFrameValues(rowsGenerated), 1000);
    setTimeout(() => {
      return () => {
        clearInterval(interval);
      };
    }, 10000);
  }, []);
 */

  //console.log(respons);

  return (
    // {<ul>
    //   {respons.map((val) => {
    //     return <li>{val}</li>;
    //   })}
    // </ul>}

    //<div>asd</div>

   <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>{"Person No"}</TableCell>

            {personColumnData.map((item) => (
              <TableCell>Person {item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
          <TableCell>{"Camera No"}</TableCell>

            {cameraColumnNoData.map((item) => (
              <TableCell>
                {item.map((cameraNo) => (
                  <TableCell>{cameraNo}</TableCell>
                ))}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>

        {cameraColumnFlagData.map((rowData,index,cameraColumnFlagData)=>(

          <TableRow>
        <TableCell>frame no : {cameraColumnFlagData.length-index}</TableCell>

            {rowData.map((rowItems)=>(
              <TableCell>
                {rowItems.map((item)=>(
                  <TableCell>{item}</TableCell>
                ))}
              </TableCell>
            ))}
          </TableRow>

        ))}
          
        </TableBody>
      </Table>
    </TableContainer> 
  );
}
