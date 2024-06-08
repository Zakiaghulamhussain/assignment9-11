 //Question#1
function welcomeUser (city) {
    if (city.toLowerCase()==="karachi"){
    console.log("Welcome to city of lights");
}
}
var city=prompt("Enter your city name:");
welcomeUser(city);

//Question#2
var gender = prompt("Please enter your gender (male/female):");
if(gender.toLowerCase() ==='male'){
console.log("Good Morning Sir!");
}
else if (gender.toLowerCase() === 'female') {
    console.log("Good Morning Ma'am.");
}
else{
    console.log("Invalid input. Please enter 'male' or 'female'.");
}

//Question#3
var signalColor = prompt("Please enter the color of the traffic signal (red/yellow/green):");

if(signalColor.toLowerCase() === 'red') {
    console.log("Must Stop");
} else if(signalColor.toLowerCase() === 'yellow') {
    console.log("Ready to move");
} else if(signalColor.toLowerCase() === 'green') {
    console.log("Move now");
} else {
    console.log("Invalid input. Please enter 'red', 'yellow', or 'green'.");
}

//Question#4
var remainingFuel = parseFloat(prompt("Please enter the remaining fuel in your car (in litres):"));

if(remainingFuel < 0.25) {
    console.log("Please refill the fuel in your car");
} else {
    console.log("You have enough fuel");
}

//Question#5
//Part(a)
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}
// Output: Alert message would be displayed. The condition (++a === 5) is true because a is incremented before comparison.
//Part(b)
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}
// Output: Alert message would not be displayed. The condition (b++ === 83) is false because b is incremented after comparison.
//Part(c)
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}
/* Output:
    - Alert message for "condition 2 is true" would be displayed because the value of c is 13 after the first if statement due to post-increment.
    - Alert message for "condition 4 is true" would also be displayed because c is incremented before comparison in the last if statement.
*/
//Part(d)
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
// Output: Alert message would be displayed. The condition (totalCost === laborCost + materialCost) is true because it checks for mathematical equality.
//Part(e)
if (true){
    alert("True");
}
if (false){
    alert("False");
}
// Output: Alert message "True" would be displayed. The first if statement is true because it checks the boolean value true.
//Part(f)
if("car" < "cat"){
    alert("car is smaller than cat");
}
// Output: Alert message would be displayed. In lexicographical comparison, "car" comes before "cat".



//Question#6
function calculateGradeAndRemarks(percentage) {
    var grade = '';
    var remarks = '';

    if (percentage >= 80) {
        grade = 'A-one';
        remarks = 'Excellent';
    } else if (percentage >= 70) {
        grade = 'A';
        remarks = 'Good';
    } else if (percentage >= 60) {
        grade = 'B';
        remarks = 'You need to improve';
    } else if (percentage < 60) {
        grade = 'Fail';
        remarks = 'Sorry';
    } else {
        grade = 'Pass';
        remarks = 'Do better next time';
    }

    return { grade: grade, remarks: remarks };
}

function calculatePercentage(marksObtained, totalMarks) {
    return (marksObtained / totalMarks) * 100;
}

var subject1Marks = parseFloat(prompt("Enter marks obtained in subject 1:"));
var subject2Marks = parseFloat(prompt("Enter marks obtained in subject 2:"));
var subject3Marks = parseFloat(prompt("Enter marks obtained in subject 3:"));
var totalMarks = parseFloat(prompt("Enter total marks for each subject:"));

var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
var percentage = calculatePercentage(totalObtainedMarks, totalMarks * 3);
var result = calculateGradeAndRemarks(percentage);
var grade = result.grade;
var remarks = result.remarks;
document.write("Marks Sheet");
document.write("Total Marks: \n" + (totalMarks * 3));
document.write("Marks Obtained: \n" + totalObtainedMarks);
document.write("Percentage: \n" + percentage.toFixed(2) + "%");
document.write("Grade: \n" + grade);
document.write("Remarks: \n" + remarks);


//Question#7
const secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer.");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    alert("Close enough to the correct answer.");
} else {
    alert("Sorry, incorrect guess. The secret number was " + secretNumber);
}

//Question#8
let number = parseInt(prompt("Enter a number:"));
if (number % 3 === 0) {
    alert(number + " is divisible by 3.");
} else {
    alert(number + " is not divisible by 3.");
}


//Question#9
let num = parseInt(prompt("Enter a number:"));
if (number % 2 === 0) {
    alert(number + " is an even number.");
} else {
    alert(number + " is an odd number.");
}


//Question#10
let temperature = parseInt(prompt("Enter the temperature:"));
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It is freezing cold outside!");
}


//Question#11
let firstNumber = parseFloat(prompt("Enter the first number:"));
let secondNumber = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");
let result;
if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {

    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
    } else {
        result = "Division by zero is not allowed.";
    }
} else if (operation === "%") {
    if (secondNumber !== 0) {
        result = firstNumber % secondNumber;
    } else {
        result = "Modulo by zero is not allowed.";
    }
} else {
    result = "Invalid operation.";
}
alert("Result: " + result);

