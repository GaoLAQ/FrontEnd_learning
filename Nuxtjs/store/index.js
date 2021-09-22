import axios from "axios"; 
export const state = ()=> ({
  todo: []
})

export const mutations = {
  setTodo: (state, payload) => {
    state.todo = payload
  }, 
  newTodo: (state, payload) =>{
    state.todo.unshift(payload)
  }, 
  deleteTodo: (state, id)=>{
    state.todo = state.todo.filter( todo=> todo.id !==id)
  }, 
  updateTodo: (state, updTodo) => {
    const index = state.todo.findIndex( todo => todo.id === updTodo.id); 
    if (index !== -1){
      state.todo.splice(index,1, updTodo)
    }
  }
}

export const actions = {
  async fetchData({commit}){
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    commit('setTodo', res.data)
  }, 

  async addTodo({commit},title){
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {title, completed: false})
    commit("newTodo",res.data)
  }, 

  async delete({commit}, id){
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    commit("deleteTodo", id)
  }, 

  async filterTodo({commit}, e){
    const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
    console.log(e)
    console.log(limit)
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
    console.log(res.data)
    commit("setTodo", res.data)
  }, 

  async updateTodo({commit}, updTodo){
     const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`)
     commit('updateTodo', res.data)
  }
  
}

export const getters = {
  allTodos: (state)=> state.todo
}