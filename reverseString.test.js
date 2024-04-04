import reverseString from './reverseString';

test('string length 0', () => {
    expect(reverseString('')).toBe('');
});

test('string length 1', () => {
    expect(reverseString('$')).toBe('$');
});

test('odd number of chars > 1', () => {
    expect(reverseString('cat')).toBe('tac');
});

test('even number of chars > 1', () => {
    expect(reverseString('rabbit')).toBe('tibbar');
});

test('spaces', () => {
    expect(reverseString('    ')).toBe('    ');
});

test('spaces with chars mixed in', () => {
    expect(reverseString('  5  y ')).toBe(' y  5  ');
});