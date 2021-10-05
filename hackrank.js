


let array = [0, 0, 0, 1, 0, 0]

function jumpingOnClouds(c) {
    // Write your code here
    let jump = 0;
    for (var i = 0; i < c.length; i++) {
        // let A = c[i];
        // let B = c[i+1]
        // let loopPos = 0;
        // if(A===B){
        //     loopPos+=1;
        // }
        // else{
        //     loopPos=loopPos
        // }
        let nextIndex = c[i + 1]
        if ((c[i] === 0) && (c[i] + nextIndex) === 0) {
            jump += 1
            i = 2;
        }
        else if (c[i + 1] === 0) {
            jump += 1
        }
        else {
            jump += 0
        }
    }
    return jump;
    console.log(nextIndex)
}

