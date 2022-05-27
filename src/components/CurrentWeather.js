import React from 'react'

function CurrentWeather(props)
{
    console.log(props)
    return(
        <div>
            <h1>{props.conditions}</h1>
        </div>
    )
}


export default CurrentWeather