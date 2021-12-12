$(document).ready(function(){
    var myButton = document.getElementById('button');
    var value;
    var urlcel;
    var myButton = document.getElementById('button');
    myButton.onclick = function(){
           value = document.getElementById("city").value;
             urlcel="https://api.openweathermap.org/data/2.5/weather?q="+value+"&appid=679a1ed886ed6c003e3e37adecc4d85e&units=metric";
            var cel = document.getElementById('celsius');
            cel.onclick = function(){
                 urlcel="https://api.openweathermap.org/data/2.5/weather?q="+value+"&appid=679a1ed886ed6c003e3e37adecc4d85e&units=metric";
            }
            var fah = document.getElementById('fahrenheit');
            fah.onclick = function(){
                 urlcel="https://api.openweathermap.org/data/2.5/weather?q="+value+"&appid=679a1ed886ed6c003e3e37adecc4d85e";
            }
    $.ajax({ 
      url: urlcel
    }).done(function( data ){
        console.log(data)
        var td=data.dt;
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var date = new Date(td*1000);
        $(".day-main").html(weekday[date.getDay()])
        $(".time").html(date.getHours()+":"+date.getMinutes())
        $(".sunrise").html((new Date(data.sys.sunrise*1000)).getHours()+":"+(new Date(data.sys.sunrise*1000)).getMinutes())
        $(".sunset").html((new Date(data.sys.sunset*1000)).getHours()+":"+(new Date(data.sys.sunset*1000)).getMinutes())
        $(".cityname").html(data.name)
        $(".temp").html(data.main.temp)
        $(".min-temp").html(data.main.temp_min)
        $(".max-temp").html(data.main.temp_max)
        $(".wind").html(data.wind.speed)
        $(".wdesc").html(data.weather[0].description)
        $(".wmain").html(data.weather[0].main)
        $(".humidity").html(data.main.humidity)
        $(".visibility").html(data.visibility)
    });
}
var f = document.getElementById('fahrenheit');
    f.onclick = function(){
           value = document.getElementById("city").value;
             urlcel="https://api.openweathermap.org/data/2.5/weather?q="+value+"&appid=679a1ed886ed6c003e3e37adecc4d85e";console.log(urlcel)
    $.ajax({ 
      url: urlcel
    }).done(function( data ){
        console.log(data)
        var td=data.dt;
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var date = new Date(td*1000);
        $(".day-main").html(weekday[date.getDay()])
        $(".time").html(date.getHours()+":"+date.getMinutes())
        $(".sunrise").html((new Date(data.sys.sunrise*1000)).getHours()+":"+(new Date(data.sys.sunrise*1000)).getMinutes())
        $(".sunset").html((new Date(data.sys.sunset*1000)).getHours()+":"+(new Date(data.sys.sunset*1000)).getMinutes())
        $(".cityname").html(data.name)
        $(".temp").html(data.main.temp)
        $(".min-temp").html(data.main.temp_min)
        $(".max-temp").html(data.main.temp_max)
        $(".wind").html(data.wind.speed)
        $(".wdesc").html(data.weather[0].description)
        $(".wmain").html(data.weather[0].main)
        $(".humidity").html(data.main.humidity)
        $(".visibility").html(data.visibility)
    });
}


})

