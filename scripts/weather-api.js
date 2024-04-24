// empty array set to pull data out of async function
export let weatherData = [];

async function getWeather() {
    try {
        // latitude and longitude for the arctic - seperated for possible change of location
        const lat = 76.2506;
        const lon = 100.1140;
        const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=`;
        const apiKey = "877660ad03b7399dce36c1836b27e0b0";
        const response = await axios.get(baseUrl + apiKey);
        weatherData = response.data;
    } catch (error) {
        console.error();
    }
};

// async functions must be run with an async function so it can be sequential
async function storeWeatherData () {
    await getWeather();
    console.log(weatherData);
};

storeWeatherData ();
