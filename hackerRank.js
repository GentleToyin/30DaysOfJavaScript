
function solveMeFirst(a, b) {
    // Hint: Type return a+b below   
      return a+b
  }


  function gradingStudents(grades) {
    // Write your code here
    return grades.map(grade => {
        const round = Math.ceil((grade + 1)/5) * 5;
        return(round-grade < 3) && grade >= 38 ? round : grade;
        
    });
}



function sockMerchant(n, ar) {
    // Write your code here
    const map = {};
    let sockPair = 0;
    ar.forEach(num=> {
        if(!map[num]) map [num] = true;
        else {
            delete map[num];
            sockPair++
        }
    });
    return sockPair

}


function countingValleys(steps, path) {
    // Write your code here
    let valley = 0;
    let position = 0;
    
    for (const step of path){
        let prevLevel = position;
        position = step === 'U' ? position + 1: position -1;
        if (prevLevel == -1 && position==0) valley++
        
    }
    return valley
}