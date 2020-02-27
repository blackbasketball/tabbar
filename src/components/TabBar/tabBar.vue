<template>
  <div id="tabbar">
    <Item path="/home"></Item>
    <Item path="/goods">
      <i slot="item-i">👑</i>
      <span slot="item-span">商品</span>
    </Item>
    <Item path="/shopping">
      <i slot="item-i">⭐️</i>
      <span slot="item-span">购物车</span>
    </Item>
    <Item path="/mine">
      <i slot="item-i">❤️</i>
      <span slot="item-span">我的</span>
    </Item>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  components: {
    Item: () => import('./tabbar_item')
  },
  methods: {

  },
}
</script>

<style>
#tabbar {
  display: flex;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 6px rgba(0, 0, 0, 0.15);
}
</style>