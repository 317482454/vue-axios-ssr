# vue-axios-ssr

> A Vue.js project

 1. Vue在ssr模式需要注意第三方插件不一定支持，因为先在渲染node端，node是没有window对象，避免使用
    如果要使用先声明--》判断如果是客户端执行
``` bash
 let Btn  
 if (process.env.VUE_ENV === 'client') {  
   Btn = require('')  
 }  
 export default {  
   components: {  
     Btn  
   } 
```

 2. 请求接口操作
现在server.js里面创建路由
``` bash
app.get('/api/getMusic', (req, res) => {
  axios.get('http://www.sojson.com/api/qqmusic/8446666/json')
    .then(function (response) {
      res.json({list: response.data})
    })
    .catch(function (error) {
      console.log(error)
    })
})
```


vuex-->store    

     state: {
          musicList:[]
        },
        actions: {
          getMusic({ commit }) {
            return axios.get('http://localhost:8080/api/getMusic').then((res) => {
              commit('setMusic', res.data.list)
            })
          }
        },
        mutations: {
          setMusic (state, list) {
            state.musicList = list
          }
        }
vue组件使用先申明asyncData
 

    asyncData ({ store }) {
        return store.dispatch('getMusic')
      }
直接使用$store.state.musicList.data.playlist就行了

3. v-for里面使用方法：v-for="person in ppl('aib')" ，需要判断是否有值
ppl (tag) {
      return this.$store.state.musicList.data.playlist==''?[]:this.$store.state.musicList.data.playlist.filter(p => p.groups[tag])
    }

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


