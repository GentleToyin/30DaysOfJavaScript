// class Person {

// }
// const person = new Person()

// console.log(person)


// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
// }

// const person = new Person('Toyin', 'Olanipekun')

// console.log(person)
// const person2 = new Person('Oyelola', 'Aliu')
// console.log(person2)
// const person3 = new Person('Oladayo', 'Oladipupo')
// console.log(person3)

// class Person {
//     constructor(firstName, lastName, age, country, city) {
//         console.log(this)
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//     }
// }

// const person1 = new Person('Toyin', 'Olanipekun', '28', 'Nigeria', 'Abuja')

// console.log(person1.age)


// class Person {
//     constructor(
//         firstName = 'Toyin',
//         lastName = 'Olanipekun',
//         age = 28,
//         country = 'Nigeria',
//         city = 'Abuja'
//     ) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//     }
// }

// const person1 = new Person()
// const person2 = new Person('Aliu', 'Oyelola')

// console.log(person1)
// console.log(person2)


// class Person {
//     constructor(firstName, lastName, age, country, city) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//     }
//     getFullName() {
//         const fullName = this.firstName + ' ' + this.lastName
//         return fullName
//     }
// }

// const person1 = new Person('Toyin', 'Olanipekun', '28', 'Nigeria', 'Abuja')
// console.log(person1.getFullName())

// class Person {
//     constructor(firstName, lastName, age, country, city) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//         this.score = 0
//         this.score = []
//     }
//     getFullName() {
//         const fullName = this.firstName + ' ' + this.lastName
//         return fullName
//     }
//     get getScore() {
//         return this.score
//     }
//     get getSkills() {
//         return this.skills
//     }
// }


// class Person {
//     constructor(firstName, lastName, age, country, city) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//         this.score = 0
//         this.skills = []
//     }
//     getFullName() {
//         const fullName = this.firstName + ' ' + this.lastName
//         return fullName
//     }
//     get getScore() {
//         return this.score
//     }
//     get getSkills() {
//         return this.skills
//     }
//     set setScore(score) {
//         this.score += score
//     }
//     set setSkill(skill) {
//         this.skills.push(skill)
//     }
//     getPersonInfo() {
//         let fullName = this.getFullName()
//         let skills =
//             this.skills.length > 0 &&
//             this.skills.slice(0, this.skills.length - 1).join(', ') +
//             ` and ${this.skills[this.skills.length - 1]}`

//         let formattedSkills = skills ? `He knows ${skills}` : ''

//         let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
//         return info
//     }
//     static favoriteSkill() {
//         const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
//         const index = Math.floor(Math.random() * skills.length)
//         return skills[index]
//     }
//     static showDateTime() {
//         let now = new Date()
//         let year = now.getFullYear()
//         let month = now.getMonth() + 1
//         let date = now.getDate()
//         let hours = now.getHours()
//         let minutes = now.getMinutes()
//         if (hours < 10) {
//             hours = '0' + hours
//         }
//         if (minutes < 10) {
//             minutes = '0' + minutes
//         }

//         let dateMonthYear = date + '.' + month + '.' + year
//         let time = hours + ':' + minutes
//         let fullTime = dateMonthYear + ' ' + time
//         return fullTime
//     }
// }

// class Student extends Person {
//     saySomething() {
//         console.log('I am a child of the person class')
//     }
// }

// const s1 = new Student('Toyin', 'Olanipekun', 'Finland', '250', 'Helsinki')

// console.log(s1)
// console.log(s1.saySomething())
// console.log(s1.getFullName())
// console.log(s1.getPersonInfo())



class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
}

const cat = new Animal('Tom', 2, 'Brown', 4)

const dog = new Animal('Shep', '5', 'Black', 4)

console.log(cat)