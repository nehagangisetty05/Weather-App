let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let apiKey = "4d11af8fde755126d562788f710518e1";

let searchBtn = document.querySelector(".search");
let cityName = document.querySelector(".searchinput");

async function checkWeather(city){
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".errorMsg").style.display = "block";
        document.querySelector(".weatherContainer").style.display = "none"
        document.querySelector(".sImage").style.display = "none"
    }
    else {
        let data = await response.json();

        console.log(data);

        if(data.weather[0].main == "Clouds")
        {
            document.querySelector(".weatherIcon").src = "./asset/clouds.jpeg";
            document.querySelector(".sImage").src = "./asset/cloudsS.png"
        }
        else if(data.weather[0].main == "Clear")
        {
            document.querySelector(".weatherIcon").src = "./asset/clear.png";
            document.querySelector(".sImage").src = "./asset/clearS.jpg"
        }
        else if(data.weather[0].main == "Rain")
        {
            document.querySelector(".weatherIcon").src = "./asset/rain.png";
            document.querySelector(".sImage").src = "./asset/rainyS.png"
        }
        else if(data.weather[0].main == "Drizzle")
        {
            document.querySelector(".weatherIcon").src = "./asset/drizzle.png";
            document.querySelector(".sImage").src = "./asset/drizzleS.png"
        }
        else if(data.weather[0].main == "Strom")
        {
            document.querySelector(".weatherIcon").src = "./asset/strom.png";
            document.querySelector(".sImage").src = "./asset/stromS.png"
        }
        else if(data.weather[0].main == "Mist")
        {
            document.querySelector(".weatherIcon").src = "./asset/mist.png";
            document.querySelector(".sImage").src = "./asset/mistS.png"
        }
        else if(data.weather[0].main == "Sun")
        {
            document.querySelector(".weatherIcon").src = "./asset/sunny.png";
            document.querySelector(".sImage").src = "./asset/sunnyS.png"
        }

        document.querySelector(".temperature").innerHTML=`${Math.round(data.main.temp)}°C`;
        document.querySelector(".cityName").innerHTML=`${data.name}`;
        document.querySelector(".humidity").innerHTML=`${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML=`${data.wind.speed}km/hr`

        document.querySelector(".weatherContainer").style.display = "block"
        document.querySelector(".weatherContainer").style.display = "flex"
        document.querySelector(".sImage").style.display = "block"
        
        document.querySelector(".errorMsg").style.display = "none";
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(cityName.value)
})