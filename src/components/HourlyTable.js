import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import timeConversion from './utils'
import { renderIcon } from './styles'

function tempConversion(temp)
{
    return Math.floor(((9/5)*temp + 32))
}

function toStandardTime(militaryTime) {
    militaryTime = militaryTime.split(':');
    return (militaryTime[0].charAt(0) == 1 && militaryTime[0].charAt(1) > 2) ? (militaryTime[0] - 12) + ':' + militaryTime[1] + ':' + militaryTime[2] + ' P.M.' : militaryTime.join(':') + ' A.M.'
}

function HourlyTable(props)
{

    let counter = 0
    for(let temp of props.hours)
    {
        temp.id = counter
        counter++
    }
    let [visibleHours, setVisibleHours] = React.useState(props ? [props.hours[0],props.hours[1], props.hours[2], props.hours[3]] : null)
    let mapCount = -1
    let visibleMap = visibleHours.map((temp)=>
    {
        mapCount++
        return (<div className='tableRow' key={mapCount}>
        <h1>{timeConversion(temp.datetime)}</h1>
        <div className="col2"><div className="subCol">{renderIcon(temp.conditions)}</div><h1>{tempConversion(temp.temp)}</h1></div>
        </div>)
        
    })

    function changeVisible(deviate)
    {
        setVisibleHours((prev)=>
        {
            console.log(prev)
            let position = prev[0].id
            position += deviate 
            if(position == -1 || position == 21)
            {
                return prev
            }
            else
            {
                let newArr = []
                if(deviate == 1)
                {
                    for(let start = position + 3; start < position + 7; start++)
                    {
                        newArr.push(props.hours[start])
                    }
                }
                else
                {
                    for(let start = position - 3; start <= position; start++)
                    {
                        newArr.push(props.hours[start])
                    }
                }
                return newArr
            }
        })
    }

    function getHourlyTable()
    {
        let counter = 0
        let hourlyMap = props.hours.map((temp)=>
        {
            counter++
            let time = toStandardTime(temp.datetime)
            return (
                
                <div key={counter} id={counter} className="tableRow">
                    <div className='col1'>
                        <h3>{time}</h3>
                    </div>
                    <div className='col2'>
                        <h3>{tempConversion(temp.temp)}</h3>
                    </div>
                </div>
            )
        })

        return hourlyMap
    }

    return (
        <div id='wholeTable' className='columnFlex'>
            <h1>Hourly Forecast</h1>
            <div className='rowFlex'>
                <div className='hoverable' onClick={()=> changeVisible(-1)}>
                    <FontAwesomeIcon style={{margin: "0 20px"}} icon={faArrowCircleLeft} fontSize={40}/>
                </div>
                <div id='hourlyTable'>
                    {props && visibleMap}
                </div>
                <div className='hoverable' onClick={()=>changeVisible(1)}>
                    <FontAwesomeIcon style={{margin: "0 20px"}} icon={faArrowCircleRight} fontSize={40}/>
                </div>
            </div>
        </div>
    )
}

export default HourlyTable