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


import {Scrollbars} from 'rc-scrollbars'


const ENDPOINT = "http://127.0.0.1:4001/";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  TableCell:{
    padding:"0px",
    margin:"0px"
  }
});

export default function BasicTable() {
  const classes = useStyles();

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
        responseTest.frame_data.map((item) =>
          item.cameraIndex.map((sItem) => sItem.camera_no)
        )
      );
      setCameraColumnFlagData((prevData) => [
        ...prevData,
        responseTest.frame_data.map((item) =>
          item.cameraIndex.map((sItem) => sItem.camera_flag)
        ),
      ]);
    });
  }, []);

  return (
    <Scrollbars style={{ width: "auto", height: 1020 }}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table" size="small">
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
          {cameraColumnFlagData.map((rowData, index, cameraColumnFlagData) => (
            <TableRow>
              <TableCell>
                frame no : {cameraColumnFlagData.length - index}
              </TableCell>

              {rowData.map((rowItems) => (
                <TableCell>
                  {rowItems.map((item) => (
                    <TableCell>{item}</TableCell>
                  ))}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Scrollbars>
  );
}
