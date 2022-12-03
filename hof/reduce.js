var nums=[1,2,3,4,5];
// var sum=0;
// for(var i=0;i<nums.length;i++){
//     sum=sum+nums[i];
// }
// console.log(sum);

// 2way

// ist way=>acc-accumulator ,elem-elem-nums[i];

var nums=[1,2,3,4,5,6];
var res=nums.reduce(function(acc,elem){
    return acc+elem;
})
console.log(res);