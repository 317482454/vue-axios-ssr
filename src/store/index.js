// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
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
  })
}
