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
  const displayLocation = document.querySelector('#location')
  const displayTemp = document.querySelector('#temp')
  const displayFeel = document.querySelector('#feel')
  const displayHumid = document.querySelector('#humid')
  const displaySky = document.querySelector('#sky')
  const displayWind = document.querySelector('#wind')
  const displayDirection = document.querySelector('#direction')

  displayLocation.innerHTML = data.location
  displayTemp.innerHTML = (Math.floor(data.temp - 273.15)) + '°C'
  displayFeel.innerHTML = 'feels like ' + (Math.floor(data.temp - 273.15)) + '°C'
  displayHumid.innerHTML = 'humidity ' + data.humidity + '%'
  displaySky.innerHTML = data.sky
  displayWind.innerHTML = data.wind + ' mph'
  displayDirection.style.transform = 'rotate(' + data.direction + 'deg)'
}
