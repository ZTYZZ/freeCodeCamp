// var draw = document.getElementById("drawer");
// var drawWidth = window.getComputedStyle(draw).width;
// console.log(drawWidth);
// var drawHeight = window.getComputedStyle(draw).height;
// var send = document.getElementById("send");
// var clear = document.getElementById("clear");
// function Danmu(speed,value,y,color){
//     this.x = drawWidth;
//     this.speed = speed;
//     this.value = value;
//     this.y = y;
//     this.color = color;
//     this.visibility = false;
// }
//
// Danmu.prototype.draw = function() {
//    var p = document.createElement("p");
//    p.innerHTML = this.value;
//    p.style.position = "absolute";
//    console.log(this.y);
//    p.style.top= this.y + "px";
//    p.style.right = 0.1 * document.documentElement.clientWidth+"px";
//    p.style.color= this.color;
//    p.style.transition = "right 10s";
//    draw.appendChild(p);
//
// };
// Danmu.prototype.roll = function() {
//     if(this.x <= 0 ) {
//         this.visibility = true;
//     }else {
//         this.x -= this.speed;
//     }
// };
//
// function loop() {
//     var inputContent = document.getElementById("input").value;
//     var y = random(0,484);
//     var color = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
//     var speed = random(1,3);
//     var danmu = new Danmu(0.1,inputContent,y,color);
//
//
//     requestAnimationFrame(loop);
//
// }
//
// send.addEventListener("click",loop,false);
//
//
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

/*增加边缘检测*/

