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

// Add Event Listeners
// Create class instance, passing in user inputs on event
// Call Class Method
hourlyRate.addEventListener('keyup', () => {
  const employee1 = new Employee(
    hourlyRate.value,
    dailyHours.value,
    workingDays.value,
    new Date(periodStart.value),
    new Date(periodEnd.value)
  );
  wageInPeriod.value = employee1.getWageInPeriod();
});

dailyHours.addEventListener('keyup', () => {
  const employee1 = new Employee(
    hourlyRate.value,
    dailyHours.value,
    workingDays.value,
    new Date(periodStart.value),
    new Date(periodEnd.value)
  );
  wageInPeriod.value = employee1.getWageInPeriod();
});

workingDays.addEventListener('keyup', () => {
  const employee1 = new Employee(
    hourlyRate.value,
    dailyHours.value,
    workingDays.value,
    new Date(periodStart.value),
    new Date(periodEnd.value)
  );
  wageInPeriod.value = employee1.getWageInPeriod();
});

periodStart.addEventListener('click', () => {
  const employee1 = new Employee(
    hourlyRate.value,
    dailyHours.value,
    workingDays.value,
    new Date(periodStart.value),
    new Date(periodEnd.value)
  );
  wageInPeriod.value = employee1.getWageInPeriod();
});

periodStart.addEventListener('keyup', () => {
  const employee1 = new Employee(
    hourlyRate.value,
    dailyHours.value,
    workingDays.value,
    new Date(periodStart.value),
    new Date(periodEnd.value)
  );
  wageInPeriod.value = employee1.getWageInPeriod();
});

periodEnd.addEventListener('click', () => {
  const employee1 = new Employee(
    hourlyRate.value,
    dailyHours.value,
    workingDays.value,
    new Date(periodStart.value),
    new Date(periodEnd.value)
  );
  wageInPeriod.value = employee1.getWageInPeriod();
});

periodEnd.addEventListener('keyup', () => {
  const employee1 = new Employee(
    hourlyRate.value,
    dailyHours.value,
    workingDays.value,
    new Date(periodStart.value),
    new Date(periodEnd.value)
  );
  wageInPeriod.value = employee1.getWageInPeriod();
});
