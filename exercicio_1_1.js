/**Crie um script que simule um sistema de registro de produtos. O script deve ter três variáveis:
○ var produto
○ let categoria
○ const codigoProduto
As variáveis produto e codigoProduto devem estar em um escopo global.A variável categoria deve estar dentro 
de uma função.A execução do programa deve imprimir os detalhes do produto na ordem correta (com quebra de linha):
○ Produto
○ Categoria
○ Código do Produto */

var produto = "livro";
const codigoProduto = "0001";

function mostraCategoria () {
    
    let categoria = "escolar";
   
console.log (`Produto: ${produto}\nCategoria: ${categoria}\nCódigo do produto: ${codigoProduto}`)

}



mostraCategoria();



