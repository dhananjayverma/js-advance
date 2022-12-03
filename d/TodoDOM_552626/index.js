document.querySelector("form").addEventListener("submit",myTodo);
var todoArr=JSON.parse(localStorage.getItem("todolist"))||[];
console.log(todoArr);
displayTodo(todoArr); 
function myTodo(){
    event.preventDefault();
     var task=document.getElementById("task").value;
     var priority=document.querySelector("#priority").value;
   var todoObj={task:task,priority:priority};
   todoArr.push(todoObj);
     localStorage.setItem("todolist",JSON.stringify(todoArr));
     
   //   console.log(task,priority);
   displayTodo(todoArr)
}
function displayTodo(data){
   document.querySelector("tbody").innerText="";
   data.map(function(elem,index){
   var tr=document.createElement("tr");
   var td1=document.createElement("td");
   td1.innerText=elem.task;

   var td2=document.createElement("td");
   td2.innerText=elem.priority;
   if(elem.priority=="High"){
      td2.style.backgroundColor="red";
   }else{
      td2.style.backgroundColor="green";
   }

   var td3=document.createElement("td");
   td3.style.color="yellow";
   td3.innerText="Delete";
   td3.addEventListener("click",function(){
      deleteTask(index);
   });


   tr.append(td1,td2,td3);
   document.querySelector("tbody").append(tr);

   })
   
}

//  function deleteTask(){
//     event.target.parentNode.remove();
//  }

 function deleteTask(index){
   console.log(index,"index");
   todoArr.splice(index,1);
   console.log(todoArr);
   displayTodo(todoArr);
   localStorage.setItem("todolist",JSON.stringify(todoArr));
 }


//  btn.addEventListener("click",function(){
//  deleteRow(index);
//  });
//  function deleteRow(){
//    event.target
//  }