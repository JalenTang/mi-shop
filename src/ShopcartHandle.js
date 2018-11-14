let ShopcartHandle = {}

// 获取所有商品数据
ShopcartHandle.getGoodsList = function () {
  return JSON.parse(window.localStorage.getItem('goodsList')) || {}
}

// 保存所有商品数据
ShopcartHandle.saveGoodsList = function (goodsList) {
  window.localStorage.setItem('goodsList', JSON.stringify(goodsList))
}

// 新增商品
ShopcartHandle.addGoods = function (goods) {
  let goodsList = this.getGoodsList()
  if (goodsList[goods.id]) {
    goodsList[goods.id] += goods.num
  } else {
    goodsList[goods.id] = goods.num
  }
  this.saveGoodsList(goodsList)
}

// 获取购物车数量
ShopcartHandle.getTotalNumber = function () {
  let goodsList = this.getGoodsList()
  let values = Object.values(goodsList)
  let totalNumber = 0
  values.forEach(function (val) {
    totalNumber += val
  })
  return totalNumber
}

export default ShopcartHandle
