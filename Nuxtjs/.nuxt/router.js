import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _79e86e9e = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _5f55d50a = () => interopDefault(import('..\\pages\\Jokes\\index.vue' /* webpackChunkName: "pages/Jokes/index" */))
const _04ba955c = () => interopDefault(import('..\\pages\\todo.vue' /* webpackChunkName: "pages/todo" */))
const _77f00e50 = () => interopDefault(import('..\\pages\\Jokes\\_id\\index.vue' /* webpackChunkName: "pages/Jokes/_id/index" */))
const _3a78b914 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _79e86e9e,
    name: "about"
  }, {
    path: "/Jokes",
    component: _5f55d50a,
    name: "Jokes"
  }, {
    path: "/todo",
    component: _04ba955c,
    name: "todo"
  }, {
    path: "/Jokes/:id",
    component: _77f00e50,
    name: "Jokes-id"
  }, {
    path: "/",
    component: _3a78b914,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
