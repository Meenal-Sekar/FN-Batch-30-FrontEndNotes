
const days=document.querySelector('#days')
const hours=document.querySelector('#hours')
const minutes=document.querySelector('#minutes')
const seconds=document.querySelector('#seconds')


const currentYear=new Date().getFullYear();
console.log(currentYear)

const nextYear=currentYear+1;

console.log(nextYear)

let newYearTime=new Date(`jan 01 ${nextYear} 00:00:00`);//01-01-27

    function update()
    {

    
    let currentTime=new Date()
    let diff= newYearTime - currentTime


  const d1= Math.floor(diff/1000/60/60/24);
   const h1=Math.floor(diff/1000/60/60) % 24;
    const m1=Math.floor(diff/1000/60) % 60;
    const s1=Math.floor(diff/1000) % 60

    days.innerHTML=d1 < 10 ? "0"+d1 : d1
    hours.innerHTML=h1 < 10 ? "0"+h1 : h1
    minutes.innerHTML=m1 < 10 ? "0"+m1 : m1

    seconds.innerHTML=s1 < 10 ? "0"+s1 : s1
    }

    setInterval(update,1000)