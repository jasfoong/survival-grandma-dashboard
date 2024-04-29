import {
  convertToCelcius, 
  minTwoDigits,
  timeConverter, 
  getRandomInRange,
  getWeather,
  description,
  temp,
  feelsLike,
  cloudy,
  wind,
  sunrise,
  sunset,
  weatherIcon,
  mapLocation
} from "./weather-api.js";

getWeather();

const tempGrandma = document.querySelector(".advice__card-front-temp");
const feelsLikeGrandma = document.querySelector(".advice__card-front-feels-like");
const cloudyGrandma = document.querySelector(".advice__card-front-cloudy");
const windGrandma = document.querySelector(".advice__card-front-wind");
const sunriseGrandma = document.querySelector(".advice__card-front-sunrise");
const sunsetGrandma = document.querySelector(".advice__card-front-sunset");


// if (temp < 5) {
//   tempGrandma.innerText = "It's freezing cold! Wrap yourself up like a little burrito, dear. Don’t forget your hat and mittens honey, we don’t want you catching a cold in this frosty weather!";
//   console.log(tempGrandma);
// } else if (temp >= 5 && temp < 10) {
//   tempGrandma.innerText =  "Time to break out the winter coat! It's bitter cold today, so stay bundled up. Where is your hat?";
// } else if (temp >= 15 && temp < 20) {
//   tempGrandma.innerText = "Put on your layers, pumpkin. Especially your hat. It's brisk out there, but you'll stay snug and warm.";
// } else if (temp >= 15 && temp < 20) {
//   tempGrandma.innerText = "Make sure to wear light, breathable clothes today. We don't want you overheating. A nice hat will help!";
// } else {
//   tempGrandma.innerText = "Don't forget your sunscreen and a wide-brimmed hat, dear. It's scorching out there!";
// };
