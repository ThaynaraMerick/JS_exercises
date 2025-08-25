const prompt = require("prompt-sync")();

const celsius = Number(prompt("Digite a temperatura em celsius: "));
const fahrenheit = (celsius * 9/5) + 32;
const kelvin = celsius + 273.15;
console.log("Fahrenheit:", fahrenheit);
console.log("Kelvin:", kelvin);