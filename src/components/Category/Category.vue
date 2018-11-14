<template>
  <div class="category" >
    <div class="list-navbar" >
      <ul >
        <li v-for="(item, index) in listNames" :key="index" :class="{active: index === num}" @click="changeList(index)">
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
    <div class="list-content" ref="listContent">
      <div class="list-item" v-for="(item, index) in listNames" :key="index">
        <div class="item-image">
          <router-link :to="{name: 'detail', params:{id: 1003}}">
            <img src="../../assets/images/category.jpg">
          </router-link>
        </div>
        <div class="item-name">
          <span>{{ item }}</span>
        </div>
        <div class="item-content">
          <ul>
            <li v-for="(item, index) in listItems" :key="index">
              <router-link :to="{name: 'detail', params:{id: 1003}}">
                <img :src=item.src>
                <span>{{ item.name }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--<div class="list-blank"></div>-->
  </div>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {
      listNames: ['新品', '手机', '电视', '电脑', '家电', '路由', '出行', '穿戴', '智能', '电源', '健康', '灯具', '儿童', '箱包', '生活', '配件', '家装'],
      listItems: [
        {name: '小米8 青春版', src: 'https://i8.mifile.cn/b2c-mimall-media/51c53855defb28d558d71e02e0ae747d!120x120.png'},
        {name: '小米8 青春版', src: 'https://i8.mifile.cn/b2c-mimall-media/51c53855defb28d558d71e02e0ae747d!120x120.png'},
        {name: '小米8 青春版', src: 'https://i8.mifile.cn/b2c-mimall-media/51c53855defb28d558d71e02e0ae747d!120x120.png'},
        {name: '小米8 青春版', src: 'https://i8.mifile.cn/b2c-mimall-media/51c53855defb28d558d71e02e0ae747d!120x120.png'},
        {name: '小米8 青春版', src: 'https://i8.mifile.cn/b2c-mimall-media/51c53855defb28d558d71e02e0ae747d!120x120.png'},
        {name: '小米8 青春版', src: 'https://i8.mifile.cn/b2c-mimall-media/51c53855defb28d558d71e02e0ae747d!120x120.png'}
      ],
      num: 0,
      listHeight: ''
    }
  },
  methods: {
    changeList (index) {
      this.num = index
      window.scrollTo({
        top: this.listHeight / 17 * index,
        left: 0,
        behavior: 'auto'
      })
    },
    onScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.num = Math.ceil(scrollTop / (this.listHeight / 17))
    }
  },
  mounted () {
    this.listHeight = this.$refs.listContent.clientHeight
    this.$nextTick(() => {
      window.addEventListener('scroll', this.onScroll)
    })
  }
}
</script>

<style scoped>
@import "Category.css";
</style>
