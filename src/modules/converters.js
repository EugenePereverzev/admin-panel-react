
const DATE_PARTS = ["yyyy", "mm", "dd", "hh", "ii", "ss"];

const splitDateToParts = (value) => {
    return [
        value.getFullYear(), 
        value.getMonth() + 1, 
        value.getDate(), 
        value.getHours(), 
        value.getMinutes(), 
        value.getSeconds()];
}

const fomateDateParts = (value) => {
    return splitDateToParts(value).map ((part, index) => ('0' + part).slice(-DATE_PARTS[index].length));
}

export const strToDateFormat = (value, format) => {
    const values = value.replace(/[^0-9A-Za-z]/g,'|').split('|');
    const formats = format.toLowerCase().replace(/[^0-9a-z]/g,'|').split('|');
    const nowParts = splitDateToParts (new Date());
    const valueParts = DATE_PARTS.map ((part, index) => (values[formats.indexOf(part)] ?? nowParts[index]) - (part === "mm"));
    return new Date (...valueParts);
};

export const dateToStrFormat = (value, format) => {
    const values = fomateDateParts(value);
    const formats = format.toLowerCase().replace(/[^0-9a-z]/g,'|').split('|');
    const delimeters = format.toLowerCase().replace(/[0-9a-z]/g,'');
    const valueParts = formats.map ((part, index) => (values[DATE_PARTS.indexOf(part)] ?? part) + (delimeters[index] ?? ""));
    return valueParts.join("");
};
