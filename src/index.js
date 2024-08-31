module.exports = function check(str, bracketsConfig) {
  // your solution
  function check(str, bracketsConfig) {
    const stack = [];
    const bracketsMap = new Map(bracketsConfig);

    for (let char of str) {
        if (bracketsMap.has(char)) {
            if (stack.length > 0 && stack[stack.length - 1] === char) {
                stack.pop();
            } else {
                stack.push(char);
            }
        } else {
            const lastOpening = stack.pop();
            if (bracketsMap.get(lastOpening) !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
}
