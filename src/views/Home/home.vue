<template>
  <div id="home">
    <h1>首页</h1>
    <h2>现在正在促销，还剩下<span class="numColor">{{ $store.state.num }}</span>秒</h2>
    <h3>{{ $store.state.a.id }} <button @click="changeID">change</button></h3>
    <Jiajian/>
    <div class="art">
      <ul style="background-color:#edaf04;">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul style="background-color:#259900;">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul style="background-color:#871265;">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul style="background-color:#232488;">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'home',
  components: {
    Jiajian: () => import('../Common/jiajian')
  },
  methods: {
    ...mapMutations('a',[
      'changeID',
    ])
  },
}
</script>

<style>
#home {
  background-color: tomato;
}
.art ul {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 20px auto;
}
.art li {
  margin: 0 10px;
  flex: 1;
  height: 60px;
  background-color: khaki;
}
</style>

