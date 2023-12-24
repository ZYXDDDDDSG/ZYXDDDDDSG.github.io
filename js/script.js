function login() {
    var userId = document.getElementById("userId").value;
    var password = document.getElementById("password").value;

    // 在这里添加验证逻辑，例如使用固定的ID和密码进行验证
    // 实际应用中应该使用服务器端验证

    // 这里使用简单的示例，如果ID为"admin"，密码为"password"，则跳转到相应页面
    if (userId === "admin" && password === "password") {
        window.location.href = "greetings_admin.html";
    }
    else if (userId === "yzt" && password !== "0.18") {
        displayGreetings("密码错误！想想我最近一次的中奖金额（带小数点）")}
    else if (userId === "yzt" && password === "0.18") {
        window.location.href = "yzt164895.html";}
    else {
        displayGreetings("登录失败，请检查ID和密码。");
    }
}

function displayGreetings(message) {
    document.getElementById("greetings").innerHTML = message;
}
