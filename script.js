const qntdDeCartas = prompt("Quantas cartas você quer jogar?");

let numeroDecartas = Number(qntdDeCartas);
while(numeroDecartas < 4 || numeroDecartas > 14 || numeroDecartas % 2 !== 0){
    numeroDecartas = prompt("Digite um valor par entre 4 e 14");

    numeroDecartas = Number(numeroDecartas);
}

//const distribuiCartas = [];
//let contador = 0;

    //while( numeroDecartas > contador){
    //distribuiCartas.push(contador);
    //console.log(distribuiCartas);
    //contador++;
    //}
    
    let = contador = 0;

    const baralho = document.querySelector('.baralho');
    while(numeroDecartas > contador){
        baralho.innerHTML = baralho.innerHTML + `<div class = "carta${contador}" onclick="virarcarta(this)"><img src="./imagens/front.png"/></div>`; 
        contador++;
    }
