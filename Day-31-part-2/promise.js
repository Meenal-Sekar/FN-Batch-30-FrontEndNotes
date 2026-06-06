
const data=new Promise((resolve,reject)=>
    {
    setTimeout(()=>
    {
        let ans="kalai";
    
        if(ans)
        {
            resolve(ans);     //then   function call     then(ans)
        }
        else
        {
        reject("It is empty");        //catch  functioncall
        }
    },4000);
    
    });
    
    data
    .then((name)=>
    {
    console.log('My name is :',name)
    })
    .catch((error)=>
    {
    console.log(error)
    })
    .finally(()=>
    {
        console.log('Please wait....')
    })
   

   
    



//resolve then function will call
//reject  catch function call

    
//setTimeout(sample,4000)

//setInterval(count,1000)