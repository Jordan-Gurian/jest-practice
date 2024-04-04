import calculator from './calculator';

const myCalculator = calculator();

test('adds 1, 2', () => {
    expect(myCalculator.add(1,2)).toBe(3);
})

test('subtracts 1, 2', () => {
    expect(myCalculator.subtract(1,2)).toBe(-1);
})

test('multiply 1, 2', () => {
    expect(myCalculator.multiply(1,2)).toBe(2);
})

test('divide 1, 2', () => {
    expect(myCalculator.divide(1,2)).toEqual(0.5);
})

test('divide by 0', () => {
    expect(myCalculator.divide(1,0)).toBeFalsy();
})
