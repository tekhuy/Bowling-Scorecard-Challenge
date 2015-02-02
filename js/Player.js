var Player = function(name) {

  this.points = 0;
  this.name = name;
  this.bowl = true;
  
};

Player.prototype.bowl = function() {
  return this.bowl;
};
