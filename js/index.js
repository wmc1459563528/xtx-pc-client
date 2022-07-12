// 获取相关元素
const nav = document.querySelector('.nav')
const navLis = document.querySelectorAll('.nav li')
const prev = document.querySelector('.banner-right .prev')
const next = document.querySelector('.banner-right .next')
const paging = document.querySelectorAll('.paging li')
// 上下张切换变量
let count = 0
/* console.log(nav, navLis, prev, next, paging) */

// 注册点击事件
// 上一张
prev.addEventListener('click', function () {
  // console.log(111)
  count--
  if (count < 0) {
    count = navLis.length - 1
  }
  // 排他 先移除掉所有的类 再一个一个添加
  for (let i = 0; i < navLis.length; i++) {
    navLis[i].classList.remove('active')
    // 小圆点
    paging[i].classList.remove('active')
  }
  navLis[count].classList.add('active')
  paging[count].classList.add('active')

})
// 下一张
next.addEventListener('click', function () {
  count++
  // 如果count 大于等于元素的长度 则重置为零 展示第一张图片
  if (count >= navLis.length) {
    count = 0
  }
  // 排他 先移除掉所有的类 再一个一个添加
  for (let i = 0; i < navLis.length; i++) {
    navLis[i].classList.remove('active')
    paging[i].classList.remove('active')
  }
  navLis[count].classList.add('active')
  paging[count].classList.add('active')
  // console.log(count)
})
// 定时器
let timeId = setInterval(function () {
  next.click()
}, 3000)
// 鼠标经过暂停
nav.addEventListener('mouseenter', function () {
  // console.log(111)
  // 停止定时器
  clearInterval(timeId)
})

// 鼠标离开继续
nav.addEventListener('mouseleave', function () {
  // console.log(222)
  clearInterval(timeId)
  timeId = setInterval(function () {
    next.click()
  }, 3000)
})