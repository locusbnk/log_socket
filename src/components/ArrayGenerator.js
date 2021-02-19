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
rowsGenerated.frame_data = personDump;

console.log(rowsGenerated);
