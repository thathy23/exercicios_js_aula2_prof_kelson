/**Faça um script que contenha uma função: objetivoDoCurso(tecnologia) A função deve retornar a string: “Meu
objetivo é aprender [parametro tecnologia]” Fora da função defina uma const tecnologia que possua o valor “React”.
Chame a execução da função para que a mesma retorne: “Meu objetivo é aprender React”
○ Faça um exemplo com function
○ Outro com arrow function */

const tecnologia = "React";
const tecnologia2 = "Spring"


function objetivoDoCurso(tecnologia) {
    console.log(`Meu objetivo é aprender ${tecnologia}`)
} 

const objetivoDoCurso2 = (tecnologia2) => {
    console.log(`Meu segundo objetivo  é aprender ${tecnologia2}`)

}
objetivoDoCurso(tecnologia);
objetivoDoCurso2(tecnologia2)


