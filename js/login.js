/* tab栏切换 */
const topLinks = document.querySelectorAll('.tab-nav a')
const codes = document.querySelectorAll('.tab-pane')

for (let i = 0; i < topLinks.length; i++) {
   topLinks[i].addEventListener('click', function () {
      // 排他思想 先移除掉类或样式
      for (let i = 0; i < topLinks.length; i++) {
         topLinks[i].classList.remove('active')
         codes[i].style.display = 'none'

      }
      // 再添加样式
      topLinks[i].classList.add('active')
      codes[i].style.display = 'block'
   })
}

// 点击登录进行跳转页面
const form = document.querySelector('form')
const checkbox = document.querySelector('input[id="my-checkbox"]')
const uname = document.querySelector('input[name="username"]')
form.addEventListener('submit', function (e) {
   // 利用事件委托阻止默认行为
   e.preventDefault()
   // 如果未勾选用户协议 则弹出提示框
   if (checkbox.checked === false) {
      // console.log(checkbox.checked)
      return alert('请勾选用户协议')
   }
   localStorage.setItem('xtx-uname', uname.value)
   location.href = './index.html'

})