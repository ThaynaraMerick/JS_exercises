const prompt = require("prompt-sync")();

const age = Number(prompt("Digite sua idade: "));

if (age >= 18){
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
