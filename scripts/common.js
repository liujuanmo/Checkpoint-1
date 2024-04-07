function login() {
    // 获取用户名和密码输入框的值
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // 假设这里进行了用户名和密码的验证逻辑

    // 将用户名和密码作为查询参数附加到网址上
    var url = 'index.html?username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password);
            
    // 在当前窗口中打开新的网址
    window.location.href = url;
}

function send_email() {
    // 获取用户名和密码输入框的值
    var email = document.getElementById('email').value;

    // 将用户名输入的邮箱地址为查询参数附加到网址上
    var urlemail = 'index.html?email=' + encodeURIComponent(email);
            
    // 在当前窗口中打开新的网址
    window.location.href = urlemail;
    
}

function getUrlParam(parameter) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parameter);
}

function calculateDateDifference(dateString1, dateString2) {
    // 将日期字符串转换为日期对象
    var date1 = new Date(dateString1);
    var date2 = new Date(dateString2);

    // 计算两个日期之间的毫秒差值
    var difference = Math.abs(date2 - date1);

    return Math.ceil(difference / (1000 * 60 * 60 * 24));
}