import { JOIN } from './Ming'
import Vue from 'vue'

export default {
  cut(state) {
    clearInterval(state.time)
    state.time=setInterval(() => {
      state.num--
    }, 1000);
  },
  add(state,count) {
    clearInterval(state.time)       //mutations可以传参数，如果需要传多个参数，就直接传一个对象
    state.num+=count
  },
  [JOIN](state) {
    Vue.set(state.wares[0],'base','这是个手机')
  },
  dele(state) {
    Vue.delete(state.wares[0],'base')
  },
  changeName(state) {
    state.wares[3].name = '手柄'
  }
}