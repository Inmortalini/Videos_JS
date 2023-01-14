function mediaPlayer(config) {
  this.media = config.el;
}

mediaPlayer.prototype.play = function() {
  this.media.play();
};

mediaPlayer.prototype.pause = function() {
  this.media.pause();
};

mediaPlayer.prototype.togglePlay = function() {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};

export default mediaPlayer;
// export const temp1 = "Este es un texto ficticio1";
// export const temp2 = "Este es un texto ficticio2";

// export { temp1, temp2 };