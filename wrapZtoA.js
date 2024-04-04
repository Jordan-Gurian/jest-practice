import isAlphabetic from './isAlphabetic';

export default function wrapZtoA(char, factor) {
    const charCodeLowerA = 97;
    const charCodeLowerZ = 122;
    const charCodeUpperA = 65;
    const charCodeUpperZ = 90;

    const charCode = char.charCodeAt(0);
    if (!isAlphabetic(char)) {
        return null
    }

    if (!isAlphabetic(String.fromCharCode(charCode + factor))) {
        if (charCode >= charCodeUpperA) {
            return String.fromCharCode(charCode + factor - 
            charCodeUpperZ + charCodeUpperA - 1)
        }
        return String.fromCharCode((charCode + factor) - 
        charCodeLowerZ + charCodeLowerA - 1)
    }
    return String.fromCharCode(charCode + factor)

}