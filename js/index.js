// import calculator logic
import Employee from './employee.js';

// DOM Selectors
const hourlyRate = document.getElementById('hourly-rate');
const dailyHours = document.getElementById('daily-hours');
const workingDays = document.getElementById('working-days');
const periodStart = document.getElementById('period-start');
const periodEnd = document.getElementById('period-end');
const wageInPeriod = document.getElementById('wage-in-period');

// Default Date Values
periodStart.value = '2019-09-16';
periodEnd.value = '2019-09-20';

function getWage() {
  // Create class instance, passing in user inputs as class properties
  // Call Class Method
  const employee1 = new Employee(
    hourlyRate.value,
    dailyHours.value,
    workingDays.value,
    new Date(periodStart.value),
    new Date(periodEnd.value)
  );
  wageInPeriod.value = employee1.getWageInPeriod();
}

// Add Event Listeners and call getWage()
hourlyRate.addEventListener('keyup', () => {
  getWage();
});

dailyHours.addEventListener('keyup', () => {
  getWage();
});

workingDays.addEventListener('keyup', () => {
  getWage();
});

periodStart.addEventListener('click', () => {
  getWage();
});

periodStart.addEventListener('keyup', () => {
  getWage();
});

periodEnd.addEventListener('click', () => {
  getWage();
});

periodEnd.addEventListener('keyup', () => {
  getWage();
});
