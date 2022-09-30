function temperature(degree) {
    if (degree === 25) {
        console.log('At room temperature')
    } else if (degree <25){
        console.log('Temperature is low')
    } else {
        console.log('Temperature is high')
    }
}

let temp = temperature(78);
console.log(temp)