// localStorage.setItem('firstName', 'Toyin')

// console.log(localStorage)

// localStorage.setItem('age', 200)
// console.log(localStorage)

// const skills = ['HTML', 'CSS', 'JS', 'React']

// const skillsJSON = JSON.stringify(skills, undefined, 4)
// localStorage.setItem('skills', skillsJSON)
// console.log(localStorage)



// // localStorage.clear()

// let skill = localStorage.getItem('skills')

// console.log(skill)

let personInfo = {
    firstName: 'Toyin',
    lastName: 'Olanipekun',
    age: 28,
    country: 'Nigeria',
    city: 'Abuja'
}

console.log(personInfo)

let newPersonInfo = JSON.stringify(personInfo, undefined, 4)
console.log(newPersonInfo)
localStorage.setItem('personInfo', newPersonInfo)

console.log(localStorage)


