import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faCloudRain } from '@fortawesome/free-solid-svg-icons'

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
    background: "#f8f9fa"
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
        if(condition.includes("sun") || condition.includes("Sun"))
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
        if(condition.includes("sun") || condition.includes("Sun"))
        {
            return (<FontAwesomeIcon icon={faCloudSun} fontSize={80}/>)
        }
        else if(condition.includes("rain") || condition.includes("Rain"))
        {
            return (<FontAwesomeIcon icon={faCloudRain} fontSize={80}/>)
        }
        else if(condition.includes("cloud") || condition.includes("Cloud"))
        {
            return (<i className="fas fa-clouds"></i>)
        }
        else if(condition.includes("storm") || condition.includes("stormy"))
        {
            return (<i className="fas fa-thunderstorm"></i>)
        }
        else if(condition.includes("ice") || condition.includes("Ice"))
        {
            return (<i className="fas fa-cloud-hail-mixed"></i>)
        }
        else if(condition.includes("snow") || condition.includes("Snow"))
        {
            return (<i className="fas fa-cloud-snow"></i>)
        }
        else{
            return (<i className="fas fa-clouds"></i>)
        }
    }
}

export {renderTheme, renderIcon}