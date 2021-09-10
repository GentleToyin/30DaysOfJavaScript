// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /^This/g // ^ means starts with
// const matches = txt.match(pattern)
// console.log(matches)  // ['This']


const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const pattern = /\d+/g

const matches = text.match(pattern)

console.log(matches)

const [salary, bonus, online] = matches
const sal = Number(salary)
const bon = Number(bonus)
const onlPay = Number(online)
const totalPay = (sal * 12) + bon + (onlPay * 12)

console.log(totalPay)