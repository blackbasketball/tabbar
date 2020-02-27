export default {
  change(context,payload) {
    new Promise((reslove,reject) => {
      setTimeout(()=> {
        context.commit('changeName')
        console.log(payload)
        reslove('改变结束')
      },3000)
    }).then(res => {
      console.log(res)
    })
  }
}