function powerCalculator(base, ex) {
    let num
    if (ex <= 0) {
        return console.log('exponent should be >= 0')
    }
    for (let i=0; i < ex; i++) {
        num *= num
    }
    return num
}