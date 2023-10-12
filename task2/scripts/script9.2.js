function getFactorial(n) {
    if (isNaN(n) || n < 0) {
        return 'not a number';
    }

    if (n === 0) {
        return 1;
    }

    return n * getFactorial(n - 1);
}

function multiply(x) {
    return function(y) {
        if (y === undefined) {
            return x;
        } else {
            return multiply(x * y);
        }
    };
}

module.exports = {
    getFactorial,
    multiply,
};
