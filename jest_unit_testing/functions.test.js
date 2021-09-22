const functions = require('./functions'); 

// beforeEach(()=>initDatabase()); 
// afterEach(()=>closeDatabase()); 
const nameChecked = () => console.log('Checking Name...')

beforeAll(()=> initDatabase()); 
afterAll(()=> closeDatabase()); 

describe('Checking Name', () => {
  beforeEach(()=> nameChecked()); 

  test('User is Jeff', ()=>{
    const user = 'Jeff'; 
    expect(user).toBe('Jeff')
  })

  test('User is Karen', ()=>{
    const user = 'Karen'; 
    expect(user).toBe('Karen')
  })

})

const initDatabase = ()=> console.log('Database Initialized...'); 
const closeDatabase = ()=> console.log('Database Closed...')


test('Adds 2 + 2 to equal 4', ()=>{
  expect(functions.add(2,2)).toBe(4)
})

test('Adds 2 + 2 to not equal 4', ()=>{
  expect(functions.add(2,2)).not.toBe(5)
})


test('Should be null', ()=>{
  expect(functions.isNull()).toBeNull()
})

// toBeFalsy 
test('Should be falsy', ()=>{
  expect(functions.checkValue(null)).toBeFalsy();
})

//toEqual //instead of using toBe 
test('User should be Brad Bod Object', ()=>{
  expect(functions.createUser()).toEqual({
    firstName:'Brad',
    lastName:'Bob'
  });
})

//Less than and greater than 
test('Should be under 1600', ()=>{
  const load1 = 800; 
  const load2 = 700; 
  expect(load1 + load2).toBeLessThan(1600);
})

// Regrex
test('There is no I in team', ()=>{
  expect('team').not.toMatch(/I/);
})

// Contain
test('Admin should be in username',()=>{
  usernames = ['john', 'karen','admin']
  expect(usernames).toContain('admin');
})

//Working with async data 
test('User fetched name should be Leanne Graham',()=>{
  expect.assertions(1);
  return functions.fetchUser().then(
    data => {
      expect(data.name).toEqual('Leanne Graham')
    }
  )
  // number of assertions used 
})

//Working with async data 
test('User fetched name should be Leanne Graham Async and await data', async ()=>{
  expect.assertions(1);
  const data = await functions.fetchUser()
  expect(data.name).toEqual('Leanne Graham')
 
  // number of assertions used 
})