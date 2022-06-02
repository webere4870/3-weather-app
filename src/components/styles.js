import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faCloudRain, faCloud, faCloudBolt, faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons'

let cloudStyle = {
    background: "#007bff"
}

let rainStyle = {
    background: "#6610f2"
}

let sunStyle = {
    background: "#ffc107"
}

let snowStyle = {
    background: "#007bff"
}

let iceStyle = {
    background: "#17a2b8"
}

let stormStyle = {
 background: "#343a40"
}


function renderTheme(condition)
{
    if(condition)
    {
        if(condition.includes("sun") || condition.includes("Sun") || condition.includes("clear") || condition.includes("Clear"))
        {
            return sunStyle
        }
        else if(condition.includes("rain") || condition.includes("Rain"))
        {
            return rainStyle
        }
        else if(condition.includes("cloud") || condition.includes("Cloud"))
        {
            return cloudStyle
        }
        else if(condition.includes("storm") || condition.includes("stormy"))
        {
            return stormStyle
        }
        else if(condition.includes("ice") || condition.includes("Ice"))
        {
            return iceStyle
        }
        else if(condition.includes("snow") || condition.includes("Snow"))
        {
            return snowStyle
        }
        else{
            return cloudStyle
        }
    }

}


function renderIcon(condition)
{
    if(condition)
    {
        if(condition.includes("sun") || condition.includes("Sun") || condition.includes("clear") || condition.includes("Clear"))
        {
            return (<FontAwesomeIcon icon={faCloudSun} fontSize={80}/>)
        }
        else if(condition.includes("rain") || condition.includes("Rain"))
        {
            return (<FontAwesomeIcon icon={faCloudRain} fontSize={80}/>)
        }
        else if(condition.includes("cloud") || condition.includes("Cloud"))
        {
            return (<FontAwesomeIcon icon={faCloud} fontSize={80}/>)
        }
        else if(condition.includes("storm") || condition.includes("stormy"))
        {
            return (<FontAwesomeIcon icon={faCloudBolt} fontSize={80}/>)
        }
        else if(condition.includes("ice") || condition.includes("Ice"))
        {
            return (<FontAwesomeIcon icon={faCloudShowersHeavy} fontSize={80}/>)
        }
        else if(condition.includes("snow") || condition.includes("Snow"))
        {
            return (<FontAwesomeIcon icon={faCloudRain} fontSize={80}/>)
        }
        else{
            return (<FontAwesomeIcon icon={faCloud} fontSize={80}/>)
        }
    }
}

export {renderTheme, renderIcon}