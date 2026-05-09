function oddoreven()
{
    let a1=Number(document.getElementById('t1').value)

    if(a1   % 2 == 0)
    {
        document.getElementById('t2').value="It is even"
    }
    else{
        document.getElementById('t2').value="It is odd"
    }
}

// get the t1 value from html part
// create funciton oddoreven()
// return to html t3 variable