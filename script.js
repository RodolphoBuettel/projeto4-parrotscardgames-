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
//cartas.setAttribute('data-caracter', `${array[indice]}`);

let cartaVirada = false;
let carta1 = "";
let carta2 = "";

  function flipCard() {
    if (this === cartaVirada) return;

    //if(this.className.includes('virada')){
       // return;
    
    if(carta1 === ""){
        this.classList.add('virada');
        carta1 = this; 
    }else if(carta2 === ""){
        this.classList.add('virada');
        carta2 = this;
        
        verificaCarta();
    }
}
function verificaCarta(){
    console.log(carta1);
    console.log(carta2);
    const primeiraCarta = carta1.getAttribute('data-character');
    const segundaCarta = carta2.getAttribute('data-character');

    if(primeiraCarta === segundaCarta){
        
    }else{
        primeiraCarta.classList.remove('virada1');
        segundaCarta.classList.remove('virada');
    }
}






    //if (!cartaVirada) {
      //cartaVirada = true;
      //primeiraCarta = this;
      //return;
   // }

    //secondCard = this;
    //lockBoard = true;

    //checkForMatch();

 // function checkForMatch() {
    //let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
   // isMatch ? disableCards() : unflipCards();
 // }

  //function disableCards() {
   // firstCard.removeEventListener('click', flipCard);
    //secondCard.removeEventListener('click', flipCard);

   // resetBoard();
 // }

 // function unflipCards() {
    //setTimeout(() => {
    //  firstCard.classList.remove('virada');
     // secondCard.classList.remove('virada');

      //resetBoard();
   // }, 1500);
  //}

  ///function resetBoard() {
   // [hasFlippedCard, lockBoard] = [false, false];
   // [firstCard, secondCard] = [null, null];
 // }


cartas.forEach(cartas => cartas.addEventListener('click', flipCard));
console.log(cartas);
//function virarCarta(carta){
    //const transicao = carta.querySelector('.back-face');
    //transicao.classList.remove('esconder');
    //const virou = carta;
    //virou.classList.add('virada');
    //if('.back-face'.innerHTML !== '.back-face'.innerHTML ){
        //transicao.classList.add('esconder');
        //console.log(transicao);
        //virou.classList.remove('virada');
        //console.log(virou);
    //}
//}
