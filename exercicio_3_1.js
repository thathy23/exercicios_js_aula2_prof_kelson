/**Crie um script que contenha um array chamado temperaturas,que armazena 4 temperaturas em graus Celsius. 
O programa deve:
○ Imprimir todas as temperaturas armazenadas no array.
○ Selecionar uma temperatura aleatória do array.
○ Converter a temperatura selecionada de Celsius para Fahrenheit.
○ Imprimir a temperatura original em Celsius e sua conversão para Fahrenheit.
○ Para converter de Celsius para Fahrenheit:■ F=(C×9/5)+32
○ Utilize a sintaxe temperaturas[Math.floor(Math.random() * temperaturas.length)] para selecionar um item 
aleatório do array. */

const temperaturas = [20,21,22,23,];
var fahrenheit = (temperaturas * 9/5) + 32;

console.log (`As temperatura são: ${temperaturas[0]}°C, ${temperaturas[1]}°C, ${temperaturas[2]}°C, ${temperaturas[3]}°C`)

console.log (`A temperatura sorteada foi: ${temperaturas[Math.floor(Math.random() * temperaturas.length)]}°C`)

console.log (`A temperatura sorteada corresponde à ${(temperaturas[Math.floor(Math.random() * temperaturas.length)]) * 9/5 + 32}°F`)