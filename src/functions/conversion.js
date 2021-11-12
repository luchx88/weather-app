export const conversion = (input) => {
  const todaysTemperature = document.querySelector('#todays-temperature')
  let tempToReplace = parseInt(todaysTemperature.innerHTML.match(/\d+/)[0])
  switch(input) {
    case 'celsius':
      tempToReplace = parseInt((tempToReplace - 32) * 5/9)
      break
    case 'farenheit':
      tempToReplace = parseInt((tempToReplace * 9/5) + 32)
      break
  }
  todaysTemperature.innerHTML = todaysTemperature.innerHTML.replace(/\d+/, tempToReplace.toString())
  console.log(todaysTemperature.innerHTML)
}