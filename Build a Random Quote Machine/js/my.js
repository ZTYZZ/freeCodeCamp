window.onload=function() {

    var p1 = document.getElementById("sentence1");
    var wrapper = document.querySelector(".wrapper");
    var author = document.getElementById("from");
    var xhr = new XMLHttpRequest();
    var data;
    xhr.open("get","https://v1.hitokoto.cn/?encode=json");
    xhr.onreadystatechange = function() {
        if(xhr.readyState===4) {
            data = JSON.parse(xhr.responseText);

            /*数据写入页面中*/
            var sentence1 = data["hitokoto"];

            p1.innerHTML = sentence1;
            author.innerHTML="<i>————" + data["from"] +"</i>";
        }
    };
    xhr.send(null);


    /*进行按钮时间绑定*/
    function loop() {

        var xhr = new XMLHttpRequest();
        xhr.open("get","https://v1.hitokoto.cn/?encode=json");
        xhr.onreadystatechange = function() {
            if(xhr.readyState ===4) {
                var data = JSON.parse(xhr.responseText);
                p1.innerHTML = data.hitokoto;
                author.innerHTML = "<i> ————" +data.from+ "</i>";
            }
        };
        xhr.send(null);

        /*进行页面颜色的改变*/
        wrapper.style.backgroundColor = `rgb(${getRandom(0,150)},${getRandom(0,150)},${getRandom(0,150)})`;

    }
    var random = document.getElementsByClassName("random")[0];
    random.addEventListener("click",loop,false);

    function getRandom(min,max) {
        return Math.floor(Math.random()*(max-min+1))+min;
    }

    setInterval(loop,5000);



    /*进行分享页面的绑定*/
    document.querySelector(".share").addEventListener("mouseover",function() {
        var share = document.querySelector(".share a");
        var content = "http://v.t.sina.com.cn/share/share.php?title="+document.getElementById("sentence1").innerHTML+"" +"%23每日鸡汤%23 %40天元pig";
        console.log(content);
        share.setAttribute("href",content);


    });

};

