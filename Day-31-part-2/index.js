function sum(val1,val2,val3,d1,man)
{
let out=val1+val2+val3; 

let out2=(val1+val2)-val3;
d1(out);      
man(out2)
}

function Display(output)
{
console.log('sum:',output);
}

function mansura(m1)
{
    console.log('subt:',m1)
}


sum(50,60,100,Display,mansura);      //val =50 val2= 60  val3= 100 d1=Display



