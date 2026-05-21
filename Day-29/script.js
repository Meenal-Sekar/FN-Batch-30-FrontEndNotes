const result=document.querySelectorAll('.counter')   
const speed=200;



//syntax for setTimeout

//setTimeout(function, delay, param1, param2, ...);

result.forEach((counter)=>
{

    const updateCount=()=>
    {
        const target= +counter.getAttribute('data-target');    //60000 15000 9000 5000   target=60000

        const count = +counter.innerText;  //0 

        const inc = target/speed;   // 300        //0+300   300+300  = 600 +300 900  +300....

        console.log(inc)
        console.log(count)

        if( count <  target)
        {
            counter.innerText = count+inc;
             setTimeout(updateCount,10)

        }
    }

    updateCount();
})

