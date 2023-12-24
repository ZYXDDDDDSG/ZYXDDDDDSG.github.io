function login() {
    var userId = document.getElementById("userId").value;
    var password = document.getElementById("password").value;

    // 在这里添加验证逻辑，例如使用固定的ID和密码进行验证
    // 实际应用中应该使用服务器端验证

    // 这里使用简单的示例，如果ID为"admin"，密码为"password"，则跳转到相应页面
    if (userId === "admin" && password === "password") {
        window.location.href = "greetings_admin.html";
    }
    else if (userId === "ycb" && password !== "009") {
        displayGreetings("密码错误！我最有名的作品语音多少？")
    }
    else if (userId === "ycb" && password === "009") {
        window.location.href = "ycb512326.html";
    }
    else if (userId === "xsh" && password !== "giaogiao") {
        displayGreetings("密码错误！(群名里的八个英文字母)")
    }
    else if (userId === "xsh" && password === "giaogiao") {
        window.location.href = "xsh846218.html";
    }
    else if (userId === "wjx" && password !== "21.6") {
        displayGreetings("密码错误！你周一发给我的图片中花了多少钱？(带小数点)")
    }
    else if (userId === "wjx" && password === "21.6") {
        window.location.href = "wjx491898.html";
    }
    else if (userId === "xpy" && password !== "你还要我怎样") {
        displayGreetings("密码错误！(我们合唱的第一首歌)")
    }
    else if (userId === "xpy" && password === "你还要我怎样") {
        window.location.href = "xpy548138.html";
    }
    else if (userId === "yzt" && password !== "0.18") {
        displayGreetings("密码错误！想想我最近一次的中奖金额(带小数点)")
    }
    else if (userId === "yzt" && password === "0.18") {
        window.location.href = "yzt164895.html";
    }
    else if (userId === "gsb" && password !== "717") {
        displayGreetings("密码错误！我们最近一次聊天是几月几号？")
    }
    else if (userId === "gsb" && password === "717") {
        window.location.href = "gsb894214.html";
    }
    else if (userId === "hcx" && password !== "399") {
        displayGreetings("密码错误！前几天发给你的鱼定价多少？")
    }
    else if (userId === "hcx" && password === "399") {
        window.location.href = "hcx412378.html";
    }
    else if (userId === "yyh" && password !== "11211909") {
        displayGreetings("密码错误！我们最近一次聊天发起的具体时间？例:12242113(12月24日21时13分)")
    }
    else if (userId === "yyh" && password === "11211909") {
        window.location.href = "yyh848921.html";
    }
    else if (userId === "cyf" && password !== "爬虫") {
        displayGreetings("密码错误！我前几天向你发了一个什么相关的文件？(二字)")
    }
    else if (userId === "cyf" && password === "爬虫") {
        window.location.href = "cyf871245.html";
    }
    else if (userId === "myj" && password !== "tothemoon") {
        displayGreetings("密码错误！前几天收到了什么游戏？(全小写，无空格)")
    }
    else if (userId === "myj" && password === "tothemoon") {
        window.location.href = "myj546987.html";
    }
    else if (userId === "wzy" && password !== "417") {
        displayGreetings("密码错误！我们最后一次私信是几月几号捏(三个数字)")
    }
    else if (userId === "wzy" && password === "417") {
        window.location.href = "wzy456813.html";
    }
    else if (userId === "xzh" && password !== "13") {
        displayGreetings("密码错误！初一初二的班级号（应该还记得？）")
    }
    else if (userId === "xzh" && password === "13") {
        window.location.href = "xzh887984.html";
    }
    else if (userId === "yr" && password !== "SAO") {
        displayGreetings("密码错误！组织名称！大写！")
    }
    else if (userId === "yr" && password === "SAO") {
        window.location.href = "yr456871.html";
    }
    else if (userId === "zz" && password !== "SAO") {
        displayGreetings("密码错误！组织名称！大写！")
    }
    else if (userId === "zz" && password === "SAO") {
        window.location.href = "zz481356.html";
    }
    else if (userId === "yj" && password !== "余俊") {
        displayGreetings("密码错误！上次给你发的图片里的人叫啥？(bushi")
    }
    else if (userId === "yj" && password === "余俊") {
        window.location.href = "yj451238.html";
    }
    else if (userId === "zk" && password !== "信") {
        displayGreetings("密码错误！上次帮我带了一个什么东西呢？(一字)(再次感谢！)")
    }
    else if (userId === "zk" && password === "信") {
        window.location.href = "zk159832";
    }
    else if (userId === "zyq" && password !== "google") {
        displayGreetings("密码错误！你上次给我发了哪里的实习呢？(全小写)")
    }
    else if (userId === "zyq" && password === "google") {
        window.location.href = "zyq879456.html";
    }
    else if (userId === "xyf" && password !== "上海放假晚大学") {
        displayGreetings("密码错误！你们学校又称:")
    }
    else if (userId === "xyf" && password === "上海放假晚大学") {
        window.location.href = "xyf456789.html";
    }
    else if (userId === "myt" && password !== "618") {
        displayGreetings("密码错误！你是哪天来的交大玩呢？")
    }
    else if (userId === "myt" && password === "618") {
        window.location.href = "myt155976.html";
    }
    else if (userId === "hym" && password !== "好") {
        displayGreetings("密码错误！我给你发的最后一条消息(送分题")
    }
    else if (userId === "hym" && password === "好") {
        window.location.href = "hym413678.html";
    }
    else if (userId === "why" && password !== "蔡海燕") {
        displayGreetings("密码错误！小学数学老师是谁(送分题")
    }
    else if (userId === "why" && password === "蔡海燕") {
        window.location.href = "why458712.html";
    }
    else if (userId === "wzhl" && password !== "21") {
        displayGreetings("密码错误！(我名字的笔画数)")
    }
    else if (userId === "wzhl" && password === "21") {
        window.location.href = "wzhl789165.html";
    }
    else {
        displayGreetings("登录失败，请检查ID和密码。");
    }
}

function displayGreetings(message) {
    document.getElementById("greetings").innerHTML = message;
}
