const reverseString = require('./reverseString.js'); 
test('reverseString function exists', ()=>{
  expect(reverseString).toBeDefined(); 
})

test('Hello can be reverseable',()=>{
  expect(reverseString('Hello')).toEqual('olleH')
})