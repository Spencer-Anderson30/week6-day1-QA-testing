let myFunctions = require('./functions')

test('Return Two Test', () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test('Greetings Test', () => {
    expect(myFunctions.greeting('James')).toBe('Hello James.')
    expect(myFunctions.greeting('Jill')).toBe('Hello Jill.')
})

test('Addition Test', () => {
    expect(myFunctions.add(1, 2)).toBe(3)
    expect(myFunctions.add(5, 9)).toBe(14)
})

test('Subtraction Test', () => {
    expect(myFunctions.subtract(9, 3)).toBe(6)
    expect(myFunctions.subtract(10,5)).toBe(5)
})

test('Multiply Test', () => {
    expect(myFunctions.multiply(3, 3)).toBe(9)
    expect(myFunctions.multiply(10, 10)).toBe(100)
})

test('Division Test', () => {
    expect(myFunctions.divide(3, 3)).toBe(1)
    expect(myFunctions.divide(25, 5)).toBe(5)
})

describe('Math Functions', () => {
    test('adds num1 and num2', () => {
        expect(myFunctions.add(1, 2)).toBe(3)
    })

    test('multiplies num1 and num2', () => {
        expect(myFunctions.multiply(3, 3)).toBe(9)
    })

    test('subtracts num1 and num2', () => {
        expect(myFunctions.subtract(9, 3)).toBe(6)
    })

    test('divides num1 and num2', () => {
        expect(myFunctions.divide(3, 3)).toBe(1)
    })
})




