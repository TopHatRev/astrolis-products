 let myName = prompt("What is your name?");

console.log("Hello " + myName);

let time = prompt("What hour of the day is it? (0-23)")

let message;

console.log(time);

if (time <= 11){
    message = "Good morning " + myName + "!";
} else if(time <= 18){
    message = "Good afternoon " + myName + "!";
} else if(time < 24) {
    message = "Good evening " + myName + "!";
} else {
    message = "That is not a valid time.";
}

console.log(message);

let text;
if (confirm("Accept Cookies?") == true) {
  text = "Accepted";
} else {
  text = "Nevermind.";
}

console.log(text);

