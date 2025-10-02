/*
    - Create a type alias Point for an object with x and y coordinates (both numbers).
    - Write a function that takes two Point objects and returns the Euclidean distance between them
    as a number.
*/

type Point = {
    x: number;
    y: number;
};

function calculateDistance(point1: Point, point2: Point): number {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    
    return Math.sqrt(dx * dx + dy * dy);
}

const p1: Point = { x: 0, y: 0};
const p2: Point = { x: 3, y: 4};

console.log(calculateDistance(p1, p2)); 