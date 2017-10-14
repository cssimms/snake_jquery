var Snake = require("./snake");

function Board(bound){
  this.snake = new Snake();
  this.bound = bound;
  this.maxApples = 20;
  this.apples = [];
  this.superApple = [];
  this.oldApples = [];
  this.placeApples();
  this.frameCount = 0;
};

Board.prototype.placeApples = function () {
  while (this.apples.length < this.maxApples){
    this.apples.push(this.generateRandPos());
  }
};

Board.prototype.placeSuperApple = function(){
  this.oldSuperApple = this.superApple;
  this.superApple = this.generateRandPos();
};

Board.prototype.placePowerUps = function () {
  this.placeApples();

  if ((this.frameCount >= 489)) {
    this.placeSuperApple();
  }
};

// track frame count, register powerups,
Board.prototype.registerFrame = function () {
  if (this.frameCount >= 491){
    this.frameCount = 0;
  }
  this.oldApples = [];
  for (var i = 0; i < this.apples.length; i++){

    if (this.snake.equals(this.snake.head(), this.apples[i])){
      this.snake.grow(3);
      this.oldApples.push(this.apples.splice(i, 1));
    }
  }
  if (this.snake.equals(this.snake.head(), this.superApple)){
    this.snake.grow(10);
    this.oldSuperApple = this.superApple;
  }
  this.placePowerUps();
  this.frameCount += 1;
};

Board.prototype.isOver = function () {
  return (this.snake.isCollided() || this.edgeCollision());
};

Board.prototype.edgeCollision = function(){
  var head = this.snake.head();
  return (head[0] < 0 || head[1] < 0) ||
    (head[0] > this.bound || head[1] > this.bound);
};

Board.prototype.generateRandPos = function () {
  var x = Math.floor(Math.random() * this.bound);
  var y = Math.floor(Math.random() * this.bound);
  return [x,y];
};
module.exports = Board;
