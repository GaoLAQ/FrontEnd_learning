const fs = require('fs');
const chalk = require('chalk')

const getNotes = function(msg){
  return msg
}

const addNote = function (title, body) {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(item => {return item.title === title})
    if (duplicateNotes.length === 0){
      notes.push({
      title: title, 
      body: body
    })
    saveNotes(notes)
    console.log(chalk.inverse('New note added'))
  } else {
    console.log(chalk.inverse("Note title taken!!!"))
  }
}

const removeNotes = function (title){
  const notes = loadNotes()
  console.log(title)
  const newNotes = notes.filter(item => item.title !== title)
  saveNotes(newNotes)

  // simple just compare the length before deleting or after deleting, we can detect over deleting and give warning 
  if (notes.length > newNotes.length){
    console.log(chalk.green.inverse("Note Removed"))
  } else {
    console.log(chalk.red.inverse("Note already deleted"))
  }
}

const saveNotes = function (notes){
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function (){
  try {
    const dataBuffer = fs.readFileSync('notes.json'); 
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON)
  } catch(e){
    return [] // if error, we output [];
  }
}

module.exports= {
  getNotes: getNotes, 
  addNote: addNote, 
  removeNotes: removeNotes
}