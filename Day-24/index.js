//function
//function is a set of instruction to be exected. 
// When ever we call the funciton that function will be executed

//typeof function 
//1. Pre-define  or buildin function           2.  userdefined function

// lowercase()

// based on the parameter and return  we spilt the function as 4 type:


// with parameter with return
// with parameter without return(console.log)
// without paramert with return
//without parameters without retun


//Example: 1  Type:1


function   addition(a,b,c)   //parameters
{
       return a+b+c
}


let a1=addition(3,5,8);    //arguments

console.log("Addition value is",a1)
//-------------------------------------------------------------------------------
//Type:2
function   multi(a,b,c)   //parameters
{
        console.log("Mulitplication:",a*b*c)
}

multi(2,2,2);
//--------------------------------------------------------------------

//Type 3: without parameter without return 

function hello()
{
    console.log('Welcome')
}

hello()



//Type: 4 without parameter with return

function hello1()
{
    return "Meenal"
}

let s1=hello1()

console.log(s1)