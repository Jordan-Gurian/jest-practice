import caesarCipher from './caesarCipher'

test('empty', () => {
    expect(caesarCipher('', 1)).toBe('');
});

test('spaces', () => {
    expect(caesarCipher('  ', 1)).toBe('  ');
});

test('non-alphabetic chars', () => {
    expect(caesarCipher('!$1', 1)).toBe('!$1');
});

test('only alphabtic', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('factor work', () => {
    expect(caesarCipher('abc', 2)).toBe('cde');
});

test('alphabetic and non alphabetic', () => {
    expect(caesarCipher('a1b $c ', 2)).toBe('c1d $e ');
});

test('wrap z to a', () => {
    expect(caesarCipher('az', 2)).toBe('cb');
});

test('captial mixed with lowercase', () => {
    expect(caesarCipher('aBcD', 1)).toBe('bCdE');
});

test('capital and lower case wrapping', () => {
    expect(caesarCipher('zZXx', 3)).toBe('cCAa');
});

