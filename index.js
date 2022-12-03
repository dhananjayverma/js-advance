// var person ={
//     name:"john",
//     myName:function(){
//         console.log(this);
//     }
// }
// function  myName(){
//     console.log(this);
// }

// function player(n,t){
//     this.name=n
//     this.team=t;


// }
// var myplayer=new player("messi","brecelona");
// var myplayer2=new player("dj","cricket");
// console.log("myplayer2",myplayer2);
// console.log("myplayer:",myplayer);



function person(n,a){
    var obj={};
    obj.name=n,
    obj.age=a
    return obj;
}
var personArr=["akash","ruplai"];
var AgeArr=[15,22];

personArr.forEach(function(el,ind){
    var Person=person(el,AgeArr[ind]);
    console.log(Person);
})