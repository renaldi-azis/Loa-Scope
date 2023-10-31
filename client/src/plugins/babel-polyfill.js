// Temp comment
const objectToValuesPolyfill = object => Object.keys(object).map(key => object[key]);

Object.values = Object.values || objectToValuesPolyfill;
