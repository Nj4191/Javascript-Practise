
console.log('Hello world');
console.error('This is an error');
console.warn('Please be careful');
//Var , let, const 
let age=30;
age=23;
console.log(age);
const score = 10;
//datatypes assigning to variables, string,numbers,boolean,null,undefined
const name='James';
const isCool=false;
const rating= 7.6;
const x =null;
const y= undefined;
let z;
console.log(typeof rating);
console.log(typeof name);
console.log( isCool);
console.log(rating);
console.log(typeof x);
console.log(typeof y);
//strings, concatenation using the + sign
console.log('My name is ' + name + ' and I am ' + age);
//template string
console.log(`my name is ${name} and i am ${age}`);
const S = 'welcome back';
//console.log(S.toUpperCase());
//console.log(S.substring(0,7));
console.log(S.split(' '));
const d = 'Coding ,is , interesting'
console.log(d.split(' ,'));
//Arrays - variables that hold multiple values
const Numbers = new Array(1,2,3,4,5,6,7,8,9,10,11);
console.log(Numbers);
length = Numbers.length;
 console.log(length);
 Numbers.push("12");
 console.log(Numbers);
 let number = Numbers[Numbers.length - 1];
const Fruits = new Array("apple", "orange","Banana");
length = Fruits.length;
console.log(Fruits);
let Fruit  = Fruits[Fruits.length - 1];
let fruit =Fruits[0];
Fruits.push("mango");
console.log('Fruits');
Fruits.forEach(item=>console.log(item));
Fruits[3]="grapes";
console.log(Fruits);
Fruits.push("mango");
Fruits.unshift("apple");
//arrays
let car1 = "BMw";
let car2 = "AUDI";
let car3 = "Toyota";
 let Car4 ="Range rover";
 //const cars ={"BMW,AUDI,TOYOTA,RANGE ROVER"};
console.log(car1,car2,car3,Car4);
 //objects - variables that hold key-value pair
 let name1 = "james";
 let name2 = "john";
 const Person = {
    firstName : 'james',
    lastName : 'Njogu',
    age : 23,
    hobbies : ["coding","reading"],
    address: {
        street: '902 Main Street',
        city : "Kikuyu",
        country : "Kenya",
    }
 }
console.log(Person.firstName,Person.age,Person.hobbies[1]);
const todos = [
    {
        id: 1,
        text: "Buy groceries",
        completed: false
    },
    {
        id: 2,
        text: "Coding time",
        completed: false
    },
    {
        id: 3,
        text: "meet with the boss",
        completed: false
    }
];
console.log(todos);
const todosJson = JSON.stringify(todos);
console.log(todosJson);
//for loop

