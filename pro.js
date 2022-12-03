// function runfirst(){
//     setTimeout(function(){
//         console.log("i sholuld run fast")
//     },500)
// }
// function runSecond(){
//     setTimeout(function(){
//        console.log("i should run sec") 
//     },300)
// }

// function runThird(){
//     setTimeout(function(){
//         console.log("i sholud run third")
//     },100)
// }
// runfirst()
// runSecond()
// runThird()


// function runfirst(cb){
//     setTimeout(function(){
//      console.log("i sholuld run fast");
//         cb()
//     },500)
// }
// function runSecond(cb){
//     return function(){
//         setTimeout(function(){
//             console.log("i should run sec") 
//             // cb()
//          },300)
//     }
  
// }

// function runThird(){
//     // return function(){
//         setTimeout(function(){
//             console.log("i sholud run third")
//         },100)

//     }  
// // }
// runfirst(runSecond(runThird()))
// // runSecond()
// runThird()

// promises.............
// function bankAtm(pin){
// var myPromise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("i should run fast")
//         reject("soory you are rejected")
//     },500)
// })
// console.log("myPromise",myPromise);

//...............Bank............
// function bankAtm(pin){
//     var myPromise=new Promise(function(resolve,reject){
// if(pin==1234){
//     resolve("Bank:hurrah,you can take money");
// }else{
//     reject("Bank:soory,promise has been rejected..")
// }
// })
// return myPromise;
// }
// var returnprice=bankAtm(1234)


// returnprice.then(function(res){
//     console.log(res,'res');
//     console.log("cash le bhai ... loan pass ho gya... !")
// })

// returnprice.catch(function(err){
//     console.log(err,'err');
//     console.log("chal nikal bosri ke nhi milega..")
// })
// console.log(returnprice,"retunPromise");
// // ..............




// async function sum(a,b){
//     return a+b;
// }
// async function print(){
//     try {
// var returnSum=await sum(1,2);
//  console.log(returnSum);
// }
// catch(err){
//     console.log(err,'err');
// }
// }
// print();

async function addnum(a,b){
    return a+b;
}
async function sum(){
    try{
        var add= await addnum(1,2);
        console.log(add);
    }
    catch(error){
        console.log(error,'error')
    }
}

sum();



































