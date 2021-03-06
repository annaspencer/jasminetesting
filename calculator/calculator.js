window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});



function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {
    amount  : 10000,
    years : 10,
    rate : 20,
  };
  const loanAmount = document.getElementById('loan-amount');
  loanAmount.defaultValue = values.amount;
  const loanYears = document.getElementById('loan-years');
  loanYears.defaultValue = values.years;
  const loanRate = document.getElementById('loan-rate');
  loanRate.defaultValue = values.rate;
  
  
  
   calculateMonthlyPayment(values);
   
  
  
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const formInputs = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(formInputs));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
 const interest = values.rate / 1200;
 const numPayments =values.years * 12;
 const denom = (1 - Math.pow((1 + interest), -numPayments)).toFixed(3);
 const numer = values.amount * interest;
 const monthlyPayment = numer/denom;

 return monthlyPayment.toFixed(2);


}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayOutput = document.getElementById('monthly-payment');
  monthlyPayOutput.innerText = "$" + monthly;
}
