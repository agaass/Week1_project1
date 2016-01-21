//Week 1 - Project 1

// Log all answers to the console and write them to document
// =======================================================

//1. Log your name to the console (as a string).
console.log('ali');

//2. Declare a variable called name, log it to the console.
var name = ali;
console.log('name');

//3. Declare two variables with number values. Add, subtract, multiply and divide them.
var x = 4;
var y = 6;
console.log( x * y );
console.log( x / y );
console.log( x + y );
console.log( x - y );


//4. Declare two variables with string values. Create a third variable that concatenates them.
var hello = 'hello';
var toYa = 'to you';
var greeting = console.log(hello + toYa);

//5. Add, subract, multiply and divide the strings '5' and '3'. Observe and explain the results.
var five = '5';
var three = '3';
console.log(five + three);
console.log(five - three);
console.log(five * three);
console.log(five / three);


//6. Create a prompt that asks a user to pick a number. Double the answer.
var number = prompt("please pick a number");
number *= 2;

//7. Create a custom alert.
alert('Here is an alert!');

//8. Declare three variables called length, width and height. Calculate area and volume.
var length = 5;
var width = 3;
var height = 2;
console.log(length * width * height);

//9. Ask for a user's name, age and city. In a single command display/log the sentence:
// "My name is...I'm....years old, and I live in....."
var name = prompt("what is your name");
var age = prompt("what is your age");
var city = prompt("where do you live");
document.write("My name is " + name + "I'm " + age + "years old, and I live in " + city + ".");

//10. Create an alert that uses the response from a prompt.
var alert = prompt("what is your name?");
alert(alert);
