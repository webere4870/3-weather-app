import { counter } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import ReactDOM, { render } from 'react-dom'
import CurrentWeather from './components/CurrentWeather'
import {renderTheme, renderIcon} from './components/styles'
import Form from './components/Form'

function returnDay(dateTime)
{
    let date = new Date(dateTime)
    let day = date.getDay()
    switch(day)
    {
        case 0: return "Monday"
        case 1: return "Tuesday"
        case 2: return "Wednesday"
        case 3: return "Thursday"
        case 4: return "Friday"
        case 5: return "Saturday"
        case 6: return "Sunday"    
    } 
}

function App()
{
  let [weatherData, setWeatherData] = React.useState()
  let [activeHourly, setActiveHourly] = React.useState()
  let [location, setLocation] = React.useState([])
  let [activeData, setActiveData] = React.useState({})
  let [city, setCity] = React.useState("Findlay")
  let [state, setState] = React.useState("OH")


 React.useEffect(()=>
 {
  if(weatherData)
  {
    weatherData[0].hourlyOn = false
    setActiveData(weatherData[0])
  }
 },[weatherData, city, state])

  React.useEffect(()=>
  {
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+city+"%2C%20"+ state +"?unitGroup=metric&key=HT984Q2C3RH6ZBESHCUGTV3N5&contentType=json")
    .then((data)=> data.json())
    //err
    .then((data)=>
    {
      // let data = {location: "findlay", days: [{datetime: '2022-05-28', conditions: 'sun'},{datetime: '2022-05-29', conditions: 'cloud'}, {datetime: '2022-05-30', conditions: 'rain'}, {datetime: '2022-05-31', conditions: 'snow'}, {datetime: '2022-06-01', conditions: 'ice'},]}
      let finalArray = []
      for(let i = 0; i < data.length; i++)
      {
        for(let j = 0; j < data.days[i].hours.length; j++)
        {
          data.days[i].hours[j].id = j
        }
      }
      setWeatherData((prev)=>
      {
        for(let counter = 0; counter < data.days.length; counter++)
        {
          data.days[counter].id = counter
          finalArray.push(data.days[counter])
        }
        return finalArray
      })
    })
    .catch((err)=>
    {
      console.log("Location not found")
    })
  }, [city, state])


  function changeActive(changeCount)
  {
    let position;
    setActiveData((prev)=>
    {
      position = prev.id
      position += changeCount
      if(position < 0 || position == weatherData.length)
      {
        return prev
      }
      else{
        weatherData[position].hourlyOn = false
        return weatherData[position]
      }
    })
  }

  function toggleHourly()
  {
    setActiveData((prev)=>
    {
      let obj = {}
      obj = {...prev}
      obj.hourlyOn = !prev.hourlyOn
      return obj
    })
  }

  function changeInput(event)
  {
    event.target.name == "city" ? setCity(event.target.value) : setState(event.target.value)
  }

  console.log(city, state)

  return (
    <div className='colFlex' style={activeData && renderTheme(activeData.conditions)}>
      <Form toggleInput={changeInput} city={city} state={state}/>
      <CurrentWeather {...activeData} getIcon={()=>renderIcon(activeData.conditions)} toggleData={toggleHourly}/>
      <div id="cardRow">
        {activeData && <h1>{returnDay(activeData.datetime)}</h1>}
      </div>
      <div id='arrowRow'>
        <div className='arrow' onClick={()=> changeActive(-1)}>
          <i className="fas fa-arrow-circle-left"></i>
        </div>
        <div className='arrow' onClick={()=> changeActive(1)}>
        <i className="fas fa-arrow-circle-right"></i>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector("#root"))