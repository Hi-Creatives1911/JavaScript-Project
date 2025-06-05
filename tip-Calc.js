const bills = []; // Start with an empty array
while (true) {
  const billname = prompt("Enter bill name (or type 'done' to finish):");
  if (!billname || billname.trim().toLowerCase() === "done") break;
    if (!isNaN(billname) || billname.trim() === "") {
        alert("Please enter a valid bill name.");
        continue; // go back to top of loop
    }

    let formattedBillName = billname
    .trim()
    .split(" ")
    .map( billname => (billname.charAt(0).toUpperCase() + billname.slice(1).toLowerCase()))
    .join (" ");

  const priceInput = prompt(`Enter price for "${billname}":`);
  const price = parseFloat(priceInput);

  if (isNaN(price)) {
    alert("Invalid price. Please enter a number.");
    continue; // go back to top of loop
  }

  bills.push({ billname: formattedBillName.trim(), price });
}


const priceTotal = parseFloat(bills
.reduce((total, bill) => total + bill.price, 0)
.toFixed(2));
const tipPercentage = parseFloat(prompt("Enter tip percentage (e.g., 15 for 15%):"));
const tipTotal = (isNaN(tipPercentage) || tipPercentage <= 0) ? 0 : (priceTotal * (tipPercentage / 100));
const billTotal = (priceTotal + tipTotal).toFixed(2);


document.write("<h2>Bill Summary</h2>");
bills.forEach(bill => {
  document.write(`<p><strong>${bill.billname}</strong>: $${bill.price.toFixed(2)}</p>`);
});
document.write(`<p>Your bill was <strong>$${priceTotal}</strong><br></p>`);
document.write(`<p>You tipped <strong>${(isNaN(tipPercentage) || tipPercentage < 0) ? tipTotal : tipPercentage}%</strong><br></p>`);
document.write(`<p>Total amount to pay: <strong>$${billTotal}</strong></p>`);