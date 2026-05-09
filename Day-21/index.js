let uname="Admin_123";
let pwd="12345";

function checking()
{
    let t1=document.getElementById('t1').value
    let t2=document.getElementById('t2').value

    if(t1 == uname  &&     t2 == pwd)
    {
        alert('Login successful')
    }
    // else{
    //     alert('Login denied')
    // }

}

function compare()
{
    let a=document.getElementById('t1').value
    let b=document.getElementById('t2').value 

    // if( a > b )
    // {
    //     document.getElementById('t3').value="A is big"
    // }
    // else if( a == b)
    // {
    //     document.getElementById('t3').value="Both are equal"
    // }
    // else{
    //     document.getElementById('t3').value="B is big"
    // }

    let result = a > b ? "a is big"  :  "b is big"

    document.getElementById('t3').value=result;

    

   
}