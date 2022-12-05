import _ from 'lodash'
// import test from './modules/input'
import getWeatherData from './modules/weatherData'

const form = document.querySelector('#form')
const locationInput = document.querySelector('#location-input')
runApp('glasgow')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  runApp(locationInput.value)
  locationInput.value = ''
})

async function runApp (location) {
  console.log('location ', location)
  const data = await getWeatherData(location)
  console.log('index', data)
  renderDisplay(data)
}

function renderDisplay (data) {
  const display_location = document.querySelector('#location')
  const display_temp = document.querySelector('#temp')
  const display_sky = document.querySelector('#sky')
  const display_wind = document.querySelector('#wind')

  display_location.innerHTML = data.location
  display_temp.innerHTML = data.temp
  display_sky.innerHTML = data.sky
  display_wind.innerHTML = data.wind
}
