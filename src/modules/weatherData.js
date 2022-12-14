
async function getWeatherData (city) {
  console.log('city ', city)
  try {
    const response = await fetch(`
        https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d8b05af140b4c2d5225135972189dc7a`, { mode: 'cors' })
    let weatherData = await response.json()
    console.log(weatherData)
    console.log('weather ', weatherData.weather[0].description)
    console.log('temp ', weatherData.main)
    const weatherDataObj = {
      location: weatherData.name,
      temp: weatherData.main.temp,
      sky: weatherData.weather[0].description,
      wind: weatherData.wind.speed,
      feel: weatherData.main.feels_like,
      humidity: weatherData.main.humidity,
      direction: weatherData.wind.deg
    }
    weatherData = weatherDataObj
    return weatherData
  } catch (err) {
    alert('please enter a valid location')
    return null
  }
}

export default getWeatherData
