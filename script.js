async function getWeather() {
    const city = document.getElementById("city").value;

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dfeca8340fc4bb191206df5a0e2cf586&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("result").innerHTML =
        `${data.name}: ${data.main.temp}°C`;
}