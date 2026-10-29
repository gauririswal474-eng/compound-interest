// Compound Interest Calculation
// Formula: A = P * (1 + r/n)^(n*t)

// Predefined (static) values
const principal = 10000;   // P = principal amount
const rate = 0.05;         // r = annual interest rate (5% as a decimal)
const timesCompounded = 1; // n = times interest is compounded per year
const years = 3;           // t = time in years

// Amount after t years (principal + interest)
const amount = principal * Math.pow(1 + rate / timesCompounded, timesCompounded * years);

// Compound interest earned = final amount - principal
const compoundInterest = amount - principal;

const message = `The compound interest after ${years} years is: ${compoundInterest.toFixed(2)}`;

// Display the result in the console and on the page
console.log(message);
document.getElementById("result").textContent = message;
