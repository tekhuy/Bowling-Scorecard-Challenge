var Frame = function() {

  this.pins = [1, 2, 3, 4, 5, 6, 7, 8 , 9 , 10];

};

Frame.prototype.resetPins = function() {
  return this.pins;
};

Frame.prototype.receiveBowl = function(player) {
  player.bowl();
};

Frame.prototype.strike = function() {
  this.pins = [];
};

