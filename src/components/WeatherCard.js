import React from 'react'

function tempConversion(temp)
{
    return Math.floor(((9/5)*temp + 32))
}

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



function WeatherCard(props)
{
    let temp = (<div>
            <h1>High {tempConversion(props.tempmax)}</h1>
            <h1>Low {tempConversion(props.tempmin)}</h1>
            <h1>{returnDay(props.datetime)}</h1>
    </div>)
    return (
        <div className='weatherCard' onClick={props.changeCurrent} >
            {props.front == true ? temp : null}
        </div>
    )
}

export default WeatherCard