
const apiKey = "75e36e8eb9a6782a9d550200d65c2e5d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    // console.log("API Response:", data); // Log the API response

    if (response.ok) {
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/hr";
    } else {
        console.error("Error:", data.message);
        alert("An error occurred. Please try again later.");
    }
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png"
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }
    document.querySelector(".weather").style.display = "block"
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
