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


const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// allpoints = [...points]

// console.log(allpoints)

// setPoints = new Set(allpoints)

// let numberedPoints = points.map(point => parseInt(point))

// console.log(numberedPoints)

// sortedNumberedPoints = numberedPoints.sort((a, b) => a - b)

// console.log(sortedNumberedPoints)
// sum = 0
// sortedNumberedPoints.map(point => {

//     sum += point
// })
// console.log(sum)

// let last = sortedNumberedPoints.length - 1

// console.log(sortedNumberedPoints[0] * (-1) + sortedNumberedPoints[last])



var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

console.log(myStr)