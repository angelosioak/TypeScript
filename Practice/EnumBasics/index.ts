/*
    - Define an enum for the seven days (e.g., Monday, Tuesday, etc,).
    - Write a function that takes a value and returns a boolean indicating whether the day is 
    a weeknd.
*/

enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function isWeekend(day: DaysOfWeek): boolean {
    return day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday;
}

console.log(isWeekend(DaysOfWeek.Monday));