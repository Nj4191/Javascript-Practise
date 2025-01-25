
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
        id: 4,
        text: "meet with the boss",
        completed: false
    }
];
//for loops in arrays
for (let todo of todos){
    console.log(todo.id);
}
console.log(todos);
const todosJson = JSON.stringify(todos);
console.log(todosJson);
//for loop
for (let i=0; i<=10; i++){
    console.log (`For loop number:${i}`);
}
//while loop
let n= 5;
let sum =0;
let i=1;
while(i<=n){
    sum+=i;
    i++;
    console.log("The sum of numbers from 1 to "+n+" is "+sum);
}
 //if else
 let Age =50;
 if (Age <=18){
    console.log("you are a minor");
 }else {
    console.log("you are an adult");
 }
//tunary opertor
 let v = 55;
 const Color = v>20 ? "green":"Blue";
 console.log(Color);
 //switch
 const grade = "A";
 switch(grade) {
    case "A" :
    console.log('A'); 
    break;
    case "B":
        console.log('B');
        break;
        case "C":
        console.log('C');
        break;
        default:
            console.log('D');
            break;
 }
 //switch
 const day = "WEDNESDAY";
 switch(day){
    case "MONDAY":
        console.log("Today is MONDAY");
        break;
        case "TUESDAY":
            console.log("Today is TUESDAY");
            break;
            case "WEDNESDAY":
            console.log("Today is WEDNESDAY");
            break;
            case "THURSDAY":
            console.log("Today is THURSDAY");
            break;
            case "FRIDAY":
            console.log("Today is FRIDAY");
            break;
            case "SATURDAY":
            console.log("Today is SATURDAY");
            break;
            case "SUNDAY":
            console.log("Today is SUNDAY");
            break;
            default:
            console.log("Invalid day");
            break;
 }
 //FUNCTIONS
function add (num1,num2,num3){
    console.log(num1+num2+num3);   
}
add(5,6,55);
function sub(num1,num2){
    console.log(num1-num2);
}
sub(55,10);
function multi(num1,num2){
    console.log(num1*num2);
}
multi(2,12);
//function
let num1= 10;
let num2=12;
 function div(num1,num2){
    if(num2!=0){
        console.log(num1/num2);
    }else{
        console.log("Cannot divide by zero");
    }
}
//oop

 



