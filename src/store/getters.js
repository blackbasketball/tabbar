export default {
  expensive(state) {
    return state.wares.filter(a => a.price>=1000)
  }
}