
let myButton = document.querySelector('button');
myButton.addEventListener('click', diceGame);

function diceGame () {

let mytink = document.querySelector('audio');
mytink.play();

let randomNumber1 = Math.floor(Math.random()*6)+1; //random number between 1-6
//let randomImage = 'dice'+randomNumber1+'.png';
//let randomImageSource = 'images/'+randomImage;
 
let image1 = document.querySelector('.img1');
image1.setAttribute('src', 'images/'+'dice'+randomNumber1+'.png');


let randomNumber2 = Math.floor(Math.random()*6)+1;
let randomImage2 = 'dice'+randomNumber2+'.png';
let randomImageSource2 = 'images/'+randomImage2;

let image2 = document.querySelector('.img2');
image2.setAttribute('src', randomImageSource2);

let randomNumber3 = Math.floor(Math.random()*6)+1; 
let randomImage3 = 'dice'+randomNumber3+'.png';
let randomImageSource3 = 'images/'+randomImage3;
 
let image3 = document.querySelector('.img3');
image3.setAttribute('src', randomImageSource3);


let randomNumber4 = Math.floor(Math.random()*6)+1;
let randomImage4 = 'dice'+randomNumber4+'.png';
let randomImageSource4 = 'images/'+randomImage4;

let image4 = document.querySelector('.img4');
image4.setAttribute('src', randomImageSource4);


let myWinner = document.querySelector('#theWinner');

let firstResult = randomNumber1 + randomNumber2;
let secondResult = randomNumber3 + randomNumber4;


if (firstResult>secondResult) {
    myWinner.innerHTML = 'Player 1 Wins!';
} else if (secondResult>firstResult) {
    myWinner.innerHTML = 'Player 2 Wins!';
} else {
    myWinner.innerHTML = 'Draw!';
}
}



