import capitalize from './capitalize';

test('empty input', () => {
    expect(capitalize('')).toBe('');
});

test('non-alphabetic char as first char', () => {
    expect(capitalize('!')).toBe('!');
});

test('capital letter as first char', () => {
    expect(capitalize('Example')).toBe('Example');
});

test('lower case letter as first char', () => {
    expect(capitalize('example')).toBe('Example');
})

test('spaces', () => {
    expect(capitalize('  ')).toBe('  ');
})