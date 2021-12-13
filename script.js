function fahrenheit(){
    var value;
    var urlcel;
           value = document.getElementById("city").value;
             urlcel="https://api.openweathermap.org/data/2.5/weather?q="+value+"&appid=679a1ed886ed6c003e3e37adecc4d85e";
    $.ajax({ 
      url: urlcel
    }).done(function( data ){
        var f='&deg;'+"F";
        $(".temp").html(data.main.temp)
        $(".min-temp").html(data.main.temp_min)
        $(".max-temp").html(data.main.temp_max)
        $(".units").html(f)
    });
}

function celsius(){
    var value;
    var urlcel;
           value = document.getElementById("city").value;
             urlcel="https://api.openweathermap.org/data/2.5/weather?q="+value+"&appid=679a1ed886ed6c003e3e37adecc4d85e&units=metric";
    $.ajax({ 
      url: urlcel
    }).done(function( data ){
      var f='&deg;'+"C";
        $(".temp").html(data.main.temp)
        $(".min-temp").html(data.main.temp_min)
        $(".max-temp").html(data.main.temp_max)
        $(".units").html(f)
    });
}
$(document).ready(function(){
    $("#search").click(function(){
    var value;
    var urlcel;
           value = document.getElementById("city").value;
             urlcel="https://api.openweathermap.org/data/2.5/weather?q="+value+"&appid=679a1ed886ed6c003e3e37adecc4d85e&units=metric";
    $.ajax({ 
      url: urlcel
    }).done(function( data ){
        console.log(data)
        var td=data.dt;
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var date = new Date(td*1000);
        $(".day-main").html(weekday[date.getDay()])
        $(".time").html(date.getHours()+":"+date.getMinutes())
        $("#sunrise").html((new Date(data.sys.sunrise*1000)).getHours()+":"+(new Date(data.sys.sunrise*1000)).getMinutes())
        $("#sunset").html((new Date(data.sys.sunset*1000)).getHours()+":"+(new Date(data.sys.sunset*1000)).getMinutes())
        $("#cityname").html(data.name)
        $(".temp").html(data.main.temp)
        $(".min-temp").html(data.main.temp_min)
        $(".max-temp").html(data.main.temp_max)
        $("#wind").html(data.wind.speed)
        $("#wdesc").html(data.weather[0].description)
        $("#wmain").html(data.weather[0].main)
        if(data.main.humidity<=30)
        $(".quality-humidity").html("Good Quality")
        else if(data.main.humidity<=60)
       $(".quality-humidity").html("Average Quality")
       else
       $(".quality-humidity").html("Bad Quality")
        $("#humidity").html(data.main.humidity)
        if(data.main.visibility<=4000)
        $(".quality-visibility").html("Bad")
        else if(data.main.humidity<=10000)
       $(".quality-visibility").html("Average")
       else
       $(".quality-visibility").html("Good")
        $("#visibility").html(data.visibility)
    });
    });
})

