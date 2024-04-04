export default function capitalize(str) {
    const charCodeLowerA = 97;
    const charCodeLowerZ = 122;
    
    if (str.charCodeAt(0) <  charCodeLowerA ||
        str.charCodeAt(0) > charCodeLowerZ ||
        str.length === 0) {
        return str
    }
    return str[0].toUpperCase() + str.slice(1);
}