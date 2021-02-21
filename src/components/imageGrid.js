import React, { useRef, useEffect } from "react";
import socket from './gettingSocket';



export default function ImageGrid() {


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


  useEffect(() => {

    //image
    socket.on("FromAPI", function (dataJSON) {
      console.log(dataJSON)

   
  }, [])});


// draw rectangle
const drawRect = (info, style = {}) => {
  /* const { x, y, w, h } = info;
  const { borderColor = 'red', borderWidth = 1.5 } = style;
 
  ctx.beginPath();
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = borderWidth
  ctx.rect(x, y, w, h);
  ctx.stroke(); */

}

//draw images
const drawImg = (info,binaryData)=>{
  /* const { x, y, w, h } = info;
  var img = new Image();

  img.setAttribute("src", binaryData);
  
  ctx.drawImage(img,0,0,0,0, x, y,w,h);
  
 */
}



useEffect(() => {
  /* drawImg({x:200,y:200,w:300,h:300},)
  const r1Info = { x: 20, y: 30, w: 100, h: 50 };
  const r1Style = { borderColor: 'red', borderWidth: 2};
  drawRect(r1Info, r1Style);
 
  const r2Info = { x: 100, y: 100, w: 80, h: 150 };
  drawRect(r2Info); */
 
}, []);


  return (
    <div>
      hello
    </div>
  );


      }