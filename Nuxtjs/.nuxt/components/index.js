import { wrapFunctional } from './utils'

export { default as AddTodo } from '../../components/AddTodo.vue'
export { default as AppHeader } from '../../components/AppHeader.vue'
export { default as FilterTodo } from '../../components/FilterTodo.vue'
export { default as Joke } from '../../components/Joke.vue'
export { default as SearchJokes } from '../../components/SearchJokes.vue'
export { default as Todo } from '../../components/todo.vue'

export const LazyAddTodo = import('../../components/AddTodo.vue' /* webpackChunkName: "components/add-todo" */).then(c => wrapFunctional(c.default || c))
export const LazyAppHeader = import('../../components/AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => wrapFunctional(c.default || c))
export const LazyFilterTodo = import('../../components/FilterTodo.vue' /* webpackChunkName: "components/filter-todo" */).then(c => wrapFunctional(c.default || c))
export const LazyJoke = import('../../components/Joke.vue' /* webpackChunkName: "components/joke" */).then(c => wrapFunctional(c.default || c))
export const LazySearchJokes = import('../../components/SearchJokes.vue' /* webpackChunkName: "components/search-jokes" */).then(c => wrapFunctional(c.default || c))
export const LazyTodo = import('../../components/todo.vue' /* webpackChunkName: "components/todo" */).then(c => wrapFunctional(c.default || c))
