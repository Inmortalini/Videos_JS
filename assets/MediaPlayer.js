function MediaPlayer(config) {
  this.Media = config.el;
  this.plugins = config.plugins || [];
  this._initPLugins();//Inicializacion
}
//funcion que no inicia el autoRun de nuestros plugins(en este caso solo tenemos uno)
MediaPlayer.prototype._initPLugins = function() {
    this.plugins.forEach(element => {
        element.run(this)
    });
  };
  //funcion mute para que se calle el video antes de empezar
  MediaPlayer.prototype.mute = function() {
    this.Media.muted=true;
  };
  //muteUnmute Function
  MediaPlayer.prototype.unmuteMute = function() {
    if(this.Media.muted){
        this.Media.muted=false
    }
    else{
        this.Media.muted=true
    }
  };
MediaPlayer.prototype.play = function() {
  this.Media.play();
};

MediaPlayer.prototype.pause = function() {
  this.Media.pause();
};

MediaPlayer.prototype.togglePlay = function() {
  if (this.Media.paused) {
    this.play();
  } else {
    this.pause();
  }
};

export default MediaPlayer;
// export const temp1 = "Este es un texto ficticio1";
// export const temp2 = "Este es un texto ficticio2";

// export { temp1, temp2 };