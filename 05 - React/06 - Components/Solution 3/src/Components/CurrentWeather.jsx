// Functional Component
export default function CurrentWeather() {
  const weatherData = {
    city: 'New York',
    temperature: 22,
    conditions: 'Partly Cloudy',
    humidity: 60,
    windSpeed: 5,
  };

  return (
    <div>
      <h2>Functional Component: Current Weather</h2>
      <h3>{weatherData.city}</h3>
      <p>Temperature: {weatherData.temperature}°C</p>
      <p>Conditions: {weatherData.conditions}</p>
      <p>Humidity: {weatherData.humidity}%</p>
      <p>Wind Speed: {weatherData.windSpeed} m/s</p>
    </div>
  );
}
