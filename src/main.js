// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { createRouter } from './router/index.js'
import { createStore } from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.mixin({
  beforeMount () {
    const { asyncData } = this.$options
    if (asyncData) {
      this.dataPromise = asyncData({
        store: this.$store
      })
    }
  }
})
export function createApp () {
  const router = createRouter()
  const store = createStore()

  Vue.use(ElementUI)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
