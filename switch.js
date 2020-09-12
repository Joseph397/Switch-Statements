// switch statement- more clean than if else statements

// const text = "banana";
// // const text = "kiwi"; // example of a fruit that dosent have a case in the statement
// let fruitNum = 0;

// // If text is true
// switch (text) {
//   case "apple": // apple does not match the value of text
//     fruitNum = 2;
//     console.log(`I don't like apples`);
//     console.log(fruitNum);
//     break;
//   case "banana": // text does have assigned value of banana
//     fruitNum = 1;
//     console.log("Wow I love bananas"); // code runs
//     console.log(fruitNum); // code runs
//     break; // ignores rest of code in switch statement because text is equal to banana
//   case "avocado":
//     fruitNum = 3;
//     console.log("What fruit is this?");
//     console.log(fruitNum);
//   default: // default acts ilke an else statement (ends with :)
//     console.log("what fruit is that?"); // this runs if text is not assigned fruit that exists as a case in the statement
//     break;
// }

let userInput = prompt("Tell me a fruit");
let convertedValue = userInput.toLowerCase(); // takes user input and converts it to lowercase


switch (convertedValue) {
  case "kiwi":
    alert("Kiwi is the first food invented by the ocean boys");
    break;
  case "banana":
    alert("My gf bought 12 bananas for no reasen");
    break;
  case "apple":
    alert("keeps the doctor away");
  default:
    alert("that fruit is unknown to me");
    break;
}
