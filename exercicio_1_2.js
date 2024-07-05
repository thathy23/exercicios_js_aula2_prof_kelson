/**Crie um script que simule o registro de informações de um aluno. O script deve ter três variáveis:
○ var nomeAluno
○ let curso
○ const matricula
As variáveis nomeAluno e matricula devem estar em um escopo global.A variável curso deve estar dentro de uma função.
A função deve retornar uma string que concatene todas as informações do aluno em uma única linha utilizando 
template literals ${var}. */

var nomeAluno = "Meria";
const matricula = 102030;

function mostraCurso () {
    let curso = " SPI "

console.log (`A aluna se chama ${nomeAluno}, sua matrícula é ${matricula} e está cursando ${curso} na Universidade`)     
}

mostraCurso();

