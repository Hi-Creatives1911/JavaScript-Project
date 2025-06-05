// let userName = prompt("Enter your name:");
// while (userName.trim() === "" || !isNaN(userName) || /[^^a-zA-Z0-9 -]/.test(userName)) {
//     alert("Please enter a valid name.");
//     userName = prompt("Enter your name:");
// }
// const cleanName = userName.trim().split(" ");
// const formattedName = cleanName.map(name => (name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())).join(" ");


// let userScore = prompt("Enter your score:");
// while (isNaN(userScore) || userScore.trim() === "" || (userScore < 0 || userScore > 100)) {
//     alert("Please enter a valid score between 0 and 100.");
//     userScore = prompt("Enter your score:");
// }
// let cleanScore = userScore.trim();
// userScore = parseInt(cleanScore, 10);


// switch (userScore) {
//     case (value) => value >= 91 && value <= 100:
//         alert(`${formattedName} scored ${userScore} and got a grade of A. Excellent performance Scholar!`);        
//         break;
//     case (value) => value >= 81 && value <= 90:
//         alert(`${formattedName} scored ${userScore} and got a grade of B. Good performance Egghead!`);        
//         break;
//     case (value) => value >= 71 && value <= 80:
//         alert(`${formattedName} scored ${userScore} and got a grade of C. Poor performance dear!`);        
//         break;
//     default:
//         alert(`${formattedName}, you got an F! You need to study harder!`);
//         break;
// }


// // a = (91 -100), b = (81 - 90), c = (71 - 80), f = (0 - 70)