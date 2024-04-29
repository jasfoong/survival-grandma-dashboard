// empty array set to pull data out of async function
export let weatherData = [];

// temp in kelvins need to be converted and rounded
export function convertToCelcius(kelvin) {
    const celcius = "°C";
    const converted = Math.round(kelvin - 273.15) + celcius;
    return converted; 
};

export function minTwoDigits(n) {
    return (n < 10 ? '0' : '') + n;
  };

// convert time
export function timeConverter(UNIX_timestamp){
    const timestamp = new Date(UNIX_timestamp * 1000);
    const hour = minTwoDigits(timestamp.getHours());
    const min = minTwoDigits(timestamp.getMinutes());
    const time = hour + ':' + min;
    return time;
  }

export function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

// find elements
export const lastUpdate = document.querySelector(".header__update");
export const description = document.querySelector(".header__description");
export const temp = document.querySelector(".advice__temp");
export const feelsLike = document.querySelector(".advice__feels-like");
export const cloudy = document.querySelector(".advice__cloudy");
export const wind = document.querySelector(".advice__wind");
export const sunrise = document.querySelector(".advice__sunrise");
export const sunset = document.querySelector(".advice__sunset");
export const weatherIcon = document.querySelector(".advice__icon");
export const mapLocation = document.querySelector(".advice__map");

export async function getWeather() {
    try {
        // latitude and longitude for the arctic - seperated for possible change of location
        // const lat = 76.2506;
        // const lon = 100.1140;

        // latitude -90 to 90
        const lat = getRandomInRange(-90, 90, 5);
        // longitude -180 to 180
        const lon = getRandomInRange(-180, 180, 5);

        const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=`;
        const apiKey = "877660ad03b7399dce36c1836b27e0b0";
        const response = await axios.get(baseUrl + apiKey);
        console.log(response);
        weatherData = response.data;
        console.log(weatherData);

        // insert data
        lastUpdate.innerText = Date().toLocaleString();
        description.innerText = `The weather here will mainly be ${response.data.weather[0].description}.`;

        temp.innerText = convertToCelcius(response.data.main.temp);
        feelsLike.innerText = convertToCelcius(response.data.main.feels_like);
        cloudy.innerText = `The sky is covered with ${response.data.clouds.all}% clouds`;
        wind.innerText = `The wind speed is ${response.data.wind.speed} m/s`;

        sunrise.innerText = timeConverter(response.data.sys.sunrise);
        sunset.innerText = timeConverter(response.data.sys.sunset);
        weatherIcon.src = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

        mapLocation.href = `https://www.google.com/maps/@${lat},${lon},15z?entry=ttu`;
    
    } catch (error) {
        console.error();
    }
};

