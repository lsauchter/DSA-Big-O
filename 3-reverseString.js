function reverseString(string) {
    const arr = string.split('')
    let newOrder = []

    for (let i=(arr.length-1); i >= 0; i--) {
        newOrder.push(arr[i])
    }

    newOrder.join('')
    return newOrder
}