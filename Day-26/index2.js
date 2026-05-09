// total average

const result=(tamil,maths,science)=>
{
        console.log('result:',tamil+maths+science)

        if(tamil >=35 && maths >=35 && science >=35)
        {
            console.log('All pass')
        }
        else{
            console.log('Fail')
        }
}

result(55,50,100)


//callback function

// A function call itself
// result(40,30,mansura)

// Define a function that takes another function as an argument

function greet(name, vinitha,sofia)
 {
console.log('Hi ' + name);
vinitha();
sofia();
}


function vinitha()
{
    console.log('I am vinitha')
}

function sofia()
{
    console.log('I am sofia')
}

greet('sanjai',vinitha,sofia)



function goodmorning()
{
    console.log('Good morning everyone');
}

setInterval(goodmorning,100)