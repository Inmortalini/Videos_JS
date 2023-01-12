const video=document.querySelector("video");
const button=document.querySelector('button');
function mediaPlayer(config){
    this.media=config.opa
};
mediaPlayer.prototype.go=function(){
    if(this.media.paused){
        this.media.play()
    }else{
        this.media.pause()
    }
}
const player=new mediaPlayer({opa:video});
button.onclick=()=> player.go();