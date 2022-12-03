// function greet(){
//     let n="java"; //n is garbage
//     // console.log(n);
//     return function(){
    
//         console.log(n);
//     }
// }
// //console.log(greet());
// let x=greet();
// let y=x()
// y()

// function abc(){
//     let a=10;
//     return  function(){
//     console.log(a);
// }
// }
// // console.log(abc())
// var x=abc();
// console.log(x);
// x()




// function abc(){
//     let a=10;
//     let b=15;
//     return function(){
//         console.log(a);
//         a=100;
//         console.log(a);
//     }
// }
// var x=abc();
// var y=x();
// y();
// // abc()()();


// function abc(){
//     let a=10;
//     let fn1=function(){
//         let fn2=function(){
//         console.log(a);
//         a=100;
//         console.log(a);
//     }
//     fn2()
// }
// a=25;
// fn1()
// }
// abc()

function printIt(){
    const val=document.getElementById("inp")
    console.log(val);
}
function debounce(fn,delay){
    let timerId;
    return   function(...args){
        clearTimeout(timerId);
        timerId=setTimeout(function(){
            fn(...args)
        },delay)
    }
}
























