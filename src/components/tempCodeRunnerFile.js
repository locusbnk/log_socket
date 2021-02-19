var rowsGenerated = {}
var mainData = {}

var cameraData = {}
var cameraDump =[]
var personDump=[]

for(let j = 0 ; j < 5 ; j ++){
  cameraData.camera_no="1"
  cameraData.camera_flag="y"
cameraDump.push(cameraData)
}





for( let i = 0 ; i < 10 ; i++){
  mainData.personIndex="1"
  mainData.cameraIndex=cameraDump
  personDump.push(mainData)
}

console.log(personDump)
