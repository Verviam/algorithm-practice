let previousNum = 0
let currentNum = 1

function fibonacci(num) {
    for (let i=0; i<=num; i++){
        const nextNum = previousNum + currentNum
        previousNum = currentNum
        currentNum = nextNum
        console.log(currentNum)
    }
}
fibonacci(6);    
