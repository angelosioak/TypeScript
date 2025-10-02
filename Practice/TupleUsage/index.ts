/*
    - Define a tuple type to represent a student's name (string) and their grades (array of numbers).
    - Write a function that takes this tuple and returns the average of the grades
*/

type Student = [string, number[]];

function averageGrade(student: Student): number {
    const grades = student[1];

    return grades.length > 0 ? grades.reduce((sum, grade) => sum + grade, 0) / grades.length : 0;
}

const student: Student = ["Alice", [85, 90, 95]];