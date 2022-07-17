module.exports = function check(str, bracketsConfig) {
  const openBrakets = bracketsConfig.map(arr => arr[0])
    const closeBrakets = bracketsConfig.map(arr => arr[arr.length - 1])
    let stack = []
    for(let i = 0; i < str.length; i++) {
        let topIndex = openBrakets.indexOf(stack[stack.length - 1])
        const current = str[i]
        if(closeBrakets.includes(current)) {
            topIndex === closeBrakets.indexOf(current) ? stack.pop() : stack.push(current)   
        } else {
            stack.push(current)
        } 
    }
    return stack.length === 0
}


