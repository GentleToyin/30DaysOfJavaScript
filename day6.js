for (i=0; i<=10; i++){
    console.log(i)
}

i=0;

while(i<=10){
    console.log(i)
    i++
}
i=0;
do{
    console.log(i)
    i++
} while(i<=10)


for (i=10; i>=10; i--){
    console.log(i)
}

i=10;

while(i>=0){
    console.log(i)
    i--
}
i=10;
do{
    console.log(i)
    i--
} while(i>=0)

let hash=""

for(i=0; i<=7; i++){
console.log(hash+="#")

}

for (i=0; i<=10; i++){
    console.log(`${i} x ${i}  = ${i*i} `)
}
for (i=0; i<=10; i++){
    console.log(`${Math.pow(i,1)}   ${Math.pow(i,2)}   ${Math.pow(i,3)} `)
}

for(i=1; i<=100; i++){
    if(i%2){
    }else{
        console.log("Even Number: ",i)
    }
}


for(i=1; i<=100; i++){
    if(i%2){
        console.log("Odd Number: ",i)
    }else{
        
    }
}

// for(i=1; i<=100; i++){
//     if(i%i){
//     }else{
//         console.log("Prime Number: ",i)
//     }
// }
let sum =0;
for (i=0; i<=100; i++){
    sum+=i
}
console.log("The sum of all numbers from 0 to 100 is ",sum)

sumOdd = 0;
sumEven = 0;
sumArray = [];

for(i=0; i<=100; i++){
    if(i%2){
        sumOdd+=i
    }else{
        sumEven +=i
    }
}

console.log("The sum of all even numbers is ",sumEven, "The sum of all odd number is ",sumOdd)

sumArray.push(sumOdd);
sumArray.push(sumEven);

console.log(sumArray)

