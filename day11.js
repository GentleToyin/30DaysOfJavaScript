const constants = [2.72, 3.14, 9.81, 37, 100]

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

console.log(pi)


const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

let [fin, est, sw, den, nor] = countries

console.log(nor)


const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}

let { width, height, area, perimeter } = rectangle

console.log(perimeter)

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

// for (const { name, scores, skills, age } of users) {
//     console.log(name, scores, skills, age)
// }

for (const { skills } of users) {
    if (skills.length < 2) {
        console.log(skills)
    }
}


const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

let [names, skills, jsScore, ReactScore] = student
console.log(names, skills, jsScore, ReactScore)




const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

console.log(convertArrayToObject(students))
[
    {
        name: 'David',
        skills: ['HTM', 'CSS', 'JS', 'React'],
        scores: [98, 85, 90, 95]
    },
    {
        name: 'John',
        skills: ['HTM', 'CSS', 'JS', 'React'],
        scores: [85, 80, 85, 80]
    }
]