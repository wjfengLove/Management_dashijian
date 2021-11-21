// 登录相关的js操作
$(function(){
    // 点击去注册账号
    $('#go_reg').on('click', function() {
        $('.login-box').hide()
        $('.reg-box').show()
    })

    // 点击去登录
    $('#go_login').on('click', function() {
        $('.reg-box').hide()
        $('.login-box').show()
    })

})