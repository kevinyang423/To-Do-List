const body= document.querySelector("body");
const IMG_NUMBER = 5;
function handleImgLoad(){

}

function paintImage(num){
    const image = new Image();
    image.src= `img/${num+1}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);    
}
function genRandom(){
    const number= Math.floor(Math.random()*IMG_NUMBER);
    return number;
}
function init(){
    const randomNumber=genRandom();
    paintImage(randomNumber);
}

init();
