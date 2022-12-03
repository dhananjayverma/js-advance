// var arr=[1,2];
// var res=arr.map(function(elem){
//     return elem*2;
// })
// console.log(res);


// var arr=[1,2,3,4,5,6];
// var res=arr.map(function(elem){
//     return elem%2==0;
// })
// console.log(res);


// var arr=[1,2,3,4,5,6];
// var res=arr.filter(function(elem){
//     return elem%2==0;
// })
// console.log(res);


var arr=[1,2,3,4,5,6];
var res=arr.filter(function(elem){
    return (elem%2==0 &&elem > 4)
})
console.log(res);
