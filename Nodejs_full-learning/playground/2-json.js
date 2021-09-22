//
// Challenge: Work with JSON and the file system 
// 
// 1. Load and parse the JSON data
// 2. Change the name and age property using info 
// 3. Stringify the changed object and overwrite the original data 
// 4. Test your work by viewing data in the JSON file 

const { Console } = require('console');
const fs = require('fs'); 

const dataBuffer = fs.readFileSync('2-json.json'); 
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON); 
data.name = "Haoxiang Gao";
data.age = 32; 

const newData = JSON.stringify(data); 
fs.writeFileSync('2-json.json',newData)

// you can rewrite this
// const name = app.name;
// const version = app.version;
// const type = app.type;

