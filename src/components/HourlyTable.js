import React from 'react'

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

    function getHourlyTable()
    {
        let hourlyMap = props.hours.map((temp)=>
        {
            let time = toStandardTime(temp.datetime)
            return (
                <div className="tableRow">
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
        <div id='hourlyTable'>
            {props && getHourlyTable()}
        </div>
    )
}

export default HourlyTable