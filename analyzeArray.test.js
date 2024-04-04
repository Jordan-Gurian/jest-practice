import analyzeArray from './analyzeArray';

test('has expected properties', () => {
    expect(analyzeArray([1])).toHaveProperty('average');
    expect(analyzeArray([1])).toHaveProperty('max');
    expect(analyzeArray([1])).toHaveProperty('min');
    expect(analyzeArray([1])).toHaveProperty('length');
})

test('null for non-array', () => {
    expect(analyzeArray('dog')).toBe(null);
});

test('average calc', () => {
    expect(analyzeArray([2, 4, 6])).toMatchObject({average: 4});
});

test('min calc', () => {
    expect(analyzeArray([2, 4, 6])).toMatchObject({min: 2});
});

test('max calc', () => {
    expect(analyzeArray([2, 4, 6])).toMatchObject({max: 6});
});

test('length calc', () => {
    expect(analyzeArray([2, 4, 6])).toMatchObject({length: 3});
});

test('deplicate numbers', () => {
    expect(analyzeArray([2, 4, 6, 2, 6])).toMatchObject({average: 4});
    expect(analyzeArray([2, 4, 6, 2, 6])).toMatchObject({min: 2});
    expect(analyzeArray([2, 4, 6, 2, 6])).toMatchObject({max: 6});
    expect(analyzeArray([2, 4, 6, 2, 6])).toMatchObject({length: 5});

});

test('letters mixed into array', () => {
    expect(analyzeArray([2, 'a', 6, 2, 6])).toBe(null)

});