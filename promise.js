/*
The daily tasks of John and the time taken by him are as follows :-

waking up from bed :-  500 ms
brush :- 400 ms
breakfast :- 300 ms
lunch :- 200 ms
dinner: - 100 ms
going to bed :- 0 ms
*/

// now let try behaviour without promisees.


// function wakeup(){
// //     setTimeout(function(){
// //         console.log("waking form bed");
// //     },500)
// // }
// // function brush(){
// //     setTimeout(function(){
// //         console.log("brushig theeth")
// //     },400)
// // }
// // function breakfast() {
// //     setTimeout(function () {
// //         console.log('Having breakfast');
// //     }, 300)
// // }
// // function lunch(){
// //     setTimeout(function(){
// //         console.log("having breakfast");
// //     },200)
// // }
// // function dinner(){
// //     setTimeout(function(){
// //         console.log("having diner")
// //     },100)
// // }
// // function gotoBed(){
// //     setTimeout(function(){
// //         console.log("go to bed")
// //     },0)

// // }
// // wakeup();
// // brush();
// // breakfast();
// // lunch()
// // dinner()
// // gotoBed()



// // not let try behavior call back function

// function wakeup(cb1,cb2,cb3,cb4,cb5){
//     setTimeout(function(){
//         console.log("waking of the bed");
//         if(cb1) cb1(cb2,cb3,cb4,cb5)
//     },500)
// }

// function brush(cb2,cb3,cb4,cb5){
//       setTimeout(function(){
//         console.log("brushing theeth")
//         if(cb2)cb2(cb3,cb4,cb5)
//       },400)
// }


// function breakfast(cb3,cb4,cb5){
//     setTimeout(function(){
//         console.log("eating breakfast")
//         if(cb3)cb3(cb4,cb5)
//     },300)
// }

// function lunch(cb4, cb5) {
//     setTimeout(function () {
//         console.log('Having lunch');
//         if(cb4) cb4(cb5)
//     }, 200)
// }
// function dinner(cb5) {
//     setTimeout(function () {
//         console.log('Having dinner');
//         if(cb5) cb5()
//     }, 100)
// }
// function goToBed() {
//     setTimeout(function () {
//         console.log('Going bed to sleep');
//     }, 0)
// }

// wakeup(brush, breakfast, lunch, dinner, goToBed)




// Let's try with promises

var promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("waking up from bed")
    }, 500)
})
var promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Brushing teeth")
    }, 400)
})
var promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Having breakfast")
    }, 300)
})
var promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Having lunch")
    }, 200)
})
var promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Having dinner")
    }, 100)
})
var promise6 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Going bed to sleep")
    }, 0)
})
async function dailyRoutine(){
    var res1 = await promise1
    console.log(res1)
    var res2 = await promise2
    console.log(res2)
    var res3 = await promise3
    console.log(res3)
    var res4 = await promise4
    console.log(res4)
    var res5 = await promise5
    console.log(res5)
    var res6 = await promise6
    console.log(res6)
}
dailyRoutine()




/*
// Another way with promises

var promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("waking up from bed")
    }, 500)
})
var promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Brushing teeth")
    }, 400)
})
var promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Having breakfast")
    }, 300)
})
var promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Having lunch")
    }, 200)
})
var promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Having dinner")
    }, 100)
})
var promise6 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Going bed to sleep")
    }, 0)
})

Promise.all([promise1, promise2, promise3, promise4, promise5, promise6]).then(function(res){
    res.forEach(function(el){
        console.log(el);
    })
})
*/