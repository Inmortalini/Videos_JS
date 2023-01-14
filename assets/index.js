import mediaPlayer from "./MediaPlayer.js";

// import { temp1, temp2 } from './MediaPlayer.js';
// console.log(temp1)
// console.log(mediaPlayer);

const video = document.querySelector("video");
const player = new mediaPlayer({ el: video });

const button = document.querySelector("button");
button.onclick = () => player.togglePlay();

function counter() {
  let count = 0;
  console.log("count")
  return{
    incremento:function(n){
        count++;
    },
    decremento:function(n){count--;},
    getCount:function(){  console.log(count)}
  }}
var clousere=counter();
clousere(5)