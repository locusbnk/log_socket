import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

var rows = {
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

/* function createData(frameIndex,cameraIndex) {
  return { frameIndex,cameraIndex};
}


const rows = [
  createData(0,['y','y','n','y']),
  createData(0,['y','y','n','y']),
  createData(0,['y','y','n','y']),
  createData(0,['y','y','n','y']),
  createData(0,['y','y','n','y']),
  
];
 */
export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {rows.frame_data.map((item) => (
              <TableCell>Person {item.personIndex}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableHead>
        <TableRow>
          {rows.frame_data.map((item)=>(
            <TableCell>
              {item.cameraIndex.map((camera)=>(
                <TableCell>
                  {camera.camera_no}
                </TableCell>
              ))}
            </TableCell>
             
          ))}
          </TableRow>

        </TableHead>

     
        <TableBody>
        
            <TableRow>
            

          {rows.frame_data.map((item)=>(
            <>
            <TableCell>
              {item.cameraIndex.map((camera)=>(
                <TableCell>
                  {camera.camera_flag}
                </TableCell>
              ))}
            </TableCell>
             </>
          ))}
          </TableRow>
       
        </TableBody>
      </Table>
    </TableContainer>
  );
}
