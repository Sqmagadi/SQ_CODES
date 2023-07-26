const apikey = "2a4671a0a6f9c95cd85ae404e3debd3f";

const weatherData = document.getElementById("data");
const cityInput = document.getElementById("city-input");
const formElement = document.querySelector("form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInput.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;

    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${data.wind.speed} m/s`,
    ];

    weatherData.querySelector(".icon").innerHTML = `<img src="${iconUrl}" alt="Weather Icon">`;
    weatherData.querySelector(".temperature").textContent = `${temperature}°C`;
    weatherData.querySelector(".description").innerHTML = description;

    weatherData.querySelector(".details").innerHTML = details
      .map((details) => `<div>${details}</div>`)
      .join("");

  } catch (error) {
    weatherData.querySelector(".icon").innerHTML = "";
    weatherData.querySelector(".temperature").textContent = "";
    weatherData.querySelector(".description").innerHTML = "Error. City not known";
    weatherData.querySelector(".details").innerHTML = "";
  }
}