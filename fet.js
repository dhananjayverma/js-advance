


    //    <div>
    //         <img src="" alt="">
    //         <div id="fullname"></div>
    //         <div id="email"></div>
    //     </div>




// fetch("https://reqres.in/api/users?page=2")

// .then(function(res){
//     // console.log(res,"res");
//     return res.json()
// }).then(function(res2){
//     // console.log(res2.data,"62")
//     var content=document.getElementById("content");
//     res2.data.forEach(function(elem){
//         // console.log(elem,'elem');
//         content.innerHTML+=`
//          <div style="margin:20px">
//         <img src=${elem.avatar} alt="avatar">
//         <div id="fullname">${elem.first_name} ${elem.last_name}</div>
//         <div id="email">${elem.email}</div>
//     </div>
//     `
//  })
//     // console.log(returned);
// }).catch(function(err){
//     // console.log(err,'err');
// })


// 2nd method

// async function getData(){
//     try{
//     var res=await fetch("https://reqres.in/api/users");
//     var res2=await res.json();
//     var content=document.getElementById("content");
//         res2.data.forEach(function(elem){
//             content.innerHTML+=`
//              <div style="margin:20px">
//             <img src=${elem.avatar} alt="avatar">
//             <div id="fullname">${elem.first_name} ${elem.last_name}</div>
//             <div id="email">${elem.email}</div>
//         </div>
//         `})
// }catch(err){
//     console.log(err,'err');
// }
// }
// getData();




async function handleClick(){
    const email=document.getElementById("email").value;
     const pass=document.getElementById("password").value;
    try{
     var res=await fetch("https://reqres.in/api/login",{
        method:"post",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            email:email,
            password:pass
        })
     })
     var res2= await res.json()
     console.log(res2,"res2");
 }catch(err){
    console.log(err,'err')
 }

}
handleClick();




























