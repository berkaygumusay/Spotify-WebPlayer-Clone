const heart = document.querySelector("#like-music");
const playButton = document.getElementById("playButton");
const shuffleButton = document.getElementById("shuffleButton");
heart.addEventListener("click",makeGreen);
playButton.addEventListener("click",(e) => {
    if(e.target.className === 'button-item fa-sharp fa-solid fa-play black-text'){
        e.target.className = 'button-item fa-sharp fa-solid fa-pause  black-text';
    }
    else{
        e.target.className = 'button-item fa-sharp fa-solid fa-play black-text';
    }
})
shuffleButton.addEventListener("click",makeGreen);

function makeGreen(e){
   
    if(e.target.className.includes('grey-text')){
        e.target.className = e.target.className.replace('grey-text','green-text') 
    }
    else{
        e.target.className =  e.target.className.replace('green-text','grey-text')
    }
}


