const inputContainer = document.querySelector('.search-bar-container__input-container')
const locationInput = document.querySelector('#location-input')

const removeListen = (event) => {
  console.log(event)
  if (event.data) {
    inputContainer.classList.remove('search-bar-container__input-container--not-found')
    locationInput.removeEventListener('input', removeListen)
    locationInput.placeholder = 'search location'
  }
}

export const locationNotFound = () => {
  inputContainer.classList.add('search-bar-container__input-container--not-found')
  locationInput.value = ''
  locationInput.placeholder = 'Location Not Found! Try again'
  locationInput.addEventListener('input', removeListen)
}
