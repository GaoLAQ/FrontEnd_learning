const http = require('http'); 
const url = `http://api.weatherstack.com/current?access_key=4adc4535866a9ef0041ebc618c407ba2&query=45,-75`;
const server = http.createServer((req,res)=>{
  res.end("Hello, world")
})
const request = http.request(url, (response)=>{
  let data = ''
  response.on('data', (chunk)=>{
     data = data + chunk.toString()
  })
  response.on('end', ()=>{
    const body = JSON.parse(data)
    console.log(body)
  })
})

request.on('error', (error)=>{
  console.log('An error', error)
})

request.end()

const PORT = process.env.PORT || 3000
server.listen(PORT, ()=>{console.log(`Server is running at: http:\\localhost:${PORT}`)})