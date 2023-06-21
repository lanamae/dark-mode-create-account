// // Variables

// var x = 1;
// var x = 2;

// let name = "Lana Mae";
// name = "Lan";

// const age = 20;

// //  DataTypes

// const string = "LANA";
// const number = 1000;
// const bool1 = true;
// const bool0 = false;
// const isUndefined = undefined;
// const isNull = null;
// const obj = {
//     firstname: "Lana Mae",
//     lastname: "Galvez"
// }

// const arr = ['a', 'b', 'c'];


// console.log(typeof(string));
// console.log(typeof(number));
// console.log(typeof(bool1));
// console.log(typeof(bool0));
// console.log(typeof(isUndefined));
// console.log(typeof(isNull));
// console.log(typeof(obj));
// console.log(typeof(arr));



// console.log("Hello  World");
// console.warn("Hello Warn");
// console.error("Hello Error");
// // window.alert('Hello Philippines');
// // alert('Hello Canada');



// const sampleArr = ['Apple', 'Banana', 'Lemon'];

// console.log(sampleArr);
// console.log(sampleArr[0]);
// console.log(sampleArr[1]);
// console.log(sampleArr[2]);


// sampleArr.push('Mango');
// sampleArr.push('Coconut');

// sampleArr.unshift('Cherry');
// sampleArr.shift();
// sampleArr.pop()



// console.log(sampleArr);
// console.log(sampleArr[3]);


// // OBJECTS
// const sampleObj = {
//     person: "Lana Mae Galvez",
//     age: 20,
//     female: true
// }


// console.log(sampleObj);
// console.log('Person: ' + sampleObj.person);
// console.log('Age: ' + sampleObj.age);
// console.log('isFemale: ' +sampleObj.female);



// // functions


// // 1st function
// function sayHi(name){
//     return 'Hi ' + name;
// }

// console.log(sayHi('Lana'));


// // 2nd function
// const sayHello = function(name){
//     return 'Hello ' + name;
// }

// console.log(sayHello('Lana'));


// // 3rd function - arrowfunction

// const sayUwu = (name) =>{
//     return 'Uwu ' + name
// }

// console.log(sayUwu('Lana'));


// // GLOBAL SCOPE
// const nameVal = "Lanlan";

// const  stateName = () =>{
//     return nameVal;
// }


// console.log(stateName());

// // class
// class Student {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }


// }


// const Student1 = new Student("Lana", "Galvez");
// const Student2 = new Student("Arlyne", "De Jesus");

// console.log(Student1);
// console.log(Student2)

// // if else

// let num = 10;

// if(num<10){
//     console.log('Number is less than 10')
// }

// else if(num>10){
//     console.log('Number is greater than 10');
// }

// else{
//     console.log('Number is equal to 10')
// }


// // swicth

// let num1 = 2
// switch(num1){

//     case 1:
//         console.log("One");break;

//     case 2:
//         console.log("Two");break;

//     case 3: 
//         console.log("Three");break;

//     default:
//         console.log("None")
// }


// // loops
// // FOR LOOPS
// for(let i = 0; i<200; i++){
//     console.log(`iloveyou ${i}`);
// }

// // WHILE
// let it = 0;
// while(it<10){
//     console.log(`iloveyoutoo ${it}`)
//     it++;
// }

// // set interval





// setTimeout(( )=> {
//     for(let x = 0; x<10;x++){
//         console.log(`bye ${x}`)
//     }
// }, 3000)



// DOM MANIPULATIONS

const amount1 = document.querySelector('.amount1');
const amount2 = document.querySelector('.amount2');
const amount3 = document.querySelector('.amount3');
const amount4 = document.querySelector('.amount4');
const main = document.querySelector('.main');
const total= document.querySelector('.total');

const showTotal = () =>{
    console.log("hehe")
    let sum = Number(amount1.value) + Number(amount2.value) + Number(amount3.value) + Number(amount4.value);
    total.innerText = sum

    main.style.background = 'yellow';
}












