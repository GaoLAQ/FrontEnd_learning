// fs.writeFileSync can be overlap according to changes 

// const fs = require('fs')

// fs.writeFileSync('notes.txt','This file was created by node.js! My name is Haoxiang Gao'); 

// fs.appendFileSync('notes.txt',"Hello, I am appending message")
// this is provided by validator; validator is object; isEmail is a method;
const validator = require('validator'); 
const utils = require('./utils.js'); 
const notes = require('./notes.js'); 
const yargs = require('yargs'); 

// const sum = utils(4,-2)
// const sayHello = getNotes("Hello")
// console.log(sayHello)
// console.log(validator.isEmail('andrew@example.com'))
// console.log(validator.isURL('http://google.com'))

// if we delete the node modules folders, we cannot use validator, to recover it, we need npm install 

// Process.argv argument vectors 

// console.log(process.argv)
// use argv, we can find information we pass when we use node app.js "info"
// console.log(process.argv[2])

// const command = process.argv[2]

// if(command === "add"){
//   console.log('Adding note...')
// } else if (command ==="remove"){
//   console.log('Removing note!')
// }

// node app.js add --title="This is my title", it providing second argument, --title="This is my title"

// use "node app.js ...information node command to change code"
// console.log(process.argv) // ['C:\\Program Files\\nodejs\\node.exe','C:\\Users\\Haoxiang\\Nodejs_full-learning\\notes-app\\app.js']
// console.log(yargs.argv) // { _: [], '$0': 'app.js' } 

// yargs can parse the conditions 


// Task add, remove, read, list 
// Create add command 
yargs.command({
  command: 'add', 
  describe: 'Add a new note', 
  builder:{
    title:{
      describe: 'Note title', 
      demandOption: true, 
      type:'string'
    }, 
    body:{
      describe:"Note body here!", 
      demandOption: true, 
      type: 'string'
    }
  }, 
  handler: function(argv){
    notes.addNote(argv.title, argv.body)
  } 
})

// Create remove command
yargs.command ({
  command:'remove', 
  describe:'Remove a new note',
  handler: function(argv){
    notes.removeNotes(argv.title)
  }
})

// Read command 
yargs.command ({
  command:'read', 
  describe:'read a new note',
  handler: function(){
    console.log('reading a new note!')
  }
})

// Write command 
yargs.command ({
  command:'write', 
  describe:'write a new note',
  handler: function(){
    console.log('writting a new note!')
  }
})
// console.log(yargs.argv)
yargs.parse()
