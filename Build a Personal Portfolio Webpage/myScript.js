window.onload= function() {
    var li = document.querySelectorAll("ul li");
    window.onscroll = function() {
        var top = document.documentElement.scrollTop;
        var items = document.querySelectorAll(".item");
        var currentId = "";

        items.forEach(function(a) {
            var itemTop = a.offsetTop;
            if(top>=itemTop-200) {
                currentId = "#"+a.getAttribute("id");
            }
            else {
                return false;
            }
        });

        console.log(currentId);
        //进行样式的解绑

        var activeItem = document.querySelector("li.active");
        if(currentId && currentId!==activeItem.childNodes[0].href) {

            var itemClassName = activeItem.className.split(" ");

            itemClassName.pop();
            itemClassName = itemClassName.join(" ");
            activeItem.className = itemClassName;
            console.log(itemClassName);
            console.log(activeItem.className);

            //进行样式的绑定
            for(var a of li) {
                console.log(a.childNodes[0]);
                if(a.childNodes[0].getAttribute("href")===currentId) {
                    a.className+=" active";
                }
            }
        }
  };
};