<template>
  <div id="jiajian">
    <button @click="jia(10)">➕</button>
    <button @click="jian">➖</button>
    <button @click="jiaru">加入</button>
    <button @click="dele">删除</button>
    <button @click="changeN">改变</button>
    <h3>超过1000的商品有{{ $store.getters.expensive }}</h3>
  </div>
</template>

<script>
import { JOIN } from '../../store/Ming'
import { mapMutations,mapActions } from 'vuex'

export default {
  name: 'jiajian',
  methods: {
    // jia (count) {
    //   this.$store.commit('add',count)
    // },
    // jian () {
    //   this.$store.commit('cut')
    // },
    // jiaru () {
    //   this.$store.commit(JOIN)
    // },
    // shanchu () {
    //   this.$store.commit('dele')
    // }
    ...mapMutations({
      jian:'cut',
      jia: 'add',
      jiaru: JOIN,
    }),
    ...mapMutations([
      'dele',
    ]),
    // ...mapActions([
    //   'change',
    // ]),
    changeN() {
      this.$store.dispatch('change','改变进行中')
    },
  },
}
</script>

<style>
  #jiajian {
    text-align: center;
  }
  #jiajian button {
    background-color: powderblue;
  }
</style>