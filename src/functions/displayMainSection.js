const kelvinCelsius = (kelvin) => {
  return Math.round(kelvin - 273.15)
}

const todaysWeatherContainer = document.querySelector('#todays-weather-container')

export const displayMainSection = (data) => {
  todaysWeatherContainer.innerHTML = ''
  todaysWeatherContainer.classList.remove('display-none')

  const backgroundImage = document.createElement('span')
  backgroundImage.classList.add('clouds-background')
  const backgroundImageLayer = document.createElement('span')
  backgroundImage.appendChild(backgroundImageLayer)
  
  let weatherImgSrc = ''
  switch(data.weather[0].description) {
    case 'clear sky':
      weatherImgSrc = 'Clear.png'
      break
    case 'broken clouds':
    case 'scattered clouds':
    case 'overcast clouds':
    case 'few clouds':
      weatherImgSrc = 'LightCloud.png'
      break
    case 'light rain':
    case 'light intensity drizzle':
    case 'moderate rain':
      weatherImgSrc = 'LightRain.png'
      break
    case 'light snow':
      weatherImgSrc = 'Snow.png'
      break
  }

  const image = document.createElement('img')
  image.src = `./src/assets/imgs/${weatherImgSrc}`
  // `./assets/imgs/${weatherImgSrc}`
  image.classList.add('main-card__img')
  
  const mainTemp = document.createElement('h1')
  mainTemp.textContent = kelvinCelsius(data.main.temp) // <---------data
  const mainTempDeg = document.createElement('span')
  mainTempDeg.textContent = '°C'
  mainTemp.appendChild(mainTempDeg)
  mainTemp.classList.add('todays-temperature')
  mainTemp.id = 'todays-temperature'
  
  const climate = document.createElement('p')
  climate.textContent = data.weather[0].main
  climate.classList.add('todays-weather')

  const date = document.createElement('p')
  date.classList.add('todays-date')
  const newDate = new Date()
  date.textContent = `Today . ${newDate.toDateString().match(/\w+/)[0]}. ${newDate.getDate()} ${newDate.toDateString().split(' ')[1]}`
  
   // <---------data
  
  const location = document.createElement('p')
  location.textContent = data.name // <---------data
  location.classList.add('location')
  const locationImg = document.createElement('span')
  location.insertAdjacentElement('afterbegin',locationImg)

  
  todaysWeatherContainer.append(image, mainTemp, climate, date, location, backgroundImage)
}