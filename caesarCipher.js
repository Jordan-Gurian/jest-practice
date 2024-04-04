import isAlphabetic from './isAlphabetic';
import wrapZtoA from './wrapZtoA';

export default function caesarCipher(str, factor) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        if (isAlphabetic(str[i])) {
            res += wrapZtoA(String.fromCharCode(str.charCodeAt(i)), factor);
        } else {
            res += str[i];
        }
    }
    return res
}