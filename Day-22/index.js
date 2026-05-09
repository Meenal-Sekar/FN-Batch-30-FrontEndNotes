

function compare()
{
    let a=document.getElementById('t1').value 
    let b=document.getElementById('t2').value 
    let c=document.getElementById('t3').value 

    if(a > b  &&   a > c)
{
   document.getElementById('t4').value="A is big"
}
else if( b > a   && b > c)
{
    document.getElementById('t4').value="B is big"
}
else if(c > a && c > b)
{
    document.getElementById('t4').value="C is big"
}
else
{
    document.getElementById('t4').value="All are equal"

}
}