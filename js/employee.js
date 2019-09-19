// Calculator Logic
// Employee Class
export default class Employee {
  constructor(hourlyRate, dailyHours, workingDays, periodStart, periodEnd) {
    // Class properties
    this.hourlyRate = hourlyRate;
    this.dailyHours = dailyHours;
    this.workingDays = workingDays;
    this.periodStart = periodStart;
    this.periodEnd = periodEnd;
  }

  // Class Methods
  getHourlyWage() {
    console.log(`You earn ${this.hourlyRate} euros per hour.`);
    console.log(this.periodStart);
  }

  getDailyWage() {
    const dailyRate = this.hourlyRate * this.dailyHours;
    console.log(`You earn ${dailyRate} euros per day.`);
  }

  // Returns total gross wage earned in a given period of time, excluding 2 off days per 7 day span.
  getWageInPeriod() {
    // Calculate daily rate
    const dailyRate = this.hourlyRate * this.dailyHours;
    // Set time
    // Start just after midnight
    this.periodStart.setHours(0, 0, 0, 1);
    // End just before midnight
    this.periodEnd.setHours(23, 59, 59, 999);
    // Calculate period. Convert milliseconds to days
    let days = Math.round((this.periodEnd - this.periodStart) / 86400000);
    // Subtract 2 Weekends for every 7 day span (1 week)
    const weeks = Math.floor(days / 7);
    days = days - weeks * 2;
    // Remove start day if span starts on Sunday but ends before Saturday
    if (this.periodStart.getDay() == 0 && this.periodEnd.getDay() != 6)
      days = days - 1;
    // Remove end day if span ends on Saturday but starts after Sunday
    if (this.periodEnd.getDay() == 6 && this.periodStart.getDay() != 0)
      days = days - 1;
    // console.log(days);
    // Subtract difference in days if working week < 5 day week
    const differenceInDays = 5 - this.workingDays;
    if (weeks == 0) {
      // if no 7 day span, subtract differenceInDays from days
      days = days - differenceInDays;
      if (days < 0) {
        days = 0;
      }
    } else {
      days = days - weeks * differenceInDays;
    }
    // Multiply days by daily wage
    const totalWageInPeriod = (days * dailyRate).toFixed(2);
    // Return total wage in period
    // console.log(
    //   `You earned €${totalWageInPeriod} between ${this.periodStart.getDate()}-${this.periodStart.getMonth() +
    //     1}-${this.periodStart.getFullYear()} and ${this.periodEnd.getDate()}-${this.periodEnd.getMonth() +
    //     1}-${this.periodEnd.getFullYear()}`
    // );
    console.log(`€${totalWageInPeriod}`);
    return totalWageInPeriod;
  }
}
