export default {
  namespaced: true,
  state: {
    id: '这是模块A的ID',
  },
  mutations: {
    changeID(state) {
      state.id = '这是模块A的新ID哈哈哈哈'
    }
  }
}