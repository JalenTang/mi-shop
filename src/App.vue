<template>
  <div id="app">
    <div class="app-shell">
      <My-Header v-show="this.$route.meta.HeaderShow"
                 :title="this.$route.meta.title"
                 :isHeaderRightExist="this.$route.meta.isHeaderRightExist">
      </My-Header>
      <div class="app-init-wrapper">
        <router-view/>
      </div>
      <mt-tabbar v-model="selected" v-show="this.$route.meta.tabbarShow" fixed>
        <mt-tab-item id="home">
          <img @click="changeHash" slot="icon" src="./assets/images/home.png">
          首页
        </mt-tab-item>
        <mt-tab-item id="category">
          <img @click="changeHash" slot="icon" src="./assets/images/category.png">
          分类
        </mt-tab-item>
        <mt-tab-item id="shopcart" style="position: relative">
          <span class="badge" v-if="totalNumber !== 0">{{ totalNumber }}</span>
          <img @click="changeHash" slot="icon" src="./assets/images/shopcart.png">
          购物车
        </mt-tab-item>
        <mt-tab-item id="user">
          <img @click="changeHash" slot="icon" src="./assets/images/user.png">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
import EventBus from './EventBus'
import ShopcartHandle from './ShopcartHandle'

export default {
  name: 'App',
  data () {
    return {
      selected: 'home',
      totalNumber: 0
    }
  },
  methods: {
    changeHash () {
      this.$nextTick(function () {
        // 在点击操作结束Vue重新渲染DOM后执行事件
        this.$router.push({
          name: this.selected
        })
      })
    }
  },
  watch: {
    // 监听地址栏路由变化，改变底部导航条选中
    $route (to, from) {
      // console.log(to)
      this.selected = to.name
    }
  },
  // 监听地址栏直接输入路由，改变底部导航条选中
  beforeMount () {
    this.selected = this.$route.name
    console.log(this.selected)
  },
  created () {
    // 初始化totalNumber
    this.totalNumber = ShopcartHandle.getTotalNumber()

    EventBus.$on('addShopcart', data => {
      this.totalNumber = data
    })
    EventBus.$on('leaveShopcart', data => {
      this.totalNumber = data
    })
  }
}
</script>

<style scoped>
  @rem : 50/36rem;
  #app {
    position: static;
    font-family: Helvetica Neue, Tahoma, Arial, PingFangSC-Regular, Hiragino Sans GB, Microsoft Yahei, sans-serif;
    text-align: center;
    color: #3c3c3c;
    width: 100%;
    height: 100%;
  }

  #app .app-shell {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  #app .app-shell .app-init-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 100%;
    margin: 0 auto;
  }

  #app .app-shell .mint-tabbar {
    height: 55px;
    z-index: 9999;
  }

  .badge {
    display: block;
    position: absolute;
    top: 8%;
    left: 55%;
    min-width: 0.389rem;
    line-height: 0.389rem;
    height: 0.389rem;
    overflow: hidden;
    border-radius: 0.389rem;
    background: #ed4d41;
    color: #fff;
    font-size: 0.25rem;
    z-index: 100;
  }
</style>
