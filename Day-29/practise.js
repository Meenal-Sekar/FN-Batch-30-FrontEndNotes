let array=[34,45,89,89]    //(Accept the duplicates)

console.log(typeof(array));   //object

array.push(23,23,90)
console.log(array);

// ----------------------------------------------------------------------
//object 
let jack=
{
    age:23,
    city:'madurai',
    salary:45000
    
}

console.log(jack.salary);
console.log(typeof(jack))  //object

// ------------------------------------------------------------------------

// Create a Set   (no acceptance of duplications)
const numbers = new Set();   //{45,55,35}


numbers.add(45);

numbers.add(55);
numbers.delete(55);

numbers.add(35);

numbers.add(35);

console.log(typeof(numbers))

console.log(numbers);



// -------------------------------------------------------------------------------------


let friends=[34,23,90,23]

friends.pop();
console.log(friends);












