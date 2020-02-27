<template>
  <div id="mine">
    <h1>这是我的</h1>
    <h2>现在正在促销，还剩下<span class="numColor">{{ $store.state.num }}</span>秒</h2>
    <Jiajian/>
    <el-form :model="mlist" label-width="80px" label-suffix=":">
      <el-form-item size="small" class="soso">
        <el-input placeholder="请输入歌手姓名" v-model="mlist.w"></el-input>
        <el-button @click="searchSong">搜索</el-button>
      </el-form-item>
    </el-form>
    <div id="song">
      <ul>
        <li v-for="(value,index) in song" :key="index">{{ index+1 }}:{{ value.songname }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mine',
  data() {
    return {
      mlist: {
        w: '',
      },
      song: []
    }
  },
  methods: {
    searchSong() {
      this.axios.get('/soqq/fcgi-bin/client_search_cp',{
        params:{
          w: this.mlist.w,
          n: 20,
          p: 1,
          format: 'json', 
        },
      }).then(({data:{data}}) => {
        const {song} = data
        const {list=[]} = song
        this.song = list
        console.log(this.song)
      }).catch(error => {
        console.log(error)
      })
    },
  },
  components: {
    Jiajian: () => import('../Common/jiajian')
  },
}
</script>

<style>
  #mine {
    background-color: slateblue;
    list-style: none;
  }
  .el-form {
    margin-top: 20px;
  }
  .el-input {
    width: 200px;
  }
  .el-form-item label {
    color: bisque;
  }
  #song li {
    text-align: center;
  }
  .soso .el-form-item__content{
    display: flex;
    flex-wrap: nowrap;
    align-content: space-around;
  }
  .soso .el-input {
    flex: 3;
    display: block;
    margin-right: 20px;
  }
  .soso .el-button {
    flex: 1;
    display: block;
    margin-right: 80px;
  }
</style>