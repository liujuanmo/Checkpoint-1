function book() {
    // 获取用户名和密码输入框的值
    var adultsnum = document.getElementById('adultsnum').value; 
    var name = document.getElementById('name').value;
    var fromdate = document.getElementById('fromdate').value;
    var todate = document.getElementById('todate').value;
   
    // 假设这里进行了用户名和密码的验证逻辑

    // 将用户名和密码作为查询参数附加到网址上
    var url = 'payment.html?adultsnum=' + encodeURIComponent(adultsnum) + '&name=' + encodeURIComponent(name)+ '&fromdate=' + encodeURIComponent(fromdate)
    +'&todate=' + encodeURIComponent(todate);
            
    // 在当前窗口中打开新的网址
    window.location.href = url;
}