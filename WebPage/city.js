
const API_KEY = "b9c50f3950a85c1723ef95d31f62fae5";
const form = document.getElementById('searchCity');
const SB = document.getElementById('search');

document.getElementById("cityButton").onclick= async (e) => {
  e.preventDefault()

  const citySearch = document.getElementById('searchBox').value
  const citySearched = cityList.find(city => city.name === citySearch)
  
  fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&id=${citySearched.id}&appid=${API_KEY}`
  )
  .then((response) => response.json())
  .then((data) => setWeatherData(data));
};

const setWeatherData = (data) => {

  const weatherData = {
    location: data.name,
    description: data.weather[0].main,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    temperature: data.main.temp,
    date: getDate(),
  };
  Object.keys(weatherData).forEach((key) => {
    document.getElementById(key).textContent = weatherData[key];
  });
  

  switch (data.weather[0].main) {
    case "Clear":
      iconSun.src = "animated/day.svg";
      break;
    case "Thunderstorm":
      iconSun.sr = "animated/thunder.svg";
      break;
    case "Drizzle":
      iconSun.src = "animated/rainy.2.svg";
      break;
    case "Clouds":
      iconSun.src = "animated/cloudy-day-1.svg";
      break;
    case "Rain":
      iconSun.src = "animated/rainy-1.svg";
      break;
  }
};
const getDate = () => {
  let date = new Date();
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};



let iconSun = document.getElementById("iconSun");



