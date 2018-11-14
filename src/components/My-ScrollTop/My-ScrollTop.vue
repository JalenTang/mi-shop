<template>
    <div class="go-top" v-show="toTopShow" @click="toTop">
        <img src="../../assets/images/top.png">
    </div>
</template>

<script>
export default {
  name: 'My-ScrollTop',
  data () {
    return {
      scrollTop: 0,
      toTopShow: false
    }
  },
  methods: {
    getScroll () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // 滚动距离>=700出现
      this.toTopShow = this.scrollTop >= 700
    },
    toTop () {
      // 回到顶部
      document.body.scrollTop = document.documentElement.scrollTop = 0
    }
  },
  // 挂载
  mounted () {
    window.addEventListener('scroll', this.getScroll)
  },
  // 销毁
  destroyed () {
    window.removeEventListener('scroll', this.getScroll)
  }
}
</script>

<style scoped>
  @import "My-ScrollTop.css";
</style>
