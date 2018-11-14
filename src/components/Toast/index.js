// 引入Vue
import Vue from 'vue'
import ToastComponent from './Toast.vue'

// 注册一个Toast构造器
const ToastConstructor = Vue.extend(ToastComponent)

// 定义一个toast队列，防止重复使用
let toastPool = []
// 构造Toast实例
let getAnInstance = () => {
  // 判断队列里是否有值
  if (toastPool.length > 0) {
    // 取队列里的第一个值
    let instance = toastPool[0]
    // 删除第一个值
    toastPool.splice(0, 1)
    // 返回第一个值
    return instance
  }
  // 返回一个新的Toast构造器
  return new ToastConstructor({
    // el: document创建一个div
    el: document.createElement('div')
  })
}

// 定义一个向Toast队列中push添加Toast实例的方法
let returnAnInstance = instance => {
  if (instance) {
    toastPool.push(instance)
  }
}

// 定义删除创建的DOM
let removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target)
  }
}

// 在Toast构造器的原型链上添加close方法
ToastConstructor.prototype.close = function () {
  // visible值为false，Toast不可见
  this.visible = false
  // 添加事件监听，在CSS过渡完成后移除相关DOM
  this.$el.addEventListener('transitionend', removeDom)
  // closed为true，关闭Toast
  this.closed = true
  returnAnInstance(this)
}

// options各种参数
let Toast = (options = {}) => {
  // 用getAnInstance方法构造实例
  let instance = getAnInstance()

  // closed默认值为true，不显示Toast
  instance.visible = false
  instance.closed = true

  // 清除定时器
  clearTimeout(instance.timer)

  // 各项参数
  // 实例的duration，默认2000ms
  instance.duration = options.duration || 2000
  // 实例的信息message，字符串直接调用，对象调用其message属性
  instance.message = typeof options === 'string' ? options : options.message
  // 实例的位置position, 'top', 'middle'（默认）, 'bottom'
  instance.position = options.position || 'middle'
  // 实例的图标iconType, 'success'（默认）, 'warning'
  instance.iconType = options.iconType || 'success'

  // 由于instance会初始化，因此为了避免在任何操作之前界面上就出现一个toast，用if语句判断
  if (!instance.message) {
    instance.visible = false
    instance.closed = true
  } else {
    // 将实例的instance添加到DOM中
    document.body.appendChild(instance.$el)
    instance.closed = false
  }

  // 重新渲染DOM后：
  Vue.nextTick(() => {
    // visible值为true，Toast可见
    instance.visible = true
    // 移除事件监听
    instance.$el.removeEventListener('transitionend', removeDom)
    // duration存在执行定时器
    instance.timer = setTimeout(function () {
      // closed值为true, 返回
      if (instance.closed) { return }
      // closed值为false, 关闭Toast
      instance.close()
    }, instance.duration)
  })
  // 返回Toast实例
  return instance
}

// 向外暴露Toast项目
export default Toast
