module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketMap = new Map(bracketsConfig.map(([open, close]) => [close, open]));

  for (let char of str) {
      if (bracketMap.has(char)) {
          const lastOpening = stack.pop();
          if (bracketMap.get(char) !== lastOpening) {
              return false;
          }
      } else {
          if (stack.length > 0 && stack[stack.length - 1] === char) {
              stack.pop();
          } else {
              stack.push(char);
          }
      }
  }

  return stack.length === 0;
}
