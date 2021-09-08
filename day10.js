const mySet = new Set()

console.log(mySet)

for (i = 0; i < 10; i++) {
    mySet.add(i)
}
console.log(mySet)
mySet.delete(3)
console.log(mySet)
mySet.clear()
console.log(mySet)

const names = ['James', 'John', 'Peter', 'Philip', 'Alex']

namesSet = new Set(names)

console.log(namesSet)

const countries = [
    ['Finland', `${'Finland'.length}`],
    ['England', `${'England'.length}`],
    ['Nigeria', `${'Nigeria'.length}`],
    ['Estonia', `${'Estonia'.length}`],
    ['Canada', `${'Canada'.length}`],
    ['Togo', `${'Togo'.length}`]
]

const map = new Map(countries)

console.log(map)


const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]



let A = new Set(a)
let B = new Set(b)
let c = a.filter((num) => B.has(num))
let C = new Set(c)
console.log(C)



let interC = a.filter((num) => !B.has(num))
let Intersection = new Set(interC)
console.log(Intersection)

