
// 1、找对象——》a.code
// 需求1：点击验证码-------------------------------------------
// 3、点击之后：
//   1、声明一个变量count储存还剩多少时间
//   2、先设置code的内容为 `05秒后重新获取`
//   2、开启定时器，每隔1s，count--，并且动态渲染code中的内容 `04秒后重新获取`
// 2、给code注册点击事件
//   3、等剩余时间count等于0时，此时清除定时器，变设置code中的内容为 `重新获取`
const link = document.querySelector('.code')
let count = 5
let flag = true
link.addEventListener('click', function () {
   // 节流阀
   if (flag === false) {
      return
   }
   link.innerHTML = `05秒后重新获取`
   // 给flag赋值为false 手动更改定时器状态
   flag = false
   const timeId = setInterval(function () {
      count--
      link.innerHTML = `0${count}秒后重新获取`
      if (count <= 0) {
         clearInterval(timeId)
         link.innerHTML = `重新获取`
         count = 5
         // 更改状态为关闭
         flag = true
      }
   }, 1000)
})


// 需求2：用户名校验---------------------------
// 1、找对象——》input[name=username]
// 2、给input注册change事件
// 3、当input被change时
//   1、获取用户输入的内容
//   2、声明变量reg储存正则规则： /^[a-zA-Z0-9-_]{6,16}$/
//   3、用正则判断输入是否符合规则：
//     1、如果符合规则，则把span标签内容的提示消息清空
//     2、如果不符合规则，则把span标签内容设置为 请输入6~16位的用户名
const uname = document.querySelector('input[name=username]')
uname.addEventListener('change', function () {
   fn(/^[a-zA-Z0-9-_]{6,16}$/, uname, '请输入6~16位的英文或数字')
})

// 需求3：把根据正则的设置内容的代码封装成函数
// 1、用function (){} 把根据正则设置内容的代码包裹起来
// 2、把函数中每次使用需要变化的部分，变成函数的参数，由调用时实参传入即可
function fn(rgr, txt, str) {
   const reg = rgr
   // const t = reg.test(uname.value)
   if (reg.test(txt.value)) {
      txt.nextElementSibling.innerHTML = ''
   } else {
      txt.nextElementSibling.innerHTML = str
   }
   return reg.test(txt.value)
}

// 需求4：手机号验证---------------------------------
// 1、找对象——》input[name=phone]
// 2、给input注册change事件
// 3、当input被change时，调用verity事件，直接解决，
//   1、正则：/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
//   2、信息：'请输入11位手机号'
const phone = document.querySelector('input[name=phone]')
phone.addEventListener('change', function () {
   return fn(/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/, phone, '请输入11位手机号')
})

// 需求5：验证码验证-----------------------------
// 1、找对象——》input[name=code]
// 2、给input注册change事件
// 3、当input被change时，调用verity事件，直接解决
//   1、正则：/^\d{6}$/
//   2、信息：'请输入6位的验证码'
const code = document.querySelector('input[name=code]')
code.addEventListener('change', function () {
   return fn(/^\d{6}$/, code, '请输入6位的验证码')
})
// 需求6：密码验证-----------------------------
// 1、找对象——》input[name=password]
// 2、给input注册change事件
// 3、当input被change时，调用verity事件，直接解决
//   1、正则：/^[a-zA-Z0-9-_]{6,20}$/
//   2、信息：'请输入正确的密码'
const psd = document.querySelector('input[name=password]')
psd.addEventListener('change', function () {
   return fn(/^[a-zA-Z0-9-_]{6,20}$/, psd, '请输入6-20位数字或字母')
})
// 需求7：再次密码验证-------------------------
// 1、找对象——》input[name=confirm]
// 2、给input注册change事件
// 3、当input被change时，判断两次输入的密码是否相同
//   1、如果相同，则清空span的内容
//   2、如果不相同，则显示 '两次输入的密码不一致'
const cfmpsd = document.querySelector('input[name=confirm]')
cfmpsd.addEventListener('change', function () {
   if (cfmpsd.value === psd.value) {
      cfmpsd.nextElementSibling.innerHTML = ''
   } else {
      cfmpsd.nextElementSibling.innerHTML = '两次输入的密码不一致'
   }
})

// 需求8：我同意模块-------------------------
// 1、找对象——》i.icon-queren
// 2、给i注册点击事件
// 3、点击之后，给i添加icon-queren2类
// 4、优化：如果点一次加icon-queren2，再点一次取消，类名的添加和取消可以使用classList.toggle('类名')
const queren = document.querySelector('.icon-queren')
queren.addEventListener('click', function () {
   queren.classList.toggle('icon-queren2')
})

// 需求9：提交按钮模块---------------------------------
// 1、找对象——》button.submit
// 2、给button注册点击事件
// 3、button点击之后
//   1、阻止button按钮的默认提交功能，否则会提交
//   2、对以上所有表单一一判断校验，并且判断是否选中确认协议，需要在verity函数中设置返回正则判断结果
//      1、如果校验有问题，需要提醒信息
//      2、如果以上内容全都通过，此时直接跳转去登录页  login.html
// 4、如果用户为勾选同意协议，跳转的代码不执行，判断需要卸载跳转代码的前面
const btn = document.querySelector('button[class="submit"]')
// console.log(btn)
btn.addEventListener('click', function (e) {
   const res = fn(/^[a-zA-Z0-9-_]{6,16}$/, uname, '请输入6~16位的英文或数字')
   const res2 = fn(/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/, phone, '请输入11位手机号')
   const res3 = fn(/^\d{6}$/, code, '请输入6位的验证码')
   const res4 = fn(/^[a-zA-Z0-9-_]{6,20}$/, psd, '请输入6-20位数字或字母')
   if (cfmpsd.value === psd.value) {
      cfmpsd.nextElementSibling.innerHTML = ''
   } else {
      cfmpsd.nextElementSibling.innerHTML = '两次输入的密码不一致'
   }
   // 阻止默认跳转
   e.preventDefault()
   if (queren.classList.contains('icon-queren2') === false) {
      alert('请勾选用户协议')
      return
   }


   // console.log(res, res2, res3, res4)
   if (res && res2 && res3 && res4) {
      location.href = 'login.html'
   } else {
      return
   }
})