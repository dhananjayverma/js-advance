var arr=[1,2,3];
var res=arr.filter(function(elem){
    return elem%2!=0
}).reduce(function(acc,elem){
    return acc+elem;
})
console.log(res);