const greet  = (name = 'User')=>{
  console.log(`Hello ${name}!`)
}

greet('Andrew') // will print: Hello, Andrew!

greet() // will print: Hello, User!