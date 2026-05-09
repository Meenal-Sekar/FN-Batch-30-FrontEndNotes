
function displayTime()
{
const date = new Date()

let hours=date.getHours();    // 11
let minutes=date.getMinutes(); 
let  seconds=date.getSeconds();
let session="AM"

if(hours >= 12)
{
    session = "PM"
}

 hours = hours < 10  ? "0"+hours : hours;
 minutes = minutes < 10  ? "0"+minutes : minutes;
 seconds = seconds < 10  ? "0"+seconds : seconds;

const result=`${hours}:${minutes}:${seconds} ${session}`;  
document.getElementById('time').innerText = result;

}

// call the funciton with every one section
setInterval(displayTime,1000)

const daycalculate=()=>
{
    const day=Number(new Date().getDay());

    switch(day)
    {
        case 0:
            document.getElementById('day').innerText = "sunday";
            break;
        case 1:
            document.getElementById('day').innerText = "Monday";
            break;
        case 2:
            document.getElementById('day').innerText = "Tuesday";
            break;
        case 3:
            document.getElementById('day').innerText = "Wednesday";
            break;
        case 4:
            document.getElementById('day').innerText = "Thursday";
            break;
        case 5:
            document.getElementById('day').innerText = "Friday"
            break;
        case 6:
            document.getElementById('day').innerText="Saturday"
            break;
        default:
            console.log('Not predicted');
    }
}


daycalculate();

