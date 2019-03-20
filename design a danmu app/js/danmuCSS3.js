/* 通过css3 transition 实现的弹幕滚动效果
   还有一些瑕疵，需要后续完善更新。

 */
function random(min,max) {
    //返回一个从min——max的随机数
    return Math.floor(Math.random()*(max - min + 1))+min;
}



var draw = document.getElementById("drawer");
var send = document.getElementById("send");
send.addEventListener("click",function() {
    var color = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
    var p = document.createElement("p");
    var inputContent = document.getElementById("input").value;
    p.innerHTML=inputContent;
    p.style.top=random(0,484)+"px";
    p.className = "right";
    p.style.color = color;
    draw.appendChild(p);
    console.log(draw);
    setTimeout(function(){
        p.className = "left";
    },2);

},false);


document.getElementById("input").addEventListener("keypress",function(e) {
    console.log(e.key);
    if(e.key === "Enter") {
        var myEvent = new Event("click");
        send.dispatchEvent(myEvent);
    }
});

document.getElementById("clear").addEventListener("click", function() {
        for(var i = 0,length = draw.childNodes.length;i < length;i++ ) {
            draw.removeChild(draw.firstChild);
            console.log(draw);
        }
},false);