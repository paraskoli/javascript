// //1.WAYS TO PRINT IN JAVASCRIPT
//  console.log("Hello World");
// alert("me");
// document.write('hello i am paras koli')

//2.javascript console API
// console.log("Hello World gdkshg hgkh kd k ");
// console.warn("this is unprotected site")
// console.error("this is an error")
// console.clear()

// 3.javascript variables
// what are variables == containers to store data values 
var number1 = 89;
var number2 = 78;
// console.log(number1+number2);

//4.data types in java script
//string
var str = 'this is a string';
var str = "this is a string";

// number
var num1 = 45;
var num2 = 89;

//objects
var marks = {
  ravi: 45,
  shubham: 78,
  harry: 57
}
// console.log(marks);

// var und=undefined;
var und;
// console.log(und);

var n = null;
// console.log(n);

var m;  // we not defined var so its showing undefined
// console.log(m)

/* At very high level there two types of data types in JS
 1. Primitive data types: undefined, null, number, sring, boolean, symbol
 2. Reference data types: Array and objects
 */

//Array
arr = [45, 54, 78, "hello", 69];
// console.log(arr);
// console.log(arr[3]);

// operator in javascript
//arithemtic ooperators
var a = 230;
var b = 98;
//  console.log("the value of a+b is :",a+b);
//  console.log("the value of a-b is :",a-b);
//  console.log("the value of a*b is :",a*b);
//  console.log("the value of a/b is :",a/b);

// assignment operators
var c = b;
//  c+=2;
//  c-=2;
//  c /= 2;
//  c*=2;
//  console.log(c);

//comparisson operators
var x = 45;
var y = 78;
//  console.log(x==y);
//  console.log(x>=y);
//  console.log(x<=y);
//  console.log(x>y);
//  console.log(x<y);

//logical operators
//logical and
//  console.log(true && true);
//  console.log(true && false);
//  console.log(false && false);
//  console.log(false && true);

//logical or
//  console.log(false || false);
//  console.log(false || true);
//  console.log(true  || false);
//  console.log(true  || true);

//logical not 
//  console.log(!false);
//  console.log(!true);

//functions in javascript
function avg(a, b) {
  c = (a + b) / 2;
  return c;
}
/*c1=avg(45,87);
c2=avg(7,5);
console.log(c1,"\n",c2);
*/
/*function mult(a,b){
   return (a*b) 
}
c=mult(7,8);
console.log(c);  
 */

/*// conditional in javascript
var age=3;
//single if statement
if (age<5){
 console.log("you are a kid");
}

//if else statement
if (age<5){
   console.log("you are a kid");
 }
 else{
   console.log("you are not a kid");
 }
//example
 var age=7;
 if (age>=18){
   console.log("you can drink");
 }
 else{
   console.log("you can not drink");
 }
 
 //if else ladder
 if (age>=18){
   console.log("you can drink");
 }
 else if(age <18){ 
   console.log("you can not drink");
 }
 else if(age <16){ 
   console.log("you can not drink");
 }
 else if(age <15){ 
   console.log("you can not drink ");
 }
 else{
   console.log("you not drink")
 }
 console.log("End of ladder");
*/

//LOOPS in Javascript
//1. for loop
/*var arr=[1,2,3,4,5,6,7];
console.log(arr);
for (var i=0; i<=arr.length;i++){
  console.log(arr[i])
}
*/

/*
arr.forEach(function(element){
  console.log(element);
})
*/

// const ac = 0;
// ac++;
var arr = [1, 2, 3, 4, 5, 6, 7];
let j = 0;
// while (j < arr.length) {
//   console.log(arr[j])
//   j++;
// }

// do {
//   console.log(arr[j]);
//   j++;
// }
// while (j < arr.length);

//break statement
/*var arr=[4,5,6,7,8,9]
for (var i=0;i<arr.length;i++)
{if (i==2){
  // break;
  continue;
}
  console.log(arr[i]);
}
*/

//array in javascript
/*let myarr=[4,5,"paras",8,"sonu"];
console.log(myarr.length);
myarr.pop();//remove the last element of the array
myarr.push("paras koli"); //add the element athe last of the array
myarr.shift(); // remove first element of the array
const newLen=myarr.unshift("paras");
console.log(newLen);
console.log(myarr.unshift("koli"));  // add element starting of the array
console.log(myarr);
myarr.toString();
console.log(myarr);
*/
/*
arr=[1,5,2,4,3,8,9];
arr.sort();
console.log(arr);
*/

//string method in javascript
/*let mystring="hello paras koli";
console.log(mystring.length); // print length of a string
  console.log(mystring);
  console.log(mystring.indexOf("paras")); // find index of a element
  console.log(mystring.endsWith("koli")); // find that string end with koli or not
*/
  //slicing of a string
  // console.log(mystring.slice(0,10));
  // console.log(mystring.replace("paras","sonu")); 

   // let string="hello,aman what are you doing"
  // newstring=string.replace("hello","paras");
  // console.log(newstring);

   let myDate=new Date();
  //  let myDate=Date();
  console.log(myDate.getTime());
  console.log(myDate.getFullYear());
  console.log(myDate.getDay());  //print day starting from sunday as a 0 than mpnday as 1,2,3,4,5
   console.log(myDate);
   console.log(myDate.getMinutes());
   console.log(myDate.getHours());

// DOM Manipulation
let elem=document.getElementById('click');
console.log(elem);

let elemClass=document.getElementsByClassName("container")
console.log(elemClass);
// elemClass[0].style.background="orange"
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
console.log(elem.innerHTML);
console.log(elem.innerText);
console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);

tn=document.getElementsByTagName('button')
console.log(tn)
createElement=document.createElement('p');
createElement.innerText="This is a created para"
tn[0].appendChild(createElement);
createdElement2=document.createElement('b')
createdElement2.innerText="This is a created bold";
tn[0].replaceChild(createdElement2,createElement);
//removeChild(element); ---> removes an element
document.location

//selecting using query
sel=document.querySelector('.container');
console.log(sel);
sel=document.querySelectorAll('.conatiner');
console.log(sel)

function clicked(){
  console.log("the button was clicked");
}
window.onload=function(){
  console.log('The document was loaded')
}
//events in javasscript
// firstContainer.addEventListener('click',function(){
//   document.querySelectorAll(".container")[1].innerHTML = "<b> We have clicked</b>"
//     console.log("click on container")
// })

// firstContainer.addEventListener('mouseover',function(){
//   console.log("mouse pointer on container")
// })

// firstContainer.addEventListener('mouseover',function(){
//   console.log("mouse pointer out of container")
// })

// let prevHTML= document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup',function(){
//   document.querySelectorAll(".container")[1].innerHTML=prevHTML;
//   console.log("mouse pointer up when click on container");
// })

// firstContainer.addEventListener('mousedown',function(){
//   document.querySelectorAll('.container')[1].innerHTML="<b> We have clicked</b>"
//   console.log("mouse pointer down when click on container");
// }) 

// Arrow Functions
//functions summ(a,b){
//   return a+b;}
sum =(a,b)=>{
  return a+b;
}
// setTimeout and setinterval

// logkaro=()=>{
//   console.log("i am your log")
// }
// setTimeout(logkaro,2000);  //2 seconds ke baad run n print hoga console me refresh ke baad

// setInterval(logkaro,2000); // run n print hota rahega every 2 second console me

clr=setTimeout(logkaro,5000); // to cancel the setTimeout
clr=setInterval(logkaro,2000); // to cancel the setinterval

// javascript localstorage
// localStorage.setItem('name')
// localStorage.removeItem("name")
// localStorage
// localStorage.getItem("name")
// localStorage.removeItem("name")
// localStorage.clear();

//JSON
obj={name:"harry",length: 1,a:{this:"that"}}
jso =JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)
parsed=JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
console.log(parsed);

//template literals -Backtics
a=34;
console.log(`this is my ${a}`)