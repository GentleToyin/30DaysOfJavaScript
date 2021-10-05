try {
    let lastName = 'Toyin'
    let fullName = firstName + ' ' + lastName
}
catch (err) {
    console.log(err)
}

try {
    let lastName = "Olanipekun"
    let fullName = firstName + ' ' + lastName
} catch (err) {
    console.log(err)
}
finally {
    console.log('In any case I will be executed')
}

try {
    let lastName = 'Olanipekun'
    let fullName = firstName + ' ' + lastName
}
catch (err) {
    console.log('Name of error is ' + err.name)
    console.log('Error message is ' + err.message)
}
finally {
    console.log('In any case I will be executed')
}

const throwExmapleFun = () => {
    let message
    let x = prompt('Enter a number')

    try {
        if (x == '') throw 'empty'
        if (isNaN(x)) throw 'not a number'
        x = Number(x)
        if (x < 5) throw 'too low'
        if (x > 10) throw 'too high'
    }
    catch (err) {
        console.log(err)
    }
}
throwExmapleFun()


