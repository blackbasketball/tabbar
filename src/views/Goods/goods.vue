<template>
  <div id="goods">
    <h1>商品</h1>
    <h2>现在正在促销，还剩下<span class="numColor">{{ $store.state.num }}</span>秒</h2>
    <Jiajian/>
    <ul>
      <li><img src="../../assets/img/food.png"
             alt=""></li>
      <li><img src="../../assets/img/home.png"
             alt=""></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'goods',
  components: {
    Jiajian: () => import('../Common/jiajian')
  },
}
</script>

<style>
#goods {
  background-color: crimson;
}
#goods li {
  width: 50%;
  margin: 10px auto;
  box-shadow: 2px 2px 8px rgba(30, 30, 30, 0.3);
}
#goods img {
  width: 100%;
  height: 200px;
  display: block;
}
</style>