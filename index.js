const express = require("express");
const cors = require("cors");
const path = require('path');
const base64Img = require('base64-img');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs = require('fs')
const neatCsv = require('neat-csv');
require('dotenv').config({ path: './server.env' })

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

const FILE = process.env.FILEPATH

const csvWriter = createCsvWriter({
  path: FILE,
  header: [
    {id: 'email', title: 'email'},
    //{id: 'name', title: 'name'},
    {id: 'team', title: 'team'},
    {id: 'input', title: 'input'}
  ],
  append: true
});

var teamA = '', teamB = '', teamC = '', teamD = '';


async function getCSVData(){
  const buffer = fs.readFileSync(FILE);
  const rows = await neatCsv(buffer);
  return rows;
}

app.post("/participate", async (req, res) => {

  const { email, 
          // name, 
          team, 
          input } = req.body;

  if(!email.includes("@wipro.com")){
    res.json({"valid":"false","message":"Email provided is not a valid wipro email ID"});
    return;
  }
 
  var flag = false

  // const rows = await getCSVData();

  // for(var idx = 0; idx < rows.length; idx++){
  //   if(rows[idx].email === email){
  //     flag = true
  //     break
  //   }
  // }

  var response;

  if(flag){
    response = {"exists":flag,"data":"Email already exists!"}
  }else{
    csvWriter.writeRecords([{   email,
                                // name, 
                                team, 
                                input }])
    .then(() => {
      response = {"exists":flag,"data":"Successfully submitted! Thank you!"}
    });
  }
  res.json(response);
});

async function getImages(){

  const rows = await getCSVData();

  var countA=0, countB=0, countC=0, countD=0;
  for(var idx=0; idx<rows.length; idx++){
    var row = rows[idx];
    switch(row.team.toLowerCase()){
      case process.env.A: countA++; break;
      case process.env.B: countB++; break;
      case process.env.C: countC++; break;
      case process.env.D: countD++; break;
    }
  }

  if(countA > process.env.MAX_COUNT){
    countA = process.env.MAX_COUNT
  }

  if(countB > process.env.MAX_COUNT){
    countB = process.env.MAX_COUNT
  }

  if(countC > process.env.MAX_COUNT){
    countC = process.env.MAX_COUNT
  }

  if(countD > process.env.MAX_COUNT){
    countD = process.env.MAX_COUNT
  }

  var steps = process.env.STEPS;

  var pathA = process.env.IMAGE_FOLDER+'/'+process.env.A+'/Slide'+(parseInt(countA/steps)+1)+'.JPG';
  var pathB = process.env.IMAGE_FOLDER+'/'+process.env.B+'/Slide'+(parseInt(countB/steps)+1)+'.JPG';
  var pathC = process.env.IMAGE_FOLDER+'/'+process.env.C+'/Slide'+(parseInt(countC/steps)+1)+'.JPG';
  var pathD = process.env.IMAGE_FOLDER+'/'+process.env.D+'/Slide'+(parseInt(countD/steps)+1)+'.JPG';

  var prefix = 'data:image/jpeg;'
	teamA = prefix+base64Img.base64Sync(pathA);
  teamB = prefix+base64Img.base64Sync(pathB);
  teamC = prefix+base64Img.base64Sync(pathC);
  teamD = prefix+base64Img.base64Sync(pathD);
}

setInterval(() => {
  console.log('Getting images');
  getImages();
},10000);

app.post('/results', async (req,res)=>{

  res.json({"A":teamA,"B":teamB,"C":teamC,"D":teamD});

});

app.get('/*',(req,res)=>{
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 1337, (req, res) => console.log("running on 1337"));
