function mediaAluno() {
    
        // Lógica de Programação
    // Problema: receber 3 notas de um aluno, 
    // calcular e apresentar a média e o resultado
    // se o aluno foi aprovado, reprovado ou ficou de exame.

    console.log ('Início do programa');

    // Declaraçãom das "variáveis" com "let"
    // let nota1;
    // let nota2;
    // let nota3;


    // Declaração  das "variáveis" com "const"
    const nota1 = parseInt(document.getElementById('nota1').value);
    const nota2 = parseInt(document.getElementById('nota2').value);
    const nota3 = parseInt(document.getElementById('nota3').value);

    // calculo da média
    const media = (nota1 + nota2 + nota3) / 3;

    console.log ('A nota1 do aluno é:', nota1);
    console.log ('A nota2 do aluno é:', nota2);
    console.log ('A nota3 do aluno é:', nota3);

    document.getElementById('resultado').innerHTML = 'A média do aluno é: ' + media + '<br>';

    console.log ('A média do aluno é:', media);

    if (media >= 7) {
        console.log('APROVADO');
        document.getElementById('resultado').innerHTML += 'APROVADO';
    } else if (media >= 5) {
        console.log('EXAME');
        document.getElementById('resultado').innerHTML += 'EXAME';
    } else {
        console.log('REPROVADO');
        document.getElementById('resultado').innerHTML += 'REPROVADO';
    }

    // if (media >= 7) {
        //     console.log('APROVADO');
        
        // if (media < 7 && media >= 5) {
            //     console.log('EXAME');
            // } else {
    //     console.log('REPROVADO')
    // }

    // if (media < 5) {
        //     console.log('REPROVADO')
    // }

    console.log ('Fim do programa');
    
}
 mediaAluno();