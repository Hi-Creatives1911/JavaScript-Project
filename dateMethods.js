const IsValidDateFormat = (date) => {
  const regex = /^(0[1-9]|[12][0-9]|3[01])[\/\-](0[1-9]|1[0-2])\2\d{4}$/;
  return regex.test(date);
};

const IsValidDate = (date) => {
  const today = new Date();
  const [day, month, year] = date.split(/[\/-]/).map(Number);
  const userDate = new Date(year, month - 1, day);

  if (
    userDate.getDate() !== day ||
    userDate.getMonth() !== month - 1 ||
    userDate.getFullYear() !== year
  ) {
    return false;
  }

  today.setHours(0, 0, 0, 0);
  userDate.setHours(0, 0, 0, 0);

  return userDate.getTime() >= today.getTime();
};

const IsValidDateWithFormat = (date) => {
  while (true) {
    if (IsValidDateFormat(date)) {
      while (true) {
        if (IsValidDate(date)) {
          console.log("done");
          break;
        } else {
          date = prompt("Please enter a real date (today or future) in DD-MM-YYYY:");
        }
      }
      break;
    } else {
      alert("Invalid format. Use DD-MM-YYYY or DD/MM/YYYY.");
      date = prompt("Enter a date (DD-MM-YYYY):");
    }
  }
  return date;
};

let userTasks = JSON.parse(localStorage.getItem("userTasks")) || [];

while (true) {
  let userDate = prompt(`Enter date (DD/MM/YYYY):\n(Type "DONE" to finish)`);
  if (!userDate || userDate.trim().toUpperCase() === "DONE") {
    break;
  }

  userDate = IsValidDateWithFormat(userDate);

  let [day, month, year] = userDate.split(/[\/-]/).map(Number);
  const targetDate = new Date(year, month - 1, day);
  const timeLeft = targetDate.getTime() - new Date().getTime();

  let userTask = prompt(`Enter tasks for ${userDate} - Use commas to separate tasks\nOR PRESS ENTER FOR ANOTHER DATE:`);

  let trimmed = userTask.trim();
  let tasks = [];
  if (trimmed !== "") {
    tasks = trimmed.split(",")
      .map(task => task.trim())
      .map(task => task.charAt(0).toUpperCase() + task.slice(1).toLowerCase());
  } else {
    console.log("No tasks entered. Moving to next date.");
    continue;
  }

  userTasks.push({ Date: userDate, tasks, timestamp: targetDate.getTime() });
  localStorage.setItem("userTasks", JSON.stringify(userTasks));

  console.log(`Tasks for ${userDate}: \n${tasks.join("\n")} \nYou have ${Math.ceil(timeLeft / (1000 * 60 * 60 * 24))} days left.`);
  console.log("Tasks added successfully!");
}

userTasks.sort((a, b) => a.timestamp - b.timestamp);

console.log("\nSorted Task List:");
userTasks.forEach(entry => {
  console.log(`\nDate: ${entry.Date}\nTasks:\n${entry.tasks.join("\n")}`);
});
