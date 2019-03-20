
/* 通过setInterval

 */

function random(min,max) {
    //返回一个从min——max的随机数
    return Math.floor(Math.random()*(max - min + 1))+min;
}


var draw = document.getElementById("drawer");

document.getElementById("send").addEventListener("click",function() {
    var p = document.createElement("p");
    var content = document.getElementById("input").value;

    p.innerHTML = content;
    p.style.position = "absolute";

    p.style.top = random(0,500)+"px";
    p.style.left = document.documentElement.clientWidth*0.8 + "px";
    p.style.color = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
    draw.appendChild(p);

    var timeId = setInterval(function(){
        p.style.left = parseInt(p.style.left)-5 + "px";
        if(!p.parentNode || parseInt(p.style.left) <-parseInt(window.getComputedStyle(p).width)) {
            clearInterval(timeId);
        }console.log(p);
        console.log("我还没停止呢");
    },10);
},false);

document.getElementById("clear").addEventListener("click",function(){
    console.log("我现在再还在里面");
   for(var i = 0,length=draw.childNodes.length;i<length;i++) {
       draw.removeChild(draw.firstChild);
   }
},false);

document.getElementById("input").addEventListener("keypress",function(e) {
    if(e.key ==="Enter") {
        var myEvent = new Event("click");
        document.getElementById("send").dispatchEvent(myEvent);
    }
});