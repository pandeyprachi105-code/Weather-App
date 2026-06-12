async function getWeather() {
    const city = document.getElementById("city").value;

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=04b71770db6a2be15f8786fd29f983b2&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("result").innerHTML =
        `${data.name}: ${data.main.temp}°C`;
}
