// const date = new Date();
// const day = date.getDate();
// const month = date.getMonth() + 1; 
// const year = date.getFullYear();
// const currentDate = `${day}/${month}/${year}`;

// const tasks = [];

// while (true) {
//     const userTasks = prompt(`Enter your tasks for today. \nType "exit" to finish.`);
//     if (userTasks === null || userTasks.trim() === "") {
//         alert("You must enter at least one task.");
//         continue;
//     } else if (userTasks.toLowerCase().trim() === "exit") break;

//     const trimmedTask = userTasks
//     .trim()
//     .split(" ")
//     .map (word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join();

//     const taskDate = prompt("Enter the date for these tasks (DD/MM/YYYY)");
//     let taskDateSpl = taskDate.split('/');
//     if (taskDateSpl.length !== 3) {
//         alert("Please enter a valid date in the format DD/MM/YYYY.");
//         continue;
//     }else if (isNotValidDate(taskDate)) {
//         alert(`Please enter a valid date ("use format DD/MM/YYYY").`);
//         continue;
//     }
//         else if (isPast(taskDateSpl)) {
//         alert(`The tasks for ${taskDate} are past due.`);
//         continue;
//     };

//     tasks.push({trimmedTask, taskDate});
// } 

// console.log(tasks);


// function isPast(userDate) {
//     // returns true or false

//     const date = new Date();
//     const day = date.getDate();
//     const month = date.getMonth() + 1; 
//     const year = date.getFullYear();
//     const taskDay = parseInt(userDate[0], 10);
//     const taskMonth = parseInt(userDate[1], 10);  
//     const taskYear = parseInt(userDate[2], 10);

//     switch (true) {
//         case taskYear < year:
//             return true;
//         case taskYear === year && taskMonth < month:
//             return true;
//         case taskYear === year && taskMonth === month && taskDay < day:
//             return true;
//         default:
//             return false;
//     }
// }

// function isNotValidDate(userDate) {
//     // returns true or false
//     const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
//     if(!datePattern.test(userDate)) {
//         return true;
//     }

//     const [userDay, userMonth, userYear] = userDate.split("/");
//     const userDayInt = parseInt(userDay, 10);
//     const userMonthInt = parseInt(userMonth, 10) - 1;
//     const userYearInt = parseInt(userYear, 10);
//     const date = new Date(userYearInt, userMonthInt, userDayInt);

//     return date.getDate() !== userDayInt && 
//            date.getMonth() !== userMonthInt && 
//            date.getFullYear() !== userYearInt;
// }