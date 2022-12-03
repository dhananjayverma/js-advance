// Arrow function
// const sum=(a,b)=>a+b
// console.log(sum(2,6));

// // let scope

// let a=3
// if(true){
//     let a=5
//     console.log(a);
// }
// console.log(a);

// tempalte String
 
// const name="dhananjay";
// console.log(`myname ${name}`)

// // string.includes()
// console.log('apple '.includes('pl'));
// console.log('dhananjay'.includes('dj'));

// //string.statsWith()
// console.log('dhananjay'.startsWith("dh"));

// //string repeat
// console.log('ab'.repeat(3));

// //multiline string

// console.log(`this is dj`);

//default parameter

// function print(a=5){
//     console.log(a);

// }
// print();
// print(22);

// //destructuring string
// let [a, b] = [3, 7];
// console.log(a); 
// console.log(b); 


// destucting obj

// let obj={
//     a:55,
//     b:44
// };
// let {a,b}=obj;
// console.log(a);
// console.log(b);

//spread opeartor

// const a=[4,5,6]
// const b=[7,8,9]
// const c=[...a,...b];
// console.log(c);


// //object.assign
// const obj1 = { a: 1 }
// const obj2 = { b: 2 }
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)







const a={
    fisrtName:"Radhe",
    lastName:"verma"
}
const b={
    ...a,
    lastName:"saxena",
    dance:true
}

console.log(a);
console.log(b);






// Destructuring Nested Objects
const Person = {
 name: "John Snow",
 age: 29,
 sex: "male",
 materialStatus: "single",
 address: {
 country: "Westeros",
 state: "The Crownlands",
 city: "Kings Landing",
 pinCode: "500014",
 },
};
const { address : { state, pinCode }, name } =
Person;
console.log(name, state, pinCode)











































