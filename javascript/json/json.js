console.log('hello')

let book = {
  title:"Professional Javascript", 
  authors:[
    "Nicolas C. Zakas", 
    "Matt Frisbie"
  ],
  edition:4, 
  year: 2017
}
// Section 1: JSON.stringify as filter 
// json filter and indentation 
// behaves like cherry pick 
let jsonText = JSON.stringify(book,["title", "edition"])

let jsonTextCopy = JSON.stringify(book,(key, value)=>{
  switch(key){
    case "authors":
      return value.join(",")
    case "year":
      return 5000
    case "edition":
      return undefined
    default: 
    return value 
  }
})

console.log(jsonText)
console.log(jsonTextCopy, "this is a json")

// Section 2: JSON.STRINGIFY Indentation 
let jsonTextIndentation = JSON.stringify(book, null, 20)
console.log(jsonTextIndentation)
//// add speical character 
let jsonTextFormat = JSON.stringify(book, null, "--")
console.log(jsonTextFormat)


// Section 3: ToJSON()
let bookJSON = {
  title:"Professional Javascript", 
  authors:[
    "Nicolas C. Zakas", 
    "Matt Frisbie"
  ],
  edition:4, 
  year: 2017, 
  releaseDate: new Date(2017, 11, 1)
}



console.log('bookJSON', JSON.stringify(bookJSON))

// Section 4: JSON.parse(JSON.stringify())

let jsonFirstly = JSON.parse(JSON.stringify(bookJSON), (key, value)=> key == "releaseDate" ? new Date(value) : value)
console.log(jsonFirstly.releaseDate.getFullYear())

