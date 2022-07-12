// 登录用户信息
const li1 = document.querySelector('.top-nav li:first-child')
const li2 = li1.nextElementSibling
// console.log(li1.nextElementSibling)
// 将本地存储封装成函数
function render() {
  const uname = localStorage.getItem('xtx-uname')
  // console.log(uname)
  if (uname) {
    li1.innerHTML =
      `<a href="javascript:;"><i class="iconfont icon-yonghu1" style="padding-right:5px"></i>${uname}</a>
        `
    li2.innerHTML = '<a href="javascript:;">退出登录</a>'
  } else {
    li1.innerHTML = '<a href="./login.html">请先登录</a>'
    li2.innerHTML = '<a href="./register.html">免费注册</a>'
  }
}
render()
// 点击退出登录
li2.addEventListener('click', function () {
  // 删除本地存储
  const remove = localStorage.removeItem('xtx-uname')
  // 重新渲染页面
  li1.innerHTML = '<a href="./login.html">请先登录</a>'
  li2.innerHTML = '<a href="./register.html">免费注册</a>'
})