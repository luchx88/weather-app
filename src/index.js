import { displayMainSection } from "./functions/displayMainSection.js"
import { displaySecondarySection } from "./functions/displaySecondarySection.js"
import { locationNotFound } from "./functions/locationNotFound.js"
import { conversion } from "./functions/conversion.js"

const URL = `https://api.openweathermap.org/data/2.5/weather?q=`
const key = '&appid=0afbb77c8e062a32014294883b826aeb'

const locationInput = document.querySelector('#location-input')
const searchLocationButton = document.querySelector('#search-location-button')

searchLocationButton.addEventListener('click', () => getWeatherForLocation())


async function getWeatherForLocation() {

  const locationCity = locationInput.value

  const response = await fetch(URL+locationCity+key)

  if (response.status === 200) {
    const data = await response.json()
    console.log(data)
    displayMainSection(data)
    displaySecondarySection(data)
  } else {
    locationNotFound()
  }

}

const introLayer = document.querySelector('.intro-layer')
const welcomeButton = document.getElementById('welcome-button')

welcomeButton.addEventListener('click', () => {
  introLayer.classList.add('display-none')
})

// const data = {
//   "coord":{"lon":-0.1257,"lat":51.5085},
//   "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],
//   "base":"stations",
//   "main":{"temp":285.08,"feels_like":284.63,"temp_min":284.09,"temp_max":286.08,"pressure":1009,"humidity":88},
//   "visibility":10000,
//   "wind":{"speed":6.17,"deg":175},
//   "clouds":{"all":75},
//   "dt":1636744067,
//   "sys":{"type":2,"id":2019646,"country":"GB","sunrise":1636701215,"sunset":1636733754},
//   "timezone":0,
//   "id":2643743,
//   "name":"London",
//   "cod":200
// }

const celsiusButton = document.querySelector('#celsius')
const farenheitButton = document.querySelector('#farenheit')

celsiusButton.addEventListener('click', () => {
  if(celsiusButton.classList.contains('button-unactive')) {
    celsiusButton.classList.remove('button-unactive')
    farenheitButton.classList.add('button-unactive')
    conversion('celsius')
  }
})

farenheitButton.addEventListener('click', () => {
  if(farenheitButton.classList.contains('button-unactive')) {
    farenheitButton.classList.remove('button-unactive')
    celsiusButton.classList.add('button-unactive')
    conversion('farenheit')
  }
})



