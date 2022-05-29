import React from 'react'
import ReactDOM, { render } from 'react-dom'
import CurrentWeather from './components/CurrentWeather'
import renderTheme from './components/styles'

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
  let [location, setLocation] = React.useState([])
  let [activeData, setActiveData] = React.useState({})

  let backgroundStyling = 
  {}

 React.useEffect(()=>
 {
  if(weatherData)
  {
    setActiveData(weatherData[0])
  }
 },[weatherData])

  React.useEffect(()=>
  {
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Findlay%2C%20OH?unitGroup=metric&key=HT984Q2C3RH6ZBESHCUGTV3N5&contentType=json")
    .then((data)=> data.json())
    //err
    .then((datar)=>
    {
      let data = {location: "findlay", days: [{datetime: '2022-05-28', conditions: 'sun'},{datetime: '2022-05-29', conditions: 'cloud'}, {datetime: '2022-05-30', conditions: 'rain'}, {datetime: '2022-05-31', conditions: 'snow'}, {datetime: '2022-06-01', conditions: 'ice'},]}
      console.log(data)
      let finalArray = []
      setWeatherData((prev)=>
      {
        for(let counter = 0; counter < data.days.length; counter++)
        {
          data.days[counter].id = counter
          finalArray.push(data.days[counter])
        }
        console.log(finalArray)
        return finalArray
      })
      // setActiveData((prev)=>
      // {
      //   let current = weatherData[0]
      //   console.log("Current", current)
      //   return current
      // })
    })
  }, [])
  // function changeCard(id)
  // {
  //   setWeatherData((arr)=>
  //   {
  //     let newArray = []
  //     for(let counter = 0; counter < arr.length; counter++)
  //     {
  //       if(arr[counter].id === id)
  //       {
          
  //         arr[counter].front = !arr[counter].front
  //         newArray.push(arr[counter])
  //       }
  //       else
  //       {
  //         newArray.push(arr[counter])
  //       }
  //     }
  //     return newArray
  //   })
    
  // }

  // function newActiveData(id)
  // {
  //   setActiveData((prev)=>
  //   {
  //     let returnObj;
  //     for(let temp of weatherData)
  //     {
  //       if(id === temp.id)
  //       {
  //         returnObj = temp
  //       }
  //     }
  //     return returnObj
  //   })
  // }

  function changeActive(changeCount)
  {
    console.log("here")
    let position;
    setActiveData((prev)=>
    {
      position = prev.id
      position += changeCount
      console.log(position)
      if(position < 0 || position == weatherData.length)
      {
        return prev
      }
      else{
        console.log("weatherd",weatherData[position])
        return weatherData[position]
      }
    })
  }


  return (
    <div className='colFlex' style={activeData && renderTheme(activeData.conditions)}>
      <CurrentWeather {...activeData} />
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