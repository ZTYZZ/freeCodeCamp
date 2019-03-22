window.onload = function() {
    var x,y;
    var humidity = document.getElementById("humidity");
    var temp = document.getElementById("temp");
    var speed = document.getElementById("speed");
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
           x = position.coords.latitude;
           y = position.coords.longitude;
           console.log(position);

            console.log(x+" " +y);
            var xhr = new XMLHttpRequest();
            var url = `https://api.openweathermap.org/data/2.5/weather?lat=${x}&lon=${y}&appid=4ac5968378612d50092e251f8b34abf4`;
            console.log(url);
            xhr.open("get",url);
            xhr.onreadystatechange = function() {
                if(xhr.readyState === 4) {
                    var data = JSON.parse(xhr.responseText);
                    humidity.innerHTML+=data.main.humidity;
                    temp.innerHTML += data.main.temp;
                    speed.innerHTML += data.wind.speed;
                    console.log(data);
                }
            };
            xhr.send(null);

        }, function(error) {
            alert("获取位置失败");
        });
    }

};