function equals200() {
    var numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    var result = [];
    function generateCombinations(current, index, expression) {
        if (index === numbers.length) {
            var res = eval(expression);
            if (res === 200) {
                result.push(expression);
            }
            return;
        }
        var nextNum = numbers[index];
        generateCombinations(current + nextNum, index + 1, "".concat(expression, "+").concat(nextNum));
        generateCombinations(current - nextNum, index + 1, "".concat(expression, "-").concat(nextNum));
        generateCombinations(current * 10 + nextNum, index + 1, "".concat(expression).concat(nextNum));
    }
    generateCombinations(numbers[0], 1, "".concat(numbers[0]));
    return result.join(', ');
}
console.log(equals200()); // 9-8+7-6-5-4-3+210, 9-8-7-6-5+4+3+210, 98+76-5+43-2-10, 98-7+65+43+2-1+0, 98-7+65+43+2-1-0