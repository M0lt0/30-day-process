//Exercises: Level 1
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]
//Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
let elementsOfConst = [e, pi, gravity, humanTemp, boilingPoint] = constants;
console.log(elementsOfConst);
console.log("-_-___________----_______-----______-----_____");

//Destructure and assign the elements of countries array to fin, est, sw, den, nor
let [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);
console.log("-_-___________----_______-----______-----_____");
//Destructure the rectangle object by its properties or keys.
let { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter);
console.log("-_-___________----_______-----______-----_____");
//Exercises: Level 2
//Iterate through the users array and get all the keys of the object using destructuring
for (const { name, scores, skills, age } of users) {
    console.log(name, scores, skills, age);
}
console.log("-_-___________----_______-----______-----_____");
//Find the persons who have less than two skills
for (const { name, skills } of users) {
    if (skills.length < 2) {
        console.log(name, skills, "dh 3yl 5wl");
    }
}



