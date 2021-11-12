
const secondarySection =document.querySelector('#secondary-section')
const windSpan = document.querySelector('#wind-span')
const windSubtitle = document.querySelector('#wind-subtitle')
const humiditySpan = document.querySelector('#humidity-span')
const humiditySubBar = document.querySelector('#humidity-sub-bar')
const visibilitySpan = document.querySelector('#visibility-span')
const airPressureSpan = document.querySelector('#air-pressure-span')

const windDirection = (deg) => {
  if (deg <= 10 && deg >= 0 || deg >= 350 && deg <= 360) return 'N'
  if (deg <= 100 && deg >= 80) return 'E'
  if (deg <= 190 && deg >= 170) return 'E'
  if (deg <= 280 && deg >= 270) return 'E'
  if(deg > 0 && deg <= 90) {
    return 'ENE'
  }
  if(deg > 90 && deg <= 180) {
    return 'ESE'
  }
  if(deg > 180 && deg <= 270) {
    return 'WSW'
  }
  if(deg > 270 && deg <= 360) {
    return 'WNW'
  }
}

export const displaySecondarySection = (data) => {
  secondarySection.classList.remove('display-none')
  windSpan.textContent = data.wind.speed
  windSubtitle.innerHTML = windDirection(data.wind.deg)
  const windSubSpan = document.createElement('span')
  windSubSpan.style = `transform: rotate(${-(data.wind.deg) + 90}deg);`
  windSubtitle.insertAdjacentElement('afterbegin', windSubSpan)
  console.log(windDirection(data.wind.deg))

  humiditySpan.textContent = data.main.humidity
  humiditySubBar.style = `width: ${data.main.humidity*230/100}px;`

  visibilitySpan.textContent = data.visibility/1000

  airPressureSpan.textContent = data.main.pressure
}


