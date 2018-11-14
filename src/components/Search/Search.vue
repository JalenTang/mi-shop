<template>
  <div class="search">
    <div class="search-header">
      <a @click="goBack" class="header-icon">
        <i class="icon-back"></i>
      </a>
      <div class="search-item">
        <input type="search" placeholder="搜索商品名称" autocomplete="off" v-model="searchVal">
      </div>
      <a :to="{name: 'search'}" class="header-icon">
        <i class="icon-search"></i>
      </a>
    </div>
    <div class="search-content">
      <div class="search-promotion">
        <div class="search-promotion-title">
          热门搜索
        </div>
        <div class="search-promotion-img">
          <img src="../../assets/images/search-promotion.jpg">
        </div>
      </div>
      <div class="search-key-list">
        <div class="result-list" v-for="(item, index) in searchList" :key="index">
          <router-link :to="{name: 'detail', params:{id: item.id}}">
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      searchVal: '',
      allSearchList: []
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  computed: {
    searchList () {
      let resultList = []
      for (let i = 0; i < this.allSearchList.length; i++) {
        if (this.searchVal) {
          if (this.allSearchList[i].name.replace(/\s*/g, '').search(this.searchVal.replace(/\s*/g, '')) !== -1) {
            resultList.push(this.allSearchList[i])
          }
        }
      }
      return resultList
    }
  },
  created () {
    this.$axios.get('./static/server/search/getAllSearchList.json')
      .then(res => {
        this.allSearchList = res.data.message
      })
      .catch(err => {
        console.log('获取数据失败' + err)
      })
  }
}
</script>

<style scoped>
  @import "Search.css";
</style>
