// callback function is passed an a arguments to another function

// function eatbreakfast(item,time,doBrush){
//    doBrush();
//     console.log("i will eat "+ item +" as my breakfast"+time);
// }
// function doBrush(){
//    console.log("brush your theeth bete");
// }
// eatbreakfast("dosa",8,doBrush);





function eatbreakfast(item,time,doBrush){
   doBrush();
    console.log("i will eat "+ item +" as my breakfast"+time);
}
function doBrush(){
   console.log("brush your theeth bete");
}
eatbreakfast("dosa",8,doBrush);
