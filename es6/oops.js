// class Person{
//     constructor(n,a){
//         this.name=n
//         this.age=a
//     }
//     showName(){
//         console.log(this.name)
//     }
// }

// const part1=new Person('raj',24);
// const part2=new Person("dj",25)
// console.log("oops1:",part1);
// console.log("oops:",part2);
// part1.showName();










// class Car{
//     #year
//     constructor(n,y){
//         this.name=n,
//         this.#year=y
//     }
   
// }
// class Sedan extends Car{
//     constructor(n,y,s){
//     super(n,y);
//     this.speed=s
// }

// }
// const sucu=new Sedan("hundain",2010,180);
// const maruti=new Car("bolero",2000)
// //  console.log(susu.#year);
// console.log(sucu)
// console.log(maruti)



















// class Car{
//     constructor(n,y){
//         this.name=n,
//         this.year=y
//     }
//     printName(){
//         console.log('hey this is a car')
//     }
// }
// class Sedan extends Car{
//     constructor(n,y,s){
//     super(n,y);
//     this.speed=s
// }
// printName(){
//     console.log("this is sedan")
// }
// }
// const sucu=new Sedan("hundain",2010,180);
// const maruti=new Car("bolero",2000)

// console.log(sucu)
// console.log(maruti)

// sucu.printName()
// maruti.printName();






// ....................Student...............

class User{
    #password
    constructor(n ,id){
        this.name=n,
        this.id=id
        this.IsVrified=false;
    }
    signup(email,password){
        if(this.IsVrified){
            console.log(`usr exit${this.name}`)
            return;
        }
        if(this.#emailvalidation(email)&& this.#passwordvalidation(password)){
            this.IsVrified=true;
            this.email=email
            this.#password=password

            console.log(`susessfuly logged in ${this.name}`)
        }else{
            console.log('plz provide vaild name and password')
        }

    }
    #emailvalidation(email){
        if(email===''||!email.includes('@')){
            return false
        }
        return true

    }
    #passwordvalidation(password){
        if(password.length<4){
            return false
        }
        return true

    }
    login(){
        if(this.email===this.email && this.#password===this.password){
            console.log(`hii ${this.name},you have sucessfully`)
        }
         
    }
}

const trun=new User('trun',1)
trun.signup('tarun@gmail.com','tarun123')
console.log(trun);

// console.log(trun.emailvalidation("tatta@gmail.com"))

const komal=new User("komal",2);
komal.signup('komal@123','komal56')
console.log(komal)

// con

trun.signup('ta@gmail.com','tarun124')
console.log(trun);






































