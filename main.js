
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
const Fruits = new Array("apple", "orange","Banana");
Fruits.forEach(item=>console.log(item));
Fruits[3]="grapes";
console.log(Fruits);
Fruits.push("mango");
Fruits.unshift("apple");