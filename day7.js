function Fullname(firstName, lastName){
    let space =" "
    let fullName= firstName + space+ lastName
    return fullName
}

console.log(Fullname("Ayo", "Alade"))


function addNumber(firstNumber, secondNumber){
    let sum= firstNumber + secondNumber
    return sum
}

console.log(addNumber(10, 20))

function areaOfRectangle(length,width){
    area= length*width
    return area
}

console.log(areaOfRectangle(4,2))

function perimeter(length,width){
    area= 2*(length*width)
    return area
}

console.log(perimeter(4,2))

function volumeOfRectPrism(length,width){
    area= 2*(length*width*length)
    return area
}

console.log(volumeOfRectPrism(4,2))

function areaOfCircle(r){
    let pi = 3.148
    let area = pi *r*r
    return area
}
console.log(areaOfCircle(56))


function solveLinEquation(a,b,c,x,y){
    linEquation = (a*x) + (b*y) + c

    return linEquation
}

console.log(solveLinEquation(2,3,4,5,6))

function solveQuadEquation(a,b,x,c){
    Quadquation = (a*x*2) + (b*x) + c

    return QuadEquation
}