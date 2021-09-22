import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AddTodo: () => import('../..\\components\\AddTodo.vue' /* webpackChunkName: "components/add-todo" */).then(c => wrapFunctional(c.default || c)),
  AppHeader: () => import('../..\\components\\AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => wrapFunctional(c.default || c)),
  FilterTodo: () => import('../..\\components\\FilterTodo.vue' /* webpackChunkName: "components/filter-todo" */).then(c => wrapFunctional(c.default || c)),
  Joke: () => import('../..\\components\\Joke.vue' /* webpackChunkName: "components/joke" */).then(c => wrapFunctional(c.default || c)),
  SearchJokes: () => import('../..\\components\\SearchJokes.vue' /* webpackChunkName: "components/search-jokes" */).then(c => wrapFunctional(c.default || c)),
  Todo: () => import('../..\\components\\todo.vue' /* webpackChunkName: "components/todo" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
