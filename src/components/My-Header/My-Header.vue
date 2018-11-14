<template>
  <header class="header">
    <div class="header-left">
      <a class="header-item" @click="goBack">
        <i class="icon-back"></i>
      </a>
    </div>
    <div class="header-middle">
      <div class="header-title">{{title}}</div>
    </div>
    <div class="header-right" >
      <a class="header-item" @click="toSearchPage(isHeaderRightExist)">
        <i class="icon" :class="isHeaderRightExist?'icon-search':'icon-none'"></i>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'My-Header',
  props: {
    title: {
      type: String,
      default: '这里是title'
    },
    isHeaderRightExist: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    toSearchPage (flag) {
      if (flag) {
        this.$router.push({
          name: 'search'
        })
      }
    }
  }
}
</script>

<style scoped>
  @import './My-Header.css';
</style>
