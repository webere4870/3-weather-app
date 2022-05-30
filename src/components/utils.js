function timeConversion(time)
{
    let splitString = time.split(":")
    let necessaryValue = splitString[0]
    let intParse = parseInt(necessaryValue)
    let amOrPM = intParse / 12 >= 1 ? "PM" : "AM"
    let number = intParse % 12
    if(number == 0)
    {
        number = 12
    }
    console.log(number)
    return (number + " " + amOrPM)
}

export default timeConversion