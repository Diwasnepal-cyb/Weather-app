document.getElementById("getweatherButton").addEventListener("click", () => {
    const location = document.getElementById("locationInput").value;
    if (!location) {
        alert("Please enter a location");
        return;
    }
    const apikey = "e8eaaa023f6848f2a4b21640251806";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${location}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert("Location not found. Please try again.");
                return;
            }

            const weather = data.current;
            const resultDiv = document.getElementById("WeatherResult");
            resultDiv.innerHTML = `
                <p>Location: ${data.location.name}, ${data.location.country}</p>
                <p>Temperature: ${weather.temp_c}°C</p>
                <p>Condition: ${weather.condition.text}</p>
                <p>Humidity: ${weather.humidity}%</p>
            `;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("Failed to fetch weather data.");
        });
});