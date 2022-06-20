var thetype = "direct";
var aname = "Austin Zimmerman";
var info2 = "cs190 Javascript Lab 2";
var id = 718;
var special = 1;

function getBreaks927(){
var num1;
do { 
     num1 = prompt("Enter a number 1 through 5","");
     if (num1 < 1 || num1 > 5){
     alert("You have entered an incorrect number!");
     num1 = prompt("Enter a number 1 through 5","");
     }
} 

while ( parseInt(num1) > 1  &&  parseInt(num1) < 5 ){
     if (num1 == '1') {
     document.getElementById("breaks927").innerHTML = "<br>";
     break;
     }
     if (num1 == '2') {
     document.getElementById("breaks927").innerHTML = "<br><br>";
     break;
     }
     if (num1 == '3') {
     document.getElementById("breaks927").innerHTML = "<br><br><br>";
     break;
     }
     if (num1 == '4') {
     document.getElementById("breaks927").innerHTML = "<br><br><br><br>";
     break;
     }
     if (num1 == '5'){
     document.getElementById("breaks927").innerHTML = "<br><br><br><br><br>";
     break;
     }
     
 }
}


function getCards659(){
var num2;
do {
     num2 = prompt("Enter a number 2 through 7","");
     if (num2 < 2 || num2 > 7){
     alert("You have entered an incorrect number!");
     num2 = prompt("Enter a number 2 through 7","");
     }
} 
while (var i = 0; i <= num2; i++) {
var msg += "Card#" + i;
document.getElementById("cards659").innerHTML = msg;
 }
}




function getName743() {
var name = prompt("Enter your name: ");
alert("Your Name Is: " + name);
if (name < 5) {
document.getElementById("name743").innerHTML = "Your Name Is: " + name + " You have a short name";
}
else{
if (name < 10){
document.getElementById("name743").innerHTML = "Your Name Is: " + name + " You have a medium name";
}
else{
if (name > 10) {
document.getElementById("name743").innerHTML = "Your Name Is: " + name + " You have a long name";
}}}
}

function getAge212() {
var age = prompt("Enter your age: ");
alert("Your Age Is: " + age);
if (age < 18) {
document.getElementById("age212").innerHTML = "Your Age Is: " + age + " You are a kid";
}
else {
if (age < 50){
document.getElementById("age212").innerHTML = "Your Age Is: " + age + " You are an adult";
}
else {
if (age > 50) {
document.getElementById("age212").innerHTML = "Your Age Is: " + age + " You are a senior citizen";
}}}
}



function changetype431(){
var newtype;
if (thetype == "direct"){
newtype = "advertising";
}
if (thetype == "advertising"){
newtype = "subscription";
}
if (thetype == "subscription"){
newtype = "direct";
}
thetype = newtype;
alert("The Type has been changed to " + thetype);
}

function displaytype856(){
if (thetype == "direct"){
alert("Buy Now! From this web page! My children need new shoes!");
}
if (thetype == "advertising"){
alert("Support our advertisers! Click on an ad, so I can make money!");
}
if (thetype == "subscription"){
alert("Renew your subscription today! My children need medicine! ");
}
}





function displayspecial534() {
   if (special == 1) {
	  alert("The current special is #1");
   }
   if (special == 2)  {
	  alert("The current special is #2");
   }
   if (special == 3 )  {
	  alert("The current special is #3");
   }
   special = special + 1;
   if (special > 3) {
	 special = 1;  // wrap around
   }
}




function confirmlink809(linkname) {
   if (confirm("Are you sure you want to jump to " + linkname + "?"))
        location = linkname;
}



function displayinfo692() {
   alert ( "Name: " + aname + "\n Assignment: " + info2 + "\n ID: " + id);
}
