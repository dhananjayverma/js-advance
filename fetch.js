// fetch("https://reqres.in/api/users?page=2")
// .then(function(res){
//   res.json().then(function(res){
//     console.log('res:',res.data)
//   });

// })
// .catch(function(err){
//     console.log('err',err)
// // })

// async function makePlay(){
// let res=await fetch("https://reqres.in/api/users?page=2")
//  let data=await res.json()
// console.log('res',data.data);
// }
// makePlay();

// Get-get something..
// fetch("https://reqres.in/api/users?page=2",{

// })

// fetch("https://reqres.in/api/users?page=2").
// then(function(res){
//     res.json().then(function(res){
//         console.log('res',res.data);
//     })
// })


fetch("https://reqres.in/api/users?page=2")

.then(function(res){
    console.log(res);
    return res.json()
}).then(function(res2){

    console.log(res2)
}).catch(function(err){
    console.log(err,'err');
})



















