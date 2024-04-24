// empty array set to pull data out of async function
export let weatherData = [];

const kelvinToCelcius = 273.15;
const celcius = "°C";

async function getWeather() {
    try {
        // latitude and longitude for the arctic - seperated for possible change of location
        const lat = 76.2506;
        const lon = 100.1140;
        const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=`;
        const apiKey = "877660ad03b7399dce36c1836b27e0b0";
        const response = await axios.get(baseUrl + apiKey);
        weatherData = response.data;

        // find elements
        const description = document.querySelector(".dash__description");
        const temp = document.querySelector(".dash__temp");
        const feelsLike = document.querySelector(".dash__feels-like");
        const cloudy = document.querySelector(".dash__cloudy");
        const sunrise = document.querySelector(".dash__sunrise");
        const sunset = document.querySelector(".dash__sunset");
        const weatherIcon = document.querySelector(".dash__icon");

        // insert data
        description.innerText = `The weather today will mainly be ${response.data.weather[0].description}`;
        // temp in kelvins need to be converted and rounded
        temp.innerText = Math.round(response.data.main.temp - kelvinToCelcius) + celcius;
        feelsLike.innerText = Math.round(response.data.main.feels_like - kelvinToCelcius) + celcius;
        cloudy.innerText = response.data.clouds.all;

        // convert dates
        function timeConverter(UNIX_timestamp){
            const timestamp = new Date(UNIX_timestamp * 1000);
            const hour = timestamp.getHours();
            const min = timestamp.getMinutes();
            const time = hour + ':' + min;
            return time;
          }
        sunrise.innerText = timeConverter(response.data.sys.sunrise);
        sunset.innerText = response.data.sys.sunset;
        weatherIcon.src = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    } catch (error) {
        console.error();
    }
};

getWeather();
