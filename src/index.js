import React from 'react'
import ReactDOM from 'react-dom'
import CurrentWeather from './components/CurrentWeather'
import WeatherCard from './components/WeatherCard'

function App()
{
  let [weatherData, setWeatherData] = React.useState([])
  let [currentWeather, setCurrentWeather] = React.useState({})
  let [location, setLocation] = React.useState([])

  React.useEffect(()=>
  {
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Findlay%2C%20OH?unitGroup=metric&key=HT984Q2C3RH6ZBESHCUGTV3N5&contentType=json")
    .then((data)=> data.json())
    .then((data)=>
    {
      setCurrentWeather((prev)=>
      {
        return data.currentConditions
      })
      setWeatherData((prev)=>
      {
        return data.days
      })
    })
  }, [location])

  let mappedWeatherData = []
  for(let counter = 0; counter < weatherData.length; counter++)
  {
    mappedWeatherData.push(<WeatherCard key={counter} {...weatherData[counter]}/>)
  }

  console.log(weatherData, currentWeather)
  return (
    <div>
      <CurrentWeather/>
      {mappedWeatherData}
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector("#root"))