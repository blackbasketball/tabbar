<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <tabbar/>
  </div>
</template>

<script>
const tabbar = () =>import('./components/TabBar/tabBar')
export default {
  name: 'App',
  components: {
    tabbar,
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  #app {
    padding-bottom: 49px;
  }
  #app h1{
    text-align: center;
    color:blanchedalmond;
  }
  #app li {
    list-style: none;
  }
</style>
