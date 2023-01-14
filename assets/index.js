import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./AutoPlay.js"


const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay()],
});
//playPause
const button = document.querySelector("#playPause");
button.onclick = () => player.togglePlay();
//MuteUnmute
const muteUnmute = document.querySelector("#unmuteMute");
muteUnmute.onclick=()=>player.unmuteMute();