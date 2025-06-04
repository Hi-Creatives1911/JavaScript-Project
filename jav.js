// let userName = prompt("Enter your name:");
// while (userName.trim() === "" || !isNaN(userName)) {
//     alert("Please enter a valid name.");
//     userName = prompt("Enter your name:");
// }
// const cleanName = userName.trim().split(" ");
// const formattedName = cleanName.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(" ");


// let userAge = prompt("Enter your age:")
// while (isNaN(userAge) || userAge.trim() === "" || userAge <= 0) {
//     alert("Please enter a valid number for age.");
//     userAge = prompt("Enter your age:");
// }
// const formattedAge = parseInt(userAge, 10);
// const date = new Date();
// const fullYear = date.getFullYear();
// const userBirthYear = fullYear - formattedAge;


// let favQuote = prompt("Enter your favorite quote:");
// while (favQuote.trim() === "") {
//     alert("Please enter a valid quote.");
//     favQuote = prompt("Enter your favorite quote:");
// }
// let formattedQuote = favQuote.trim();
// const bannedWords = [
//   "fuck", "shit", "ass", "bitch", "damn", "sex", "porn", "nude", "horny",
//   "boobs", "vagina", "penis", "kill", "murder", "bomb", "shoot",
//   "weed", "cocaine", "heroin", "meth", "rape", "suicide", "goddamn"
// ];
// for (const word of bannedWords) {
//     while (formattedQuote.toLowerCase().includes(word)) {
//         alert("Your quote contains inappropriate language. Please try again.");
//         favQuote = prompt("Enter your favorite quote:");
//         formattedQuote = favQuote.trim();
//         if (!formattedQuote.toLowerCase().includes(word)) {
//             break;
//         }
//     }
// }


// let message = `Hello, ${formattedName}! You were born ${userBirthYear}. Your favorite quote is: "${formattedQuote}"`;
// alert(message);
