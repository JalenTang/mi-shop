<template>
  <div class="user-in">
    <div class="user-header">
      <div class="header-in" @click="login">
        <div class="img">
          <img src="../../assets/images/user-header.png">
        </div>
        <div class="name">登录/注册</div>
      </div>
    </div>
    <div class="user-order">
      <div class="order-title">
        <div class="my-order">我的订单</div>
        <div class="order-list">
          <router-link :to="{name: 'about'}">全部订单</router-link>
          <i class="more"></i>
        </div>
      </div>
      <ul class="order-items">
        <li class="dfk">
          <router-link :to="{name: 'about'}">
            <div class="icon"></div>
            <span>待付款</span>
          </router-link>
        </li>
        <li class="dsh">
          <router-link :to="{name: 'about'}">
            <div class="icon"></div>
            <span>待收货</span>
          </router-link>
        </li>
        <li class="thx">
          <router-link :to="{name: 'about'}">
            <div class="icon"></div>
            <span>退换修</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="user-items">
      <div class="blank-line"></div>
      <ul class="item">
        <li class="member">
          <router-link :to="{name: 'about'}">
            <span>会员中心</span>
            <i class="more"></i>
          </router-link>
        </li>
        <li class="wallet">
          <router-link :to="{name: 'about'}">
            <span>我的优惠</span>
            <i class="more"></i>
          </router-link>
        </li>
      </ul>
      <div class="blank-line"></div>
      <ul class="item">
        <li class="service">
          <router-link :to="{name: 'about'}">
            <span>服务中心</span>
            <i class="more"></i>
          </router-link>
        </li>
        <li class="mi-home">
          <router-link :to="{name: 'about'}">
            <span>小米之家</span>
            <i class="more"></i>
          </router-link>
        </li>
      </ul>
      <div class="blank-line"></div>
      <ul class="item">
        <li class="f-code">
          <router-link :to="{name: 'about'}">
            <span>F码通道</span>
            <i class="more"></i>
          </router-link>
        </li>
      </ul>
      <div class="blank-line"></div>
      <ul class="item">
        <li class="setting">
          <router-link :to="{name: 'about'}">
            <span>设置</span>
            <i class="more"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  methods: {
    login () {
      this.$router.push({name: 'about'})
    }
  }
}
</script>

<style scoped>
  @import "User.css";
</style>
