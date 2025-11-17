// Weather and Time functionality
function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('current-time');
    const dateElement = document.getElementById('current-date');
    
    // Format time
    const timeString = now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    // Format date
    const dateString = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    if (timeElement) timeElement.textContent = timeString;
    if (dateElement) dateElement.textContent = dateString;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime(); // Initial call

// Simple weather data (you can replace with a weather API)
function updateWeather() {
    // This is a placeholder - you can integrate with a weather API
    // For example: OpenWeatherMap, WeatherAPI, etc.
    const weatherData = {
        temp: 22,
        description: "Sunny",
        humidity: 65,
        wind: 15,
        location: "Johannesburg"
    };
    
    document.getElementById('temp').textContent = weatherData.temp;
    document.getElementById('weather-desc').textContent = weatherData.description;
    document.getElementById('humidity').textContent = weatherData.humidity + '%';
    document.getElementById('wind').textContent = weatherData.wind + ' km/h';
    document.getElementById('weather-location').textContent = weatherData.location;
}

// Initialize weather
updateWeather();

// Example with OpenWeatherMap API (uncomment and add your API key)

async function getWeather() {
    const apiKey = '15b7c720f81f42feaffd4c4fbb44c08b';
    const city = 'Johannesburg';
    
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        const data = await response.json();
        
        document.getElementById('temp').textContent = Math.round(data.main.temp);
        document.getElementById('weather-desc').textContent = data.weather[0].description;
        document.getElementById('humidity').textContent = data.main.humidity + '%';
        document.getElementById('wind').textContent = Math.round(data.wind.speed * 3.6) + ' km/h';
        document.getElementById('weather-location').textContent = data.name;
        
        // Update icon based on weather condition
        const icon = document.getElementById('weather-icon');
        const weatherMain = data.weather[0].main.toLowerCase();
        if (weatherMain.includes('cloud')) icon.className = 'fas fa-cloud';
        else if (weatherMain.includes('rain')) icon.className = 'fas fa-cloud-rain';
        else if (weatherMain.includes('clear')) icon.className = 'fas fa-sun';
        else if (weatherMain.includes('snow')) icon.className = 'fas fa-snowflake';
        
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}

getWeather();
