// function getName() {
//     let myName = prompt("Hey, what's your name?!");
  
//     document.write(myName);
//   }
  
//   // function to get the time and gree the user
//   function getTime() {
//     let time = prompt("What is the time?");
  
//     let message;
  
//     if (time <= 11) {
//       message = "Good morning!";
//     } else if (time <= 18) {
//       message = "Good afternoon";
//     } else if (time <= 23) {
//       message = "Good evening";
//     } else if (time == 24) {
//       message = "Oh my goodness, go to sleep!";
//     } else {
//       message = "Invalid Time";
//     }
  
//     document.write(message);
//   }

let text;
if (confirm("Accept Cookies?") == true) {
  text = "Accepted";
} else {
  text = "Nevermind, try again." + location.reload();
}

console.log(text);


function guessANumber(){
    let answer;

    //while the answer is incorrect, keep asking.
    while(answer != 3){
     prompt("Guess a number between 0-10");

     if(answer != 3) {
        alert("Try again.");
     } else {
        alert("Good job.");
     }
    }
}

function getRating() {
    let rating = prompt("Please rate my website 1-5");
    let output = "Your rating: ";
  
    for (let i = 0; i < rating; i++) {
      output = output + "<img src= 'ratingLogo.png' class='ratingLogo'"
    }
    document.write(output);
  }
  