emptyArray = [];

arrayof5 = [1,2,3,4,5];
console.log(arrayof5.length);
console.log(arrayof5[0]);
console.log(arrayof5[2]);
console.log(arrayof5[4]);

mixedDataTypes=["happy", "very happy", 12, true, "orange", [1,2,3], {schools: "unilorin kwasu"}];

itCompanies=["Facebook", "Google"," Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies.length);
console.log(itCompanies)
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);

for(i=0; i<itCompanies.length; i++){
    console.log(itCompanies[i])
}

for(i=0; i<itCompanies.length; i++){
    console.log(itCompanies[i].toUpperCase())
}
console.log(itCompanies.toString())
itCompanies.includes("Facebook")
? console.log("Facebook")
:console.log("Not Found")

console.log(itCompanies.sort())
console.log(itCompanies.reverse())
console.log(itCompanies.slice(1,4))
console.log(itCompanies.slice(4,8))
console.log(itCompanies.slice(3))
console.log(itCompanies.splice(0,1))
console.log(itCompanies.splice(4,1))
console.log(itCompanies.splice(4,1))
console.log(itCompanies.splice())
console.log(itCompanies)

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.split(" "))
console.log(text.split(" ").length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
shoppingCart.push("Sugar")
shoppingCart.pop("Sugar")
shoppingCart.splice(3,1,"Green Tea")
console.log(shoppingCart)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack= frontEnd.concat(backEnd)

console.log(fullStack)
