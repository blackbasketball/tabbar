<template>
  <div id="shop">
    <h1>购物车</h1>
    <h2>现在正在想念，还剩下<span class="numColor">{{ $store.state.num }}</span>秒</h2>
    <Jiajian/>
    <div id="exchange">
      <el-form :model="list" label-suffix=":" label-width="30%">
        <el-form-item label="账号" size="small">
          <el-input placeholder="请输入账号" v-model="list.s"></el-input>
        </el-form-item>
        <el-form-item label="密码" size="small">
          <el-input placeholder="请输入密码" v-model="list.type"></el-input>
        </el-form-item>
        <el-form-item size="small">
          <el-button @click="getImg">获取歌手图片</el-button>
        </el-form-item>
      </el-form>
      <div class="singImg">
        <img :src="list.picUrl" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop',
  data() {
    return {
      list: {
        s: '',
        type: '100',
        picUrl: ''
      }
    }
  },
  // created() {
  //   this.axios.defaults.baseURL = 'http://music.163.com'
  // },
  methods: {
    getImg() {
      this.axios.get('/apis/api/search/get/web',{
        params: {
          s: this.list.s,
          type: this.list.type
        },
      }).then( ({data:{result:{artists=[]}}}) => {
        const {picUrl} = artists[0]
        //console.log(picUrl)
        this.list.picUrl = picUrl
        console.log(this.list.picUrl)
      }).catch(error => {
        console.log(error)
        console.log('请求失败了')
      })
    }
  },
  components: {
    Jiajian: () => import('../Common/jiajian')
  },
}
</script>

<style>
  #shop {
    background-color: salmon;
    text-align: center;
  }
  #exchange .el-form-item {
    text-align: left;
  }
  #exchange .el-input{
    width: 200px;
  }
  .singImg img{
    margin: 30px auto;
    width: 400px;
    height: auto;
    display: block;
  }
</style>