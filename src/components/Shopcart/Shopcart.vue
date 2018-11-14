<template>
  <div>
    <div class="shopcart-content">
      <div class="content-in">
        <div class="cart-list">
          <ol>
            <li class="item" v-for="(item, index) in cartList" :key="index">
              <div class="item-check" :class="[item.isChecked?'checked':'unchecked']" @click="toggleChecked(item)"></div>
              <router-link class="item-image" :to="{name: 'detail', params: {id:item.id}}">
                <img v-lazy="item.imageSrc">
              </router-link>
              <div class="item-info">
                <p class="item-name">{{item.name}}</p>
                <div class="item-price">
                  <span>售价：</span>
                  <span>{{ item.price }}元</span>
                </div>
                <div class="item-num">
                  <div class="input-num" >
                    <div class="num-sub" @click="handleShopNum(item, false)">
                      <i class="icon-sub" :class="{active: item.number > 1}"></i>
                    </div>
                    <div class="num">
                      <span>{{ item.number }}</span>
                    </div>
                    <div class="num-add" @click="handleShopNum(item, true)">
                      <i class="icon-add" :class="{active: item.number < 10}"></i>
                    </div>
                  </div>
                  <div class="delete" @click="deleteItem(item)">
                    <i class="icon-delete"></i>
                  </div>
                </div>
              </div>
            </li>
          </ol>
          <div class="ui-line"></div>
        </div>
        <div class="recommend-box">
          <div class="recommend-top">
            <img src="../../assets/images/guess-like.jpg">
          </div>
          <div class="recommend-list">
            <div class="recommend-item" >
            <router-link :to="{name: 'detail', params:{id: '1008'}}">
              <div class="recommend-item-image">
                <img src="../../../static/server/shopcart/recommend-images/image1.jpg" alt="">
              </div>
              <div class="recommend-item-info">
                <div class="recommend-item-name">小米MIX 3 8GB+256G</div>
                <div class="recommend-item-price">￥3999</div>
              </div>
            </router-link>
          </div>
            <div class="recommend-item" >
              <router-link :to="{name: 'detail', params:{id: '1008'}}">
                <div class="recommend-item-image">
                  <img src="../../../static/server/shopcart/recommend-images/image1.jpg" alt="">
                </div>
                <div class="recommend-item-info">
                  <div class="recommend-item-name">小米MIX 3 8GB+256G</div>
                  <div class="recommend-item-price">￥3999</div>
                </div>
              </router-link>
            </div>
            <div class="recommend-item" >
              <router-link :to="{name: 'detail', params:{id: '1008'}}">
                <div class="recommend-item-image">
                  <img src="../../../static/server/shopcart/recommend-images/image1.jpg" alt="">
                </div>
                <div class="recommend-item-info">
                  <div class="recommend-item-name">小米MIX 3 8GB+256G</div>
                  <div class="recommend-item-price">￥3999</div>
                </div>
              </router-link>
            </div>
            <div class="recommend-item" >
              <router-link :to="{name: 'detail', params:{id: '1008'}}">
                <div class="recommend-item-image">
                  <img src="../../../static/server/shopcart/recommend-images/image1.jpg" alt="">
                </div>
                <div class="recommend-item-info">
                  <div class="recommend-item-name">小米MIX 3 8GB+256G</div>
                  <div class="recommend-item-price">￥3999</div>
                </div>
              </router-link>
            </div>
            <div class="recommend-item" >
              <router-link :to="{name: 'detail', params:{id: '1008'}}">
                <div class="recommend-item-image">
                  <img src="../../../static/server/shopcart/recommend-images/image1.jpg" alt="">
                </div>
                <div class="recommend-item-info">
                  <div class="recommend-item-name">小米MIX 3 8GB+256G</div>
                  <div class="recommend-item-price">￥3999</div>
                </div>
              </router-link>
            </div>
            <div class="recommend-item" >
              <router-link :to="{name: 'detail', params:{id: '1008'}}">
                <div class="recommend-item-image">
                  <img src="../../../static/server/shopcart/recommend-images/image1.jpg" alt="">
                </div>
                <div class="recommend-item-info">
                  <div class="recommend-item-name">小米MIX 3 8GB+256G</div>
                  <div class="recommend-item-price">￥3999</div>
                </div>
              </router-link>
            </div>
            <div class="recommend-item" >
              <router-link :to="{name: 'detail', params:{id: '1008'}}">
                <div class="recommend-item-image">
                  <img src="../../../static/server/shopcart/recommend-images/image1.jpg" alt="">
                </div>
                <div class="recommend-item-info">
                  <div class="recommend-item-name">小米MIX 3 8GB+256G</div>
                  <div class="recommend-item-price">￥3999</div>
                </div>
              </router-link>
            </div>
            <div class="recommend-item" >
              <router-link :to="{name: 'detail', params:{id: '1008'}}">
                <div class="recommend-item-image">
                  <img src="../../../static/server/shopcart/recommend-images/image1.jpg" alt="">
                </div>
                <div class="recommend-item-info">
                  <div class="recommend-item-name">小米MIX 3 8GB+256G</div>
                  <div class="recommend-item-price">￥3999</div>
                </div>
              </router-link>
            </div>
            <div class="recommend-item" >
              <router-link :to="{name: 'detail', params:{id: '1008'}}">
                <div class="recommend-item-image">
                  <img src="../../../static/server/shopcart/recommend-images/image1.jpg" alt="">
                </div>
                <div class="recommend-item-info">
                  <div class="recommend-item-name">小米MIX 3 8GB+256G</div>
                  <div class="recommend-item-price">￥3999</div>
                </div>
              </router-link>
            </div>
            <div class="recommend-item" >
              <router-link :to="{name: 'detail', params:{id: '1008'}}">
                <div class="recommend-item-image">
                  <img src="../../../static/server/shopcart/recommend-images/image1.jpg" alt="">
                </div>
                <div class="recommend-item-info">
                  <div class="recommend-item-name">小米MIX 3 8GB+256G</div>
                  <div class="recommend-item-price">￥3999</div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="shopcart-footer">
      <div class="footer-in">
        <div class="price-box">
          <span>共{{totalNumber}}件 金额：</span>
          <br>
          <span class="price-all">{{totalPrice}}</span>
          <span>元</span>
        </div>
        <router-link :to="{name: 'category'}" class="btn continue-buy">
          继续购物
        </router-link>
        <router-link :to="{name: 'about'}" class="btn">
          去结算
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script>
import EventBus from '@/EventBus'
import ShopcartHandle from '@/ShopcartHandle'
export default {
  name: 'Shopcart',
  data () {
    return {
      allGoodsList: [],
      allGoodsListId: [],
      cartList: [],
      totalPrice: 0,
      totalNumber: 0
    }
  },
  methods: {
    getChecked (item) {
      if (typeof item.isChecked === 'undefined') {
        this.$set(item, 'isChecked', true)
      }
    },
    getListChecked (itemList) {
      itemList.forEach((val) => {
        this.getChecked(val)
      })
      this.getTotal()
    },
    getTotal () {
      let totalPrice = 0
      let totalNumber = 0
      this.cartList.forEach((val) => {
        if (val.isChecked) {
          totalPrice += val.price * val.number
          totalNumber += val.number
        }
      })
      this.totalPrice = totalPrice
      this.totalNumber = totalNumber
    },
    handleShopNum (item, flag) {
      if (flag) { // 加
        item.number = item.number >= 10 ? item.number = 10 : item.number + 1
        if (item.number === 10) {
          this.$toast({
            message: '已达到最大购买数量',
            position: 'middle',
            iconType: 'warning'
          })
        }
      } else { // 减
        item.number = item.number <= 1 ? item.number = 1 : item.number - 1
      }
      this.getTotal()
      this.saveChange()
    },
    toggleChecked (item) {
      if (typeof item.isChecked === 'undefined') {
        this.$set(item, 'isChecked', true)
      } else {
        item.isChecked = !item.isChecked
      }
      this.getTotal()
    },
    deleteItem (item) {
      const index = this.cartList.indexOf(item)
      this.cartList.splice(index, 1)
      this.getTotal()
      this.saveChange()
    },
    saveChange () {
      let obj = {}
      this.cartList.forEach(val => {
        obj[val.id] = val.number
      })
      ShopcartHandle.saveGoodsList(obj)
    }
  },
  created () {
    // 获取整个商品列表allGoodsList: []
    this.$axios.get('./static/server/shopcart/getAllGoodsList.json')
      .then(res => {
        this.allGoodsList = res.data.goodsList
        for (let i = 0; i < this.allGoodsList.length; i++) {
          // 获取所有商品的id: []
          this.allGoodsListId.push(this.allGoodsList[i].id)
        }
        // console.log(this.allGoodsListId)
        // 获取选择的商品列表goodList: []
        let goodList = ShopcartHandle.getGoodsList()
        // 获取选择的商品列表的id: []
        let ids = Object.keys(goodList)
        // console.log(ids)
        for (let i = 0; i < ids.length; i++) {
          // 把选择的商品信息push购物车列表cartList
          this.cartList.push(this.allGoodsList[this.allGoodsListId.indexOf(Number(ids[i]))])
          // 修改购物车列表cartList里的商品的数量与购买的一致
          this.cartList[i].number = goodList[ids[i]]
        }
        // console.log(this.cartList)
        // 对每个商品添加isChecked属性
        this.getListChecked(this.cartList)
      })
      .catch(err => {
        console.log('获取商品清单失败', err)
      })
  },
  beforeRouteLeave (to, from, next) {
    EventBus.$emit('leaveShopcart', this.totalNumber)
    next()
  }
}
</script>

<style scoped>
  @import "Shopcart.css";
</style>
