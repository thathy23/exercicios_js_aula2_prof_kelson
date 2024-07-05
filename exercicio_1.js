/**Faça um script que tenha três variáveis:
○ var nome
○ let sobreNome
○ const cpf
nome e cpf devem estar em um escopo global sobreNome deve estar dentro de uma função A execução do programa 
deve imprimir o nome completo na ordem correta (com quebra de linha):
○ Nome
○ Sobrenome
○ CPF
○ Outra linha com uma mensagem concatenando os valores. */

var nome = "Tatiane";
const cpf = "055469365-00";

function exibeSobrenome() {
    let sobrenome = "Fontes";

console.log (nome)
console.log (sobrenome);
console.log (cpf);

console.log ("Nome completo: " + nome, sobrenome + "\n" + "CPF: " + cpf);

}

exibeSobrenome();