const qntdDeCartas = prompt("Quantas cartas você quer jogar?");

let numeroDecartas = Number(qntdDeCartas);
while(numeroDecartas < 4 || numeroDecartas > 14 || numeroDecartas % 2 !== 0){
    numeroDecartas = prompt("Digite um valor par entre 4 e 14");

    numeroDecartas = Number(numeroDecartas);
}
    let indice = 0;
    let contador = 0;
    
    let array = [];
    console.log(array);
    
    let imagens = ['<img src = "./imagens/bobrossparrot.gif"/>','<img src = "./imagens/bobrossparrot.gif"/>','<img src = "./imagens/explodyparrot.gif"/>','<img src = "./imagens/explodyparrot.gif"/>','<img src = "./imagens/fiestaparrot.gif"/>','<img src = "./imagens/fiestaparrot.gif"/>','<img src = "./imagens/metalparrot.gif"/>','<img src = "./imagens/metalparrot.gif"/>','<img src = "./imagens/revertitparrot.gif"/>','<img src = "./imagens/revertitparrot.gif"/>','<img src = "./imagens/tripletsparrot.gif"/>','<img src = "./imagens/tripletsparrot.gif"/>','<img src = "./imagens/unicornparrot.gif"/>','<img src = "./imagens/unicornparrot.gif"/>'];
    while(numeroDecartas > contador){
        array.push(`${imagens[indice]}`);
        contador ++;
        indice ++;
    }
    array.sort(comparador);

    function comparador(){
        return Math.random() - 0.5;
    }
    contador = 0;
    indice = 0;
    const baralho = document.querySelector('.baralho');
    while(numeroDecartas > contador){
        baralho.innerHTML = baralho.innerHTML + `<div class = "carta${contador}">
        <img src="./imagens/front.png"/><div class = "imagem-fundo">${array[indice]}</div></div>`;
        
        indice++; 
        contador++;
    }