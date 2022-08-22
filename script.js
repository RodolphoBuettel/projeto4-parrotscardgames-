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
    
let imagens = ['bobrossparrot','bobrossparrot','explodyparrot','explodyparrot','fiestaparrot','fiestaparrot','metalparrot','metalparrot','revertitparrot','revertitparrot','tripletsparrot','tripletsparrot','unicornparrot','unicornparrot'];
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
    baralho.innerHTML = baralho.innerHTML + `<div class = "cartas" data-character="${array[indice]}">
    <div class = "back-face"><img src="./imagens/front.png"/></div>
    <div class = "front-face"><img src = "./imagens/${array[indice]}.gif"></div></div>`;
    
    indice++; 
    contador++;
}

const cartas = document.querySelectorAll('.cartas');

let cartaVirada = false;
let carta1 = "";
let carta2 = "";
let jogadas = 0;
  function flipCard() {
    if (this === cartaVirada) return;

   
    
    if(carta1 === ""){
        this.classList.add('virada');
        carta1 = this; 
    }else if(carta2 === ""){
        this.classList.add('virada');
        carta2 = this;
        
    }
    jogadas++;
    verificaCarta();
}
function verificaCarta(){
    const primeiraCarta = carta1.getAttribute('data-character');
    console.log(primeiraCarta);
    const segundaCarta = carta2.getAttribute('data-character');
    console.log(segundaCarta);
    if(primeiraCarta === segundaCarta){
        carta1 = '';
        carta2 = '';
        setTimeout(()=>{

            checkEndGame();
        }, 200);
    }else{
        setTimeout(() => {
            carta1.classList.remove('virada');
            carta2.classList.remove('virada');
            carta1 = '';
            carta2 = '';
          }, 1000);
}
}
cartas.forEach(cartas => cartas.addEventListener('click', flipCard));
console.log(cartas);

 function checkEndGame(){
    const desabilita = document.querySelectorAll('.virada');
    
    if(desabilita.length === numeroDecartas){

        alert(`Você ganhou em ${jogadas} jogadas!`);
    }
}
