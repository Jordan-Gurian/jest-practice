export default function isAlphabetic(char) {
    const charCodeLowerA = 97;
    const charCodeLowerZ = 122;
    const charCodeUpperA = 65;
    const charCodeUpperZ = 90;

    const charCode = char.charCodeAt(0);

    if ((charCode >= charCodeUpperA && charCode <= charCodeUpperZ ) ||
        (charCode >= charCodeLowerA && charCode <= charCodeLowerZ)) {
        return true;
    }
    return false;
}