// const numbers = [1, 2, 3, 4, 5];

// // const oddNumber = numbers.map((number) => number + 1)

// // console.log(oddNumber)

// // let foreach = numbers.forEach((number) => console.log(number * 10))

// // let filtred = numbers.filter(number => number % 2 !== 0)

// // let mapped = filtred.map(num => num * 10)
// // console.log(mapped)
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
// ]

// const countryToUppercase = countries.filter((country) => country.includes("land"))
// console.log(countryToUppercase)

// const slicedCountries = countryToUppercase.map(country => {
//     return (country.slice(0, 3))
// })
// console.log(slicedCountries)

// const bools = ['apple', 'orange', 'mango', 'pineapple']

// const areSomeTrue = bools.some((b) => {
//     return b === 'orange'
// })

// console.log(areSomeTrue)

// const sortedNumber = numbers.sort(function (a, b) {
//     return b - a
// })

// console.log(numbers)
// console.log(sortedNumber)




const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

countries.forEach(country => (console.log(country)))
names.forEach(name => (console.log(name)))
numbers.forEach(number => console.log(number))

const upperCasedCountry = countries.map(country => country.toUpperCase())

console.log(upperCasedCountry)

const squareNumbers = numbers.map(number => (number * number))

console.log(squareNumbers)

const upperCasedNames = names.map(name => name.toUpperCase())
console.log(upperCasedNames)

const filtredLandCountries = countries.filter(country => country.includes("land"))

console.log(filtredLandCountries)

const filteredCountrylength = countries.filter(country => country.length >= 6)

console.log(filteredCountrylength)

const filteredProductPrice = products.filter(product => product.price)

console.log(filteredProductPrice)

const sumNumbers = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sumNumbers)

const sumCountries = countries.reduce((acc, cur) => acc + ", " + cur)
console.log(sumCountries + " are north European countries")

const someName = names.some((name) => name.length > 7)

console.log(someName)

const countriesIncludeLand = countries.every((country) => country.includes("land"))

console.log(countriesIncludeLand)


