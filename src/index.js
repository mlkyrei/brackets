module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketMap = new Map(bracketsConfig.map(([open, close]) => [open, close]));

  for (let char of str) {
      if (bracketMap.has(char)) {
          if (char === bracketMap.get(char) && stack.length > 0 && stack[stack.length - 1] === char) {
              stack.pop();
          } else {
              stack.push(char);
          }
      } else {
          if (stack.length === 0 || bracketMap.get(stack.pop()) !== char) {
              return false;
          }
      }
  }

  return stack.length === 0;
}
