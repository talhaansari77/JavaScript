// In javascript should only init constructor 
// or an object at a time 
// if make both it will produce an error 

// this is a general object
// this behave just like a class
// var person = {
//     name : null,
//     age : null,
//     favColor : null
// };
// this is constructor 
// constructor name must be the same as object(class) name 
function person(name, age){
    this.name = name;
    this.age = age;
    this.favColor = function(color){
        this.favColor = color;
    };
}

function change(){
	document.getElementById('change').innerHTML = "SUBMIT";

}

// // this is an instance
// let Talha = new person("Talha", 21);
// // printing instance's attributes
// document.write("This is Your name :" + Talha.name + "<br>");
// document.write("This is Your Age :" + Talha.age+ "<br>");
// // calling method of constructor
// color = prompt("Enter Your FavColor");
// Talha.favColor(color)
// document.write("This is Your Color :" + Talha.favColor);


// let person = {
//     name :"Talha",
//     age : 21
// };

// let obj = person.name;
// document.write(obj.length);

// continued javascript from 1:22:00
// from rafeh qazi video 

// ? Switch Statements in Javascript 
// making calculator

var num1 = 5;
var num2 = 8;
var operator = "-";

// switch 
switch(operator){
    case "+":
        console.log("Sum is :" + num1 + num2 );
        break;
    case "-":
        console.log("Sub is :" + num1 - num2);
        break;
    case "*":
        console.log("Mul is :" + num1 * num2);
        break;
    case "/":
        console.log("Div is :" + num1 / num2);
        break;
    default:
        console.log("Invalid Opertor.");
        break;


}

document.getElementById("abc").innerHTML = "Welcome Talha";


// if(!document.getElementById("abc")){
//     alert("No");
//     // var h1 = document.getElementById("qwe").innerHTML;
// }else{
//     alert("Yes");
// }
var months = {jan:null, feb:null, mar:null, apr:null, may:null, jun:null
    , jul:null, aug:null, sep:null, oct:null, nov:null, dec:null};
  
//   var month_data = new months();
  console.log(months.jan);
// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };

//   console.log(person.lastName);
