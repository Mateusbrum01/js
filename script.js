////////////01/////////////////////

let vezes = prompt("Quantos números você quer somar?");
if(vezes <= 1){
    window.alert("Insira um valor correto!")
} else {
    let n1 = prompt("Primeiro número: ");
    let n2 = prompt("Segundo número: ");
    let soma = Number(n1) + Number(n2);
    for(i=2; i<vezes; i++){
        n3 = prompt("Próximo número: ");
        soma = soma + Number(n3);
    } 
    alert(`A soma total foi ${soma}!`);
}

//////////////////02/////////////////

function iniciarContagem(){
    let timer = 10;

    const Interval = setInterval(function() {
        contagemRegressiva();
        timer--;

        if(timer<1){
            clearInterval(Interval);
            
            console.log("Lançamento!");
        }
    } , 1000)

    function contagemRegressiva(){
        console.log(timer);

    }
    
}

iniciarContagem();

///////////////////03//////////////////////

function saldoAnual(){
    let ganhoJan = document.getElementById("ganhoJan").value;
    let ganhoFev = document.getElementById("ganhoFev").value;
    let ganhoMar = document.getElementById("ganhoMar").value;
    let ganhoAbr = document.getElementById("ganhoAbr").value;
    let ganhoMai = document.getElementById("ganhoMai").value;
    let ganhoJun = document.getElementById("ganhoJun").value;
    let ganhoJul = document.getElementById("ganhoJul").value;
    let ganhoAgo = document.getElementById("ganhoAgo").value;
    let ganhoSet = document.getElementById("ganhoSet").value;
    let ganhoOut = document.getElementById("ganhoOut").value;
    let ganhoNov = document.getElementById("ganhoNov").value;
    let ganhoDez = document.getElementById("ganhoDez").value;
    let despJan = document.getElementById("despJan").value;
    let despFev = document.getElementById("despFev").value;
    let despMar = document.getElementById("despMar").value;
    let despAbr = document.getElementById("despAbr").value;
    let despMai = document.getElementById("despMai").value;
    let despJun = document.getElementById("despJun").value;
    let despJul = document.getElementById("despJul").value;
    let despAgo = document.getElementById("despAgo").value;
    let despSet = document.getElementById("despSet").value;
    let despOut = document.getElementById("despOut").value;
    let despNov = document.getElementById("despNov").value;
    let despDez = document.getElementById("despDez").value;
    
    let ganhoBruto = Number(ganhoJan) + Number(ganhoFev) + Number(ganhoMar) + Number(ganhoAbr) + Number(ganhoMai) + Number(ganhoJun) + Number(ganhoJul) + Number(ganhoAgo) + Number(ganhoSet) + Number(ganhoOut) + Number(ganhoNov) + Number(ganhoDez)
    let despesas = Number(despJan) + Number(despFev) + Number(despMar) + Number(despAbr) + Number(despMai) + Number(despJun) + Number(despJul) + Number(despAgo) + Number(despSet) + Number(despOut) + Number(despNov) + Number(despDez)
    
    balancoGeral = ganhoBruto - despesas;
    
    alert(`O seu ganho bruto durante o ano foi de R$${ganhoBruto}!`);
    alert(`As suas despesas durante o ano foram de R$${despesas}!`)
    alert(`O seu balanço geral durante o ano foi de R$${balancoGeral}!`)
    
    if(balancoGeral > 0 ){
        alert("Você teve lucro durante o ano.")
    } else {
        alert("Você teve prejuízo ou saiu no zero durante o ano.")
    }
    }

    //////////////////////04/////////////////////////////

    const numeros = [];
let i; 

for (i = 0; i < 4; i++) {
  const input = prompt("Digite o " + (i + 1) + "º número inteiro:");
  numeros.push(parseInt(input));
}

function compararNumeros(a, b) {
  return b - a;
}

numeros.sort(compararNumeros);

console.log("Números em ordem decrescente:", numeros);

//////////////////05/////////////////////////////

const numeroInput = prompt("Digite um número:");
let numero = parseInt(numeroInput);

console.log("Número original:", numero);

if (numero % 2 === 0) {
  numero = numero + 1;
  console.log("O número era par, foi transformado em ímpar:", numero);
} else {
  numero = numero + 1;
  console.log("O número era ímpar, foi transformado em par:", numero);
}
console.log("Número transformado:", numero);

//////////////////06//////////////////////

const letra = prompt("Digite uma letra:");
const letraMinuscula = letra.toLowerCase();
const vogais = ['a', 'e', 'i', 'o', 'u'];

if (vogais.includes(letraMinuscula)) {
  console.log(letra + " é uma vogal.");
} else if (letraMinuscula >= 'a' && letraMinuscula <= 'z') {
  console.log(letra + " é uma consoante.");
} else {
  console.log("Entrada inválida. Por favor, digite apenas uma letra.");
}

/////////////////////07////////////////////////

const cardapio = {
    "chocolate": 1.50,
    "morango": 2.50,
    "creme": 2.50,
    "manga": 3.20,
    "melancia": 3.40,
    "vanilla ice": 3.00,
    "ceu azul": 3.60,
    "brownie": 4.00,
    "hawaiano": 5.00
  };
  
  const saborEscolhido = prompt("Digite o sabor do picolé desejado:");
  const saborFormatado = saborEscolhido.toLowerCase();

  if (cardapio[saborFormatado] !== undefined) {
    const preco = cardapio[saborFormatado];
    console.log("O picolé de " + saborEscolhido + " custa R$" + preco.toFixed(2));
  } else {
    console.log("Desculpe, não temos o sabor '" + saborEscolhido + "'.");
  }

  /////////////////08//////////////////

  const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let palpite; 
let tentativas = 0;
let jogoAcabou = false; 

console.log("--- Jogo de Adivinhação ---");
console.log("Tente adivinhar o número secreto entre 1 e 100!");

while (!jogoAcabou) {
  const inputPalpite = prompt("Tentativa #" + (tentativas + 1) + ": Qual o seu palpite?");

  if (inputPalpite === null) {
    console.log("Você cancelou o jogo.");
    jogoAcabou = true; 
    continue; 
  }

  palpite = parseInt(inputPalpite);
  tentativas++; 

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    alert("'" + inputPalpite + "' não é uma entrada válida. Por favor, digite um NÚMERO entre 1 e 100.");
  } else {
    if (palpite < numeroSecreto) {
      alert("O número secreto é MAIOR que " + palpite);
    } else if (palpite > numeroSecreto) {
      alert("O número secreto é MENOR que " + palpite);
    } else {
      alert("Parabéns! Você acertou o número secreto (" + numeroSecreto + ")!");
      alert("Você precisou de " + tentativas + " tentativas.");
      jogoAcabou = true; 
    }
  }
} 

console.log("Fim do Jogo de Adivinhação.");

////////////////09///////////////////////

const frase = prompt("Digite uma frase:");
let contadorVogais = 0;
const vogais = "aeiouAEIOU";

for (let i = 0; i < frase.length; i++) {
  const caractereAtual = frase[i];

  if (vogais.indexOf(caractereAtual) !== -1) {
    contadorVogais = contadorVogais + 1;
  }
}

console.log("A frase '" + frase + "' possui " + contadorVogais + " vogais.");

/////////////////10/////////////////////////////////

const senha = prompt("Digite uma senha:");

let temTamanhoMinimo = false;
let temMaiuscula = false;
let temMinuscula = false;
let temNumero = false;

if (senha.length >= 8) {
  temTamanhoMinimo = true;
}

for (let i = 0; i < senha.length; i++) {
  const caractere = senha[i];

  if (caractere >= 'A' && caractere <= 'Z') {
    temMaiuscula = true;
  } else if (caractere >= 'a' && caractere <= 'z') {
    temMinuscula = true;
  } else if (!isNaN(parseInt(caractere))) {
    temNumero = true;
  }
}

if (temTamanhoMinimo && temMaiuscula && temMinuscula && temNumero) {
  console.log("Senha válida!");
} else {
  console.log("Senha inválida!");
  if (!temTamanhoMinimo) console.log("- A senha deve ter no mínimo 8 caracteres.");
  if (!temMaiuscula) console.log("- A senha deve ter pelo menos uma letra maiúscula.");
  if (!temMinuscula) console.log("- A senha deve ter pelo menos uma letra minúscula.");
  if (!temNumero) console.log("- A senha deve ter pelo menos um número.");
}

/////////////////11///////////////////////////

const numeroTabuadaInput = prompt("Digite um número para ver a tabuada:");
const numeroTabuada = parseInt(numeroTabuadaInput);

console.log("Tabuada do " + numeroTabuada + ":");

for (let i = 1; i <= 10; i++) {
  const resultado = numeroTabuada * i;
  console.log(numeroTabuada + " x " + i + " = " + resultado);
}

///////////////12//////////////////

// Função para cadastrar produtos
function cadastrarProdutos() {
    const produtos = []; // Array para armazenar os produtos
    let totalCarrinho = 0; // Variável para armazenar o valor total do carrinho


    for (let i = 0; i < 5; i++) {
        const nome = prompt(`Informe o nome do produto ${i + 1}:`);
        const preco = parseFloat(prompt(`Informe o preço do produto ${i + 1}:`));

        // Criação de um objeto para o produto
        const produto = {
            nome: nome,
            preco: preco
        };

        // Adiciona o produto ao array
        produtos.push(produto);
        totalCarrinho += preco; // Adiciona o preço ao total do carrinho
    }

    // Exibe a lista de produtos e o valor total
    console.log("Lista de Produtos:");
    produtos.forEach(produto => {
        console.log(`Produto: ${produto.nome}, Preço: R$ ${produto.preco.toFixed(2)}`);
    });
    
    console.log(`Valor total do carrinho: R$ ${totalCarrinho.toFixed(2)}`);
}

// Chama a função para cadastrar produtos
cadastrarProdutos();
