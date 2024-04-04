export default function reverseString(str) {
    let res = '';
    if (str.length <= 1) {
        return str;
    }
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res
}