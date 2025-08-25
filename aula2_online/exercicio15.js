const prompt = require("prompt-sync")();

const weight = Number(prompt("Digite seu peso (kg): "));
const userHeight = Number(prompt("Digite sua altura (m): "));
const bmi = weight / (userHeight ** 2);
console.log("BMI =", bmi.toFixed(2));
if (bmi < 18.5) {
    console.log("Abaixo do peso");
} else if (bmi < 25) {
    console.log("Peso normal");
} else if (bmi < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}