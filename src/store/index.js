import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './Module/moduleA'

Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  state: {
    num: 24*4*3600+7*3600+46*60,
    time: '',
    wares: [
      {name:'手机',price:5000,rest:200},
      {name:'手电筒',price:20,rest:2000},
      {name:'手套',price:10,rest:2000},
      {name:'手提电脑',price:3000,rest:20},
    ]
  },
  mutations,
  getters,
  actions,
  modules: {
    a: moduleA,
  }
})

export default store