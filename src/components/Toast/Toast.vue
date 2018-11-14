<template>
    <transition name="fade">
      <div class="toast" v-show="visible">
        <div class="toast-wrapper">
          <div class="toast-box" :class='position'>
            <div class="content">
              <div class="toast-icon" :class="iconType === 'success'?'icon-success':'icon-warning'"></div>
              <div class="toast-text">{{ message }}</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    position: {
      type: String,
      default: 'middle'
    },
    message: {
      type: String,
      default: ''
    },
    iconType: {
      type: String,
      default: 'success'
    }
  },
  data () {
    return {
      visible: false
    }
  }
}
</script>

<style scoped>
  @import "Toast.css";
</style>
