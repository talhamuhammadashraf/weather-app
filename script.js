let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

let weatherIcon = [
    {
        icon : "Smoke"
    },
    {
        icon : "Clear"
    },
    {
        icon : "Rain"
    },
    {
        icon : "Clouds"
    },
    {
        icon : "Sun"
    },
    {
        icon : "Haze"
    }
];


function initialize(){
    $(".enter").keyup(function (event){
        if (event.keyCode === 13) {
            $(".my-btn").click();
        }
    });
}
function getWeather() {
    document.querySelector(".weather-info").style.display = "block";
    document.querySelector(".greet").style.display = "none";

    const cityName = document.querySelector("input").value;
    $.ajax({
       url:`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=47d6d6650842650300bf818abb27ce56&units=metric`,
     
       success: function (data) {
        console.log(data);

        let icon = data.weather[0].main;

            if (icon == "Smoke") { console.log(1)
                document.querySelector("#img").innerHTML = `<i class="wi wi-smoke"></i>`;
                document.querySelector("body").style.backgroundImage ="url('images/giphy.gif')"
            }
            else if(icon == "Clouds"){console.log(2)
                document.querySelector("#img").innerHTML = `<i class="wi wi-day-cloudy"></i>`;
                document.querySelector("body").style.backgroundImage ="url('images/weather1.jpg')"
            }
            else if(icon == "Sun") {console.log(3)
                document.querySelector("#img").innerHTML = `<i class="wi wi-day-sunny"></i>`;
                document.querySelector("body").style.backgroundImage ="url('images/sun.jpg')"
            }
            else if(icon == "Rain") {console.log(4)
                document.querySelector("#img").innerHTML = `<i class="wi wi-day-rain"></i>`
                document.querySelector("body").style.backgroundImage ="url('images/Lightning.gif')"
            }
            else if(icon == "Haze") {console.log(5)
                document.querySelector("#img").innerHTML = `<i class="wi wi-day-haze"></i>`;
                document.querySelector("body").style.backgroundImage ="url('images/winter_snow.jpg')"                
            }
            else {console.log(6)
                document.querySelector("#img").innerHTML = `<i class="wi wi-night-clear"></i>`;
                document.querySelector("body").style.backgroundImage ="url('images/blue-sky.jpg')"                                
            }
           
          
           document.querySelector(".city-name").innerHTML = data.name;
           document.querySelector(".current-weather > span").innerHTML = Math.round(data.main.temp) + " C";
           document.querySelector(".description").innerHTML = data.weather[0].main;
      

       },
    
       error: function (err) {
           document.querySelector("input").innerHTML += `if some error occur`;
       }
   })

    //  forcast report for 5 days

      document.querySelector("#weeks").style.display = "block";

   $.ajax({
       url: `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=47d6d6650842650300bf818abb27ce56&units=metric`,

       success: function(data){
           console.log(data);

           var d1 = new Date(data.list[0].dt*1000); 
           var d2 = new Date(data.list[8].dt*1000); 
           var d3 = new Date(data.list[16].dt*1000); 
           var d4 = new Date(data.list[24].dt*1000); 
           var d5 = new Date(data.list[32].dt*1000); 

        //   days
           document.querySelector(".day1").innerHTML = days[d1.getDay()]; 
           document.querySelector(".day2").innerHTML = days[d2.getDay()];        
           document.querySelector(".day3").innerHTML = days[d3.getDay()];        
           document.querySelector(".day4").innerHTML = days[d4.getDay()];  
           document.querySelector(".day5").innerHTML = days[d5.getDay()];
          


        //  temperature
        document.querySelector(".temp1").innerHTML = Math.round(data.list[0].main.temp) + " c°";        
        document.querySelector(".temp2").innerHTML = Math.round(data.list[5].main.temp) + " c°";          
        document.querySelector(".temp3").innerHTML = Math.round(data.list[13].main.temp) + " c°";         
        document.querySelector(".temp4").innerHTML = Math.round(data.list[21].main.temp) + " c°";         
        document.querySelector(".temp5").innerHTML = Math.round(data.list[29].main.temp) + " c°";  


    let forcastIcons =  data.list[0].weather[0].main;

        if(forcastIcons  == "Smoke") {
            document.querySelector(".days-icons").innerHTML = `<i class="wi wi-smoke"></i>`
        }
        else if(forcastIcons == "Clouds"){
            document.querySelector(".days-icons").innerHTML = `<i class="wi wi-day-cloudy"></i>`
        }
        else if(forcastIcons == "Sun") {
            document.querySelector(".days-icons").innerHTML = `<i class="wi wi-day-sunny"></i>`
        }
        else if(forcastIcons == "Rain") {
            document.querySelector(".days-icons").innerHTML = `<i class="wi wi-day-rain"></i>`
        }
        else if(forcastIcons == "Haze") {
            document.querySelector(".days-icons").innerHTML = `<i class="wi wi-day-haze"></i>`
        }
        else {
            document.querySelector(".days-icons").innerHTML = `<i class="wi wi-night-clear"></i>`
        }

        // day 2
    let forcastIcons1 = data.list[8].weather[0].main;

        
        if(forcastIcons1  == "Smoke") {
            document.querySelector(".days-icons1").innerHTML = `<i class="wi wi-smoke"></i>`
        }
        else if(forcastIcons1 == "Clouds"){
            document.querySelector(".days-icons1").innerHTML = `<i class="wi wi-day-cloudy"></i>`
        }
        else if(forcastIcons1 == "Sun") {
            document.querySelector(".days-icons1").innerHTML = `<i class="wi wi-day-sunny"></i>`
        }
        else if(forcastIcons1 == "Rain") {
            document.querySelector(".days-icons1").innerHTML = `<i class="wi wi-day-rain"></i>`
        }
        else if(forcastIcons1 == "Haze") {
            document.querySelector(".days-icons1").innerHTML = `<i class="wi wi-day-haze"></i>`
        }
        else {
            document.querySelector(".days-icons1").innerHTML = `<i class="wi wi-night-clear"></i>`
        }

        // day3
    let forcastIcons2 = data.list[16].weather[0].main;

        if(forcastIcons2  == "Smoke") {
            document.querySelector(".days-icons2").innerHTML = `<i class="wi wi-smoke"></i>`
        }
        else if(forcastIcons2 == "Clouds"){
            document.querySelector(".days-icons2").innerHTML = `<i class="wi wi-day-cloudy"></i>`
        }
        else if(forcastIcons2 == "Sun") {
            document.querySelector(".days-icons2").innerHTML = `<i class="wi wi-day-sunny"></i>`
        }
        else if(forcastIcons2 == "Rain") {
            document.querySelector(".days-icons2").innerHTML = `<i class="wi wi-day-rain"></i>`
        }
        else if(forcastIcons2 == "Haze") {
            document.querySelector(".days-icons2").innerHTML = `<i class="wi wi-day-haze"></i>`
        }
        else {
            document.querySelector(".days-icons2").innerHTML = `<i class="wi wi-night-clear"></i>`
        }

    let forcastIcons3 = data.list[24].weather[0].main;


        if(forcastIcons3  == "Smoke") {
            document.querySelector(".days-icons3").innerHTML = `<i class="wi wi-smoke"></i>`
        }
        else if(forcastIcons3 == "Clouds"){
            document.querySelector(".days-icons3").innerHTML = `<i class="wi wi-day-cloudy"></i>`
        }
        else if(forcastIcons3 == "Sun") {
            document.querySelector(".days-icons3").innerHTML = `<i class="wi wi-day-sunny"></i>`
        }
        else if(forcastIcons3 == "Rain") {
            document.querySelector(".days-icons3").innerHTML = `<i class="wi wi-day-rain"></i>`
        }
        else if(forcastIcons3 == "Haze") {
            document.querySelector(".days-icons3").innerHTML = `<i class="wi wi-day-haze"></i>`
        }
        else {
            document.querySelector(".days-icons3").innerHTML = `<i class="wi wi-night-clear"></i>`
        }

    let forcastIcons4 = data.list[32].weather[0].main;

        
        if(forcastIcons4  == "Smoke") {
        document.querySelector(".days-icons4").innerHTML = `<i class="wi wi-smoke"></i>`
        }
        else if(forcastIcons4 == "Clouds"){
        document.querySelector(".days-icons4").innerHTML = `<i class="wi wi-day-cloudy"></i>`
        }
        else if(forcastIcons4 == "Sun") {
        document.querySelector(".days-icons4").innerHTML = `<i class="wi wi-day-sunny"></i>`
        }
        else if(forcastIcons4 == "Rain") {
        document.querySelector(".days-icons4").innerHTML = `<i class="wi wi-day-rain"></i>`
        }
        else if(forcastIcons4 == "Haze") {
        document.querySelector(".days-icons4").innerHTML = `<i class="wi wi-day-haze"></i>`
        }
        else {
        document.querySelector(".days-icons4").innerHTML = `<i class="wi wi-night-clear"></i>`
        }

        // let backgroundImage = data.list[16].weather[0].main;
             
        //     if (backgroundImage == "Clouds")
        //      document.querySelector("#container").style ["background-image"] = url('images/winter_snow.jpg');
    },
        error: function(error){
         console.log(error)
       }
   })
} 

    
