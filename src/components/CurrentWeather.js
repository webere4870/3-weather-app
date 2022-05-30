import React from 'react'
import HourlyTable from './HourlyTable'

function tempConversion(temp)
{
    return Math.floor(((9/5)*temp + 32))
}

function CurrentWeather(props)
{
    console.log(props,"props")
    let mapData
    if(props.hours)
    {
        let counter = -1
        mapData = props.hours.map((temp)=>
        {
            counter++
            return (<li key={counter}>{tempConversion(temp.temp)}</li>)
            
        })
    }

    
    return(
        <div id='iconFix' className='columnFlex'>
            {props.hourlyOn == true? <HourlyTable {...props} />: <div className='columnFlex'>{props.getIcon()}
            <h3>{props && props.description}</h3>
            {props && <h1>{tempConversion(props.tempmin)} | {tempConversion(props.tempmax)}</h1>} </div>}
            {props && <button onClick={props.toggleData}>See Hourly</button>}
        </div>
    )
}


export default CurrentWeather