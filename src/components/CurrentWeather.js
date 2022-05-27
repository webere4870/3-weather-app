import React from 'react'

function tempConversion(temp)
{
    return Math.floor(((9/5)*temp + 32))
}

function CurrentWeather(props)
{
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
        <div>
            <ul>
                {mapData}
            </ul>
        </div>
    )
}


export default CurrentWeather