function printHello(){
    console.log("hello");
}
// setTimeout(printHello,3000);
var timerId=setTimeout(function(){
    console.log("hello");
},3000)
console.log(timerId,"id");
clearTimeout(timerId);