var userOne = {
    email:'ryu@ninjas.com', 
    name:'Ryu', 
    login(){
        console.log(this.email,'has logged in')
    },
    logout(){
        console.log(this.email, 'has logged out')
    }
}

console.log(userOne.name)
console.log(userOne.login())

// 总结：创立一个object， 在object 中插入method

// if we update property 
userOne.name = 'Yoshi'
console.log(userOne)
console.log(userOne['email'])

// add method in object 
userOne.logInfo = function loginfo(){
    console.log(this.name, 'add method for info')
}

console.log(userOne)

// 
var userOne ={
}

var userTwo ={
}

var userThree = {

}

// 我们要是generate class repeatly， 我们可以create class
// class 相当于模版

