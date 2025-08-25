# 📘 Lista de Exercícios – JavaScript (Softex)

Este repositório contém a resolução da **Lista de Exercícios de JS** utilizando **JavaScript** no ambiente **Node.js**, com a biblioteca [`prompt-sync`](https://www.npmjs.com/package/prompt-sync) para entrada de dados no terminal.

O objetivo foi praticar os conceitos básicos de programação: **variáveis, operadores, condicionais, entrada/saída de dados e funções matemáticas**.

---

## ⚙️ Tecnologias utilizadas
- Node.js
- JavaScript
- Biblioteca `prompt-sync` para entrada de dados

---

## 📌 Estrutura dos exercícios

### 1 e 2 – Variáveis e saída
- Criação de variáveis (`const`) para nome, idade, altura e se é estudante.  
- Exibição no console com `console.log`.

### 3 – Conversão de tipos
- `String(idade)` → converte número em texto.  
- `parseInt(altura)` → pega somente a parte inteira do número.  

### 4 – Operadores matemáticos
- Soma, subtração, multiplicação, divisão e resto da divisão (`%`).

### 5 – Entrada de dados e cálculo
- Lê número com `prompt`.  
- Multiplica por 10 e exibe o resultado.

### 6 – Precedência de operadores
- Resolve expressão matemática `(10 + 5) * 2 - 20 / 2`.

### 7 – Comparações
- Uso de `>`, `<`, `>=`, `==` e `===` para comparar valores e tipos.

### 8 – Condicional (maioridade)
- Verifica se a idade informada é **maior ou igual a 18**.  
- Exibe “Maior de idade” ou “Menor de idade”.

### 9 – Comparação entre dois números
- Informa qual número é maior ou se são iguais.

### 10 – Média de três notas
- Calcula a média.  
- Exibe “Aprovado” (média ≥ 7) ou “Reprovado”.

### 11 – Calculadora com `switch`
- Pede dois números e uma operação matemática.  
- Executa a operação escolhida.

### 12 – Par ou ímpar
- Verifica se o número informado é par (`% 2 === 0`) ou ímpar.

### 13 – Maior e menor de três números
- Utiliza `Math.max` e `Math.min`.

### 14 – Conversão de temperatura
- Converte Celsius para Fahrenheit e Kelvin.

### 15 – IMC
- Calcula o Índice de Massa Corporal.  
- Classifica: **Abaixo do peso, Normal, Sobrepeso ou Obesidade**.  
- Usa `toFixed(2)` para formatar o resultado com 2 casas decimais.

---

## 📖 Justificativa das escolhas

- **`const`**: usado sempre que o valor não muda, seguindo boas práticas.  
- **`let`**: usado apenas quando o valor precisa ser alterado (ex.: resultado de operações).  
- **Condicionais (`if/else` e `switch`)**: permitem que o programa tome decisões.  
- **Funções matemáticas (`Math.max`, `Math.min`, `%`)**: simplificam cálculos.  
- **Conversões de tipo**: usadas para mostrar diferença entre número, string e inteiro.  
- **`toFixed(2)`**: melhora a legibilidade de números decimais (como no IMC).  
- **`prompt-sync`**: possibilita entrada de dados pelo terminal no Node.js.

---

## 🚀 Conclusão
Esta lista de exercícios demonstra como aplicar conceitos fundamentais de programação em **JavaScript**.

---
