

let ch=prompt('Enter your choice')


switch(ch)
{
    case 1:
        console.log('You have choose vanila icecream')
        break;
    case 2:
        console.log('You have choose strawberry ice')
        break;
    case 3:
        console.log('You have choose choclate icecream')
        break;
    default:
        console.log('Wrong choice');

}



























// Nested if

let t=10;
let m=36;
let s=89;

if(t > 35)
{
    if(m>35)
    {
        if(s>35)
        {
            console.log('All subjects pass')
        }
        else
        {
            console.log('Science fail')
        }
        
        console.log('Maths pass')
    }
    else
    {
        console.log('Maths fail')
    }
console.log('tamil pass')
}
else
{
    console.log('Tamilfail')
}
