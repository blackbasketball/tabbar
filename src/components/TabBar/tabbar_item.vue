<template>
  <div class="tab-item"
       :style="spanColor"
       @click="change">
    <slot name="item-i">
      <i>✨</i>
    </slot>
    <slot name="item-span">
      <span>首页</span>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'tabbar_item',
  props: {
    path: String,
  },
  // watch: {
  //   $route (to,form){
  //     console.log(to.path)
  //   }
  // },
  computed: {
    actived () {
      return this.$route.path.indexOf(this.path)
    },
    spanColor () {
      return this.actived ? {}: { color: 'pink' }
    }
  },
  methods: {
    change () { 
      this.$router.push(this.path)
    }
  },
}
</script>

<style>
.tab-item {
  flex: 1;
  height: 49px;
  color: #aaa;
}
.tab-item i {
  display: block;
  font-style: normal;
}
</style>