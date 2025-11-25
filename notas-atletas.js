let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

for (let i = 0; i < atletas.length; i++){
    let atleta = atletas[i];

    // A função sort ordena os elementos de um array. Aqui, está sendo usada para ordenar as notas em ordem crescente.
    // Usamos o .slice() para criar uma cópia do array original antes de ordenar, para não modificar o array original.
    let notasOrdenadas = atleta.notas.slice().sort((a, b) => a - b);

    // A função slice retorna uma cópia de parte de um array, de um início a um fim.
    let notasComputadas = notasOrdenadas.slice(1, notasOrdenadas.length -1);

    let soma = 0;
    // A função forEach executa uma função para cada elemento de um array.
    notasComputadas.forEach(nota => {
        soma += nota;
    });
    let media = soma / notasComputadas.length;
    
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${notasComputadas}`);
    console.log(`Média Válida: ${media}`);
    console.log();
}

