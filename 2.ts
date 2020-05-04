function isEven(num: number): boolean {
    // Returns True if **num** is even or False if it is odd.
    return Boolean(num % 2);
}

export function testsIsEven(value: boolean) {
    return {
        resultOfTest: (boolean: boolean) => {
            return boolean === value ? 'Test pass' : 'Error'
        }
    }
}

testsIsEven(isEven(10)).resultOfTest(true);
testsIsEven(isEven(15)).resultOfTest(false);
testsIsEven(isEven(222)).resultOfTest(true);
