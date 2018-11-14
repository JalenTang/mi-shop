<template>
  <div class="app-init">
      <header class="header-wrapper">
        <form action="" class="header-search">
          <div class="header-logo">
            <img src="../../assets/images/mi.png" width="25px">
          </div>
          <div class="header-input" @click="goSearch">
            <img src="../../assets/images/search.png">
            <input type="text" placeholder="搜索商品名称">
          </div>
          <div class="header-center" @click="goUser">
            <img src="../../assets/images/user.png" width="25px">
          </div>
        </form>
        <nav class="header-menu">
          <ul class="tabs">
            <li class="tab" v-for="(item, index) in tabNames" :key="index" @click="changeTab(index)">
              <span :class="{ tabRed: index === num }">{{ item }}</span>
            </li>
          </ul>
        </nav>
      </header>
      <div class="menu-wrapper">
        <!--推荐页-->
        <div v-show="0 === num" class="content">
          <div class="recommend-content">
            <mt-swipe :auto="0" class="swipe-container">
              <mt-swipe-item v-for="(item, index) in recommend.swipeImages" :key="index" class="swipe-img">
                <router-link :to="{name: 'detail', params:{id: item.id}}">
                  <img :src="item.src">
                </router-link>
              </mt-swipe-item>
            </mt-swipe>
            <div class="nav-cells">
              <ul>
                <li v-for="(item, index) in recommend.navCellsImages" :key="index" class="nav-cell">
                  <router-link :to="{name: 'about'}">
                    <img :src="item.src">
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="divider-line"></div>
            <div class="image-area-one">
              <router-link :to="{name: 'detail', params:{id: 1003}}">
                <img src="../../../static/server/recommend/images/main-image1.png">
              </router-link >
              <router-link :to="{name: 'detail', params:{id: 3001}}">
                <img src="../../../static/server/recommend/images/main-image2.png">
              </router-link>
              <router-link :to="{name: 'detail', params:{id: 2001}}">
                <img src="../../../static/server/recommend/images/main-image3.png">
              </router-link>
            </div>
            <div class="divider-line"></div>
            <div class="image-area-two">
              <router-link :to="{name: 'detail', params:{ id: 1004}}">
                <img src="../../../static/server/recommend/images/main-image4.png">
              </router-link>
            </div>
            <div class="divider-line"></div>
            <div class="image-area-three">
              <router-link :to="{name: 'detail', params:{id: 1005}}">
                <img src="../../../static/server/recommend/images/main-image5.png">
              </router-link>
            </div>
            <div class="divider-line2"></div>
            <div class="shop-items">
              <div class="shop-item-box">
                <div class="shop-item" v-for="(item,index) in recommend.shopItems" :key="index">
                  <div class="item-img">
                    <router-link :to="{name: 'detail', params:{id: item.id}}">
                      <img v-lazy="item.src" >
                    </router-link>
                  </div>
                  <div class="item-info">
                    <p class="name">{{ item.name }}</p>
                    <p class="brief">{{ item.brief }}</p>
                    <p class="price">
                      <span class="small">￥</span>{{ item.price }}
                      <span class="small">起</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--手机页-->
        <div v-show="1 === num" class="content">
          <div class="content-in">
            <mt-swipe :auto="0" class="swipe-container">
              <mt-swipe-item v-for="(item, index) in phone.swipeImages" :key="index" class="swipe-img">
                <router-link :to="{name: 'detail', params:{id: item.id}}">
                  <img :src="item.src">
                </router-link>
              </mt-swipe-item>
            </mt-swipe>
            <div class="divider-line"></div>
            <div class="area-one">
              <div class="new-sale">
                <img src="../../assets/images/new-sale.jpg">
              </div>
              <div class="new-prod">
                <router-link :to="{name: 'detail', params:{id: 1007}}">
                  <img src="../../../static/server/phone/images/new-prod.jpg">
                </router-link>
              </div>
            </div>
            <div class="divider-line"></div>
            <div class="area-two">
              <div class="hot-sale">
                <img src="../../assets/images/hot-sale.jpg">
              </div>
              <div class="shop-items">
                <div class="shop-item-box">
                  <div class="shop-item" v-for="(item,index) in phone.shopItems" :key="index">
                    <div class="item-img">
                      <router-link :to="{name: 'detail', params:{id: item.id}}">
                        <img v-lazy="item.src" >
                      </router-link>
                    </div>
                    <div class="item-info">
                      <p class="name">{{ item.name }}</p>
                      <p class="brief">{{ item.brief }}</p>
                      <p class="price">
                        <span class="small">￥</span>{{ item.price }}
                        <span class="small">起</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--电视页-->
        <div v-show="2 === num" class="content">
          <div class="content-in">
            <mt-swipe :auto="0" class="swipe-container">
              <mt-swipe-item v-for="(item, index) in television.swipeImages" :key="index" class="swipe-img">
                <router-link :to="{name: 'detail', params:{id: item.id}}">
                  <img :src="item.src">
                </router-link>
              </mt-swipe-item>
            </mt-swipe>
            <div class="divider-line"></div>
            <div class="area-one">
              <div class="new-sale">
                <img src="../../assets/images/new-sale.jpg">
              </div>
              <div class="new-prod">
                <router-link :to="{name: 'detail', params:{id: 2002}}">
                  <img src="../../../static/server/television/images/new-prod.jpg">
                </router-link>
              </div>
            </div>
            <div class="divider-line"></div>
            <div class="area-two">
              <div class="hot-sale">
                <img src="../../assets/images/hot-sale.jpg">
              </div>
              <div class="shop-items">
                <div class="shop-item-box">
                  <div class="shop-item" v-for="(item,index) in television.shopItems" :key="index">
                    <div class="item-img">
                      <router-link :to="{name: 'detail', params:{id: item.id}}">
                        <img v-lazy="item.src" >
                      </router-link>
                    </div>
                    <div class="item-info">
                      <p class="name">{{ item.name }}</p>
                      <p class="brief">{{ item.brief }}</p>
                      <p class="price">
                        <span class="small">￥</span>{{ item.price }}
                        <span class="small">起</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--智能页-->
        <div v-show="3 === num" class="content">
          <div class="content-in">
            <mt-swipe :auto="0" class="swipe-container">
              <mt-swipe-item v-for="(item, index) in intel.swipeImages" :key="index" class="swipe-img">
                <router-link :to="{name: 'detail', params:{id: item.id}}">
                  <img :src="item.src">
                </router-link>
              </mt-swipe-item>
            </mt-swipe>
            <div class="mid-list">
              <ul class="mid-list-in">
                <li v-for="(item, index) in intel.intelLists" :key="index">
                  <router-link :to="{name: 'about'}">
                    <img :src="item.src">
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="divider-line"></div>
            <div class="area-two">
              <div class="hot-sale">
                <img src="../../assets/images/hot-sale2.jpg">
              </div>
              <div class="shop-items">
                <div class="shop-item-box">
                  <div class="shop-item" v-for="(item,index) in intel.shopItems" :key="index">
                    <div class="item-img">
                      <router-link :to="{name: 'detail', params:{id: item.id}}">
                        <img v-lazy="item.src" >
                      </router-link>
                    </div>
                    <div class="item-info">
                      <p class="name">{{ item.name }}</p>
                      <p class="brief">{{ item.brief }}</p>
                      <p class="price">
                        <span class="small">￥</span>{{ item.price }}
                        <span class="small">起</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--笔记本-->
        <div v-show="4 === num" class="content">
          <div class="content-in">
            <mt-swipe :auto="0" class="swipe-container">
              <mt-swipe-item v-for="(item, index) in laptop.swipeImages" :key="index" class="swipe-img">
                <router-link :to="{name: 'detail', params:{id: item.id}}">
                  <img :src="item.src">
                </router-link>
              </mt-swipe-item>
            </mt-swipe>
            <div class="area-two">
              <div class="hot-sale">
                <img src="../../assets/images/hot-sale2.jpg">
              </div>
              <div class="shop-items">
                <div class="shop-item-box">
                  <div class="shop-item" v-for="(item,index) in laptop.shopItems" :key="index">
                    <div class="item-img">
                      <router-link :to="{name: 'detail', params:{id: item.id}}">
                        <img v-lazy="item.src" >
                      </router-link>
                    </div>
                    <div class="item-info">
                      <p class="name">{{ item.name }}</p>
                      <p class="brief">{{ item.brief }}</p>
                      <p class="price">
                        <span class="small">￥</span>{{ item.price }}
                        <span class="small">起</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--家电-->
        <div v-show="5 === num" class="content">
          <div class="content-in">
            <mt-swipe :auto="0" class="swipe-container">
              <mt-swipe-item v-for="(item, index) in household.swipeImages" :key="index" class="swipe-img">
                <router-link :to="{name: 'detail', params:{id: item.id}}">
                  <img :src="item.src">
                </router-link>
              </mt-swipe-item>
            </mt-swipe>
            <div class="mid-list">
              <ul class="mid-list-in">
                <li v-for="(item, index) in household.householdLists" :key="index">
                  <router-link :to="{name: 'about'}">
                    <img :src="item.src">
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="divider-line"></div>
            <div class="area-two">
              <div class="hot-sale">
                <img src="../../assets/images/hot-sale3.jpg">
              </div>
              <div class="shop-items">
                <div class="shop-item-box">
                  <div class="shop-item" v-for="(item,index) in household.shopItems" :key="index">
                    <div class="item-img">
                      <router-link :to="{name: 'detail', params:{id: item.id}}">
                        <img v-lazy="item.src" >
                      </router-link>
                    </div>
                    <div class="item-info">
                      <p class="name">{{ item.name }}</p>
                      <p class="brief">{{ item.brief }}</p>
                      <p class="price">
                        <span class="small">￥</span>{{ item.price }}
                        <span class="small">起</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--生活周边-->
        <div v-show="6 === num" class="content">
          <div class="content-in">
            <mt-swipe :auto="0" class="swipe-container">
              <mt-swipe-item v-for="(item, index) in life.swipeImages" :key="index" class="swipe-img">
                <router-link :to="{name: 'detail', params:{id: item.id}}">
                  <img :src="item.src">
                </router-link>
              </mt-swipe-item>
            </mt-swipe>
            <div class="mid-list">
              <ul class="mid-list-in">
                <li v-for="(item, index) in life.lifeLists" :key="index">
                  <router-link :to="{name: 'about'}">
                    <img :src="item.src">
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="divider-line"></div>
            <div class="area-two">
              <div class="hot-sale">
                <img src="../../assets/images/hot-sale2.jpg">
              </div>
              <div class="shop-items">
                <div class="shop-item-box">
                  <div class="shop-item" v-for="(item,index) in life.shopItems" :key="index">
                    <div class="item-img">
                      <router-link :to="{name: 'detail', params:{id: item.id}}">
                        <img v-lazy="item.src" >
                      </router-link>
                    </div>
                    <div class="item-info">
                      <p class="name">{{ item.name }}</p>
                      <p class="brief">{{ item.brief }}</p>
                      <p class="price">
                        <span class="small">￥</span>{{ item.price }}
                        <span class="small">起</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--影音娱乐-->
        <div v-show="7 === num" class="content">
          <div class="content-in">
            <mt-swipe :auto="0" class="swipe-container">
              <mt-swipe-item v-for="(item, index) in entertain.swipeImages" :key="index" class="swipe-img">
                <router-link :to="{name: 'detail', params:{id: item.id}}">
                  <img :src="item.src">
                </router-link>
              </mt-swipe-item>
            </mt-swipe>
            <div class="area-two">
              <div class="hot-sale">
                <img src="../../assets/images/hot-sale4.jpg">
              </div>
              <div class="shop-items">
                <div class="shop-item-box">
                  <div class="shop-item" v-for="(item,index) in entertain.shopItems" :key="index">
                    <div class="item-img">
                      <router-link :to="{name: 'detail', params:{id: item.id}}">
                        <img v-lazy="item.src" >
                      </router-link>
                    </div>
                    <div class="item-info">
                      <p class="name">{{ item.name }}</p>
                      <p class="brief">{{ item.brief }}</p>
                      <p class="price">
                        <span class="small">￥</span>{{ item.price }}
                        <span class="small">起</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      tabNames: ['推荐', '手机', '电视', '智能', '笔记本', '家电', '生活周边', '影音娱乐'],
      num: 0,
      recommend: {
        swipeImages: [],
        navCellsImages: [],
        shopItems: []
      },
      phone: {
        swipeImages: [],
        shopItems: []
      },
      television: {
        swipeImages: [],
        shopItems: []
      },
      intel: {
        swipeImages: [],
        intelLists: [],
        shopItems: []
      },
      laptop: {
        swipeImages: [],
        shopItems: []
      },
      household: {
        swipeImages: [],
        householdLists: [],
        shopItems: []
      },
      life: {
        swipeImages: [],
        lifeLists: [],
        shopItems: []
      },
      entertain: {
        swipeImages: [],
        shopItems: []
      }
    }
  },
  methods: {
    changeTab (index) {
      this.num = index
    },
    goUser () {
      this.$router.push({name: 'user'})
    },
    goSearch () {
      this.$router.push({name: 'search'})
    }
  },

  // 操作数据
  created () {
    // 访问服务器文件，应该把 json文件放在最外层的static文件夹，这个文件夹是vue-cli内置服务器向外暴露的静态文件夹
    // 请求推荐页
    this.$axios.all([
      this.$axios.get('./static/server/recommend/getSwipes.json'),
      this.$axios.get('./static/server/recommend/getShopItems.json'),
      this.$axios.get('./static/server/recommend/getNavImages.json')
    ])
      .then(this.$axios.spread((res1, res2, res3) => {
        this.recommend.swipeImages = res1.data.message
        this.recommend.shopItems = res2.data.message
        this.recommend.navCellsImages = res3.data.message
      }))
    // 请求手机页
    this.$axios.all([
      this.$axios.get('./static/server/phone/getSwipes.json'),
      this.$axios.get('./static/server/phone/getShopItems.json')
    ])
      .then(this.$axios.spread((res1, res2) => {
        this.phone.swipeImages = res1.data.message
        this.phone.shopItems = res2.data.message
      }))
    // 请求电视页
    this.$axios.all([
      this.$axios.get('./static/server/television/getSwipes.json'),
      this.$axios.get('./static/server/television/getShopItems.json')
    ])
      .then(this.$axios.spread((res1, res2) => {
        this.television.swipeImages = res1.data.message
        this.television.shopItems = res2.data.message
      }))
    // 请求智能页
    this.$axios.all([
      this.$axios.get('./static/server/intel/getSwipes.json'),
      this.$axios.get('./static/server/intel/getIntelLists.json'),
      this.$axios.get('./static/server/intel/getShopItems.json')
    ])
      .then(this.$axios.spread((res1, res2, res3) => {
        this.intel.swipeImages = res1.data.message
        this.intel.intelLists = res2.data.message
        this.intel.shopItems = res3.data.message
      }))
    // 请求笔记本页
    this.$axios.all([
      this.$axios.get('./static/server/laptop/getSwipes.json'),
      this.$axios.get('./static/server/laptop/getShopItems.json')
    ])
      .then(this.$axios.spread((res1, res2) => {
        this.laptop.swipeImages = res1.data.message
        this.laptop.shopItems = res2.data.message
      }))
    // 请求家电页
    this.$axios.all([
      this.$axios.get('./static/server/household/getSwipes.json'),
      this.$axios.get('./static/server/household/getHouseholdLists.json'),
      this.$axios.get('./static/server/household/getShopItems.json')
    ])
      .then(this.$axios.spread((res1, res2, res3) => {
        this.household.swipeImages = res1.data.message
        this.household.householdLists = res2.data.message
        this.household.shopItems = res3.data.message
      }))
    // 请求生活周边页
    this.$axios.all([
      this.$axios.get('./static/server/life/getSwipes.json'),
      this.$axios.get('./static/server/life/getLifeLists.json'),
      this.$axios.get('./static/server/life/getShopItems.json')
    ])
      .then(this.$axios.spread((res1, res2, res3) => {
        this.life.swipeImages = res1.data.message
        this.life.lifeLists = res2.data.message
        this.life.shopItems = res3.data.message
      }))
    // 请求影音娱乐页
    this.$axios.all([
      this.$axios.get('./static/server/entertain/getSwipes.json'),
      this.$axios.get('./static/server/entertain/getShopItems.json')
    ])
      .then(this.$axios.spread((res1, res2) => {
        this.entertain.swipeImages = res1.data.message
        this.entertain.shopItems = res2.data.message
      }))
  }
}
</script>

<style scoped>
  @import "Home.css";
</style>
