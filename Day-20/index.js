


function addition()
{

let t1=Number(document.getElementById('t1').value)
let t2=Number(document.getElementById('t2').value)
document.getElementById('t3').value= t1+t2;

}

function subtraction()
{

let t1=(document.getElementById('t1').value)
let t2=(document.getElementById('t2').value);
document.getElementById('t3').value= t1-t2;

}

function multi()
{
   let t1=(document.getElementById('t1').value)
let t2=(document.getElementById('t2').value);
document.getElementById('t3').value= t1*t2; 
}

function division()
{
    let t1=(document.getElementById('t1').value)
let t2=(document.getElementById('t2').value);
document.getElementById('t3').value= t1/t2;
}
function mdivision()
{
    let t1=(document.getElementById('t1').value)
let t2=(document.getElementById('t2').value);
document.getElementById('t3').value= t1 % t2;
}

function Clear()
{
    document.getElementById('t1').value="";
    document.getElementById('t2').value="";
    document.getElementById('t3').value="";
}