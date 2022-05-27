import React from 'react'
import ReactDOM from 'react-dom'
import CurrentWeather from './components/CurrentWeather'
import WeatherCard from './components/WeatherCard'

function App()
{
  let [weatherData, setWeatherData] = React.useState([])
  let [location, setLocation] = React.useState([])
  let [activeData, setActiveData] = React.useState({})

  React.useEffect(()=>
  {
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Findlay%2C%20OH?unitGroup=metric&key=HT984Q2C3RH6ZBESHCUGTV3N5&contentType=json")
    .then((data)=> data.json())
    .then((data)=>
    {
      setWeatherData((prev)=>
      {
        let stripped = data.days
        let count = 0
        for(let temp of stripped)
        {
          temp.front = true
          temp.id = count
          count++
        }
        return stripped
      })
      setActiveData((prev)=>
      {
        let current = data.days[0]
        current.front = true
        current.id = 0
        return current
      })
    })
  }, [location])

  function changeCard(id)
  {
    console.log(id)
    setWeatherData((arr)=>
    {
      let newArray = []
      for(let counter = 0; counter < arr.length; counter++)
      {
        if(arr[counter].id === id)
        {
          
          arr[counter].front = !arr[counter].front
          newArray.push(arr[counter])
        }
        else
        {
          newArray.push(arr[counter])
        }
      }
      return newArray
    })
    
  }

  function newActiveData(id)
  {
    setActiveData((prev)=>
    {
      let returnObj;
      for(let temp of weatherData)
      {
        if(id === temp.id)
        {
          returnObj = temp
        }
      }
      return returnObj
    })
  }

  let mappedWeatherData = []
  for(let counter = 1; counter < 6; counter++)
  {
    mappedWeatherData.push(<WeatherCard key={counter} {...weatherData[counter]}toggle={()=>changeCard(weatherData[counter].id)} changeCurrent={()=>newActiveData(weatherData[counter].id)}/>)
  }


  return (
    <div className='colFlex'>
      <CurrentWeather {...activeData} />
      <div id='cardRow'>
        {mappedWeatherData}
      </div>
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector("#root"))