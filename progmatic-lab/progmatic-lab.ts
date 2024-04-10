function equals200(): string {
  const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  let result: string[] = [];

  function generateCombinations(current: number, index: number, expression: string) {
    if (index === numbers.length) {
      let res = eval(expression);
      if (res === 200) {
        result.push(expression);
      }
      return;
    }

    const nextNum = numbers[index];
    generateCombinations(current + nextNum, index + 1, `${expression}+${nextNum}`);
    generateCombinations(current - nextNum, index + 1, `${expression}-${nextNum}`);
    generateCombinations(current * 10 + nextNum, index + 1, `${expression}${nextNum}`);
  }

  generateCombinations(numbers[0], 1, `${numbers[0]}`);
  
  return result.join(', ');
}

console.log(equals200()); // 9-8+7-6-5-4-3+210, 9-8-7-6-5+4+3+210, 98+76-5+43-2-10, 98-7+65+43+2-1+0, 98-7+65+43+2-1-0