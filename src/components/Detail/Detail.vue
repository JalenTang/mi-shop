<template>
    <div class="detail-page">
      <div class="banner">
        <div @click="goBack" class="back" >
          <div class="back-in">
            <img src="../../assets/images/back.png" class="back-in-img" >
          </div>
        </div>
        <mt-swipe :auto="0" class="swipe-container">
          <mt-swipe-item v-for="(item, index) in bannerImages" :key="index" class="swipe-img">
            <img :src="item.src">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="content">
        <div class="product-info">
          <div class="product-info-name">
            <h3>{{ prodInfo.name}}</h3>
          </div>
          <div class="product-info-desc">
            <div class="product-info-desc-in">
              <span>{{ prodInfo.sale }}</span>{{prodInfo.desc}}
            </div>
          </div>
          <div class="product-info-price">
            <div class="product-info-price-in">
              <span class="current-price">￥{{prodInfo.currentPrice}}</span>
              <span class="origin-price" v-if="prodInfo.originPrice !== prodInfo.currentPrice">￥{{prodInfo.originPrice}}</span>
            </div>
          </div>
          <div class="product-info-parameters"  v-if="prodParams">
            <ul class="product-info-parameters-in">
              <li v-for="(item, index) in prodParams" :key="index" class="prod-param">
                <img :src="item.src" class="prod-param-image">
                <div class="prod-param-desc">{{ item.desc }}</div>
                <div class="prod-param-value">{{ item.value }}</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="product-sale" v-if="prodInfo.id < 2000">
          <div class="product-sale-on">
            <div class="sale">
              <span>促销</span>
              <span>赠品</span>
              <p>赠米粉卡，内含100元话费</p>
              <span class="more"></span>
            </div>
          </div>
          <div class="blank-line"></div>
        </div>
        <div class="product-exchange" v-if="prodInfo.id < 2000">
          <img src="../../assets/images/sale-exchange.jpg"  class="exchange-img">
        </div>
        <div class="product-choose">
          <div class="product-choose-in">
            <div class="product-choose-info">
              <span class="box-left">已选</span>
              {{prodInfo.chosen}}
              <span class="more"></span>
            </div>
            <div class="product-choose-address">
              <span class="box-left">送至</span>
              {{prodInfo.address}}
              <span>有现货</span>
              <span class="more"></span>
            </div>
            <div class="product-choose-service">
              <div class="service-desc">
                <div class="service-main">
                  <img src="../../assets/images/service.png" >
                  7天无理由退货
                </div>
                <div class="service-main">
                  <img src="../../assets/images/service.png" >
                  15天质量问题换货
                </div>
                <div class="service-main">
                  <img src="../../assets/images/service.png" >
                  365天保修
                </div>
              </div>
              <span class="more"></span>
            </div>
          </div>
        </div>
        <div class="blank-line"></div>
        <div class="product-images" v-for="(item, index) in prodImages" :key="index">
          <img :src="item.src" >
        </div>
      </div>
      <div class="footer">
        <div class="footer-in">
          <router-link :to="{name: 'home'}">
            <img src="../../assets/images/home.png">
            <span>首页</span>
          </router-link>
          <router-link :to="{name: 'shopcart'}" style="position: relative">
            <span class="badge" v-if="totalNumber !== 0">{{ totalNumber }}</span>
            <img src="../../assets/images/shopcart.png">
            <span>购物车</span>
          </router-link>
          <div class="addCart" @click="addShopcart">
            <span>加入购物车</span>
          </div>
        </div>
      </div>
      <My-ScrollTop/>
    </div>
</template>

<script>
import EventBus from '@/EventBus'
import ShopcartHandle from '@/ShopcartHandle'
export default {
  name: 'Detail',
  data () {
    return {
      prodInfo: {},
      bannerImages: [],
      prodParams: [],
      prodImages: [],
      totalNumber: 0
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    // 根据路由ID请求图片,配合路由守卫
    getDetailInfoById (id) {
      // 合并请求
      // 通过detailId拼接参数url，请求不同的detail页
      this.$axios.all([
        this.$axios.get('./static/server/' + id + '/getProdInfo.json'),
        this.$axios.get('./static/server/' + id + '/getProdBanner.json'),
        this.$axios.get('./static/server/' + id + '/getProdParam.json'),
        this.$axios.get('./static/server/' + id + '/getProdImages.json')
      ])
        .then(this.$axios.spread((res1, res2, res3, res4) => {
          this.prodInfo = res1.data.message
          this.bannerImages = res2.data.message
          this.prodParams = res3.data.message
          this.prodImages = res4.data.message
        }))
    },
    addShopcart () {
      this.totalNumber += 1
      this.$toast({
        message: '成功加入购物车',
        duration: 1000,
        position: 'middle',
        iconType: 'success'
      })
      EventBus.$emit('addShopcart', this.totalNumber)
      console.log(this.prodInfo.id)
      // 存储到本地
      ShopcartHandle.addGoods({
        id: this.prodInfo.id,
        num: 1
      })
    }
  },
  // 路由守卫
  beforeRouteUpdate (to, from, next) {
    console.log(to)
    this.getDetailInfoById(to.params.id)
    next()
  },
  // 处理数据
  created () {
    let id = this.$route.params.id
    this.getDetailInfoById(id)
    this.totalNumber = ShopcartHandle.getTotalNumber()
  }
}
</script>

<style scoped>
  @import "Detail.css";
</style>
