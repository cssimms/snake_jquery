var Snake = require("./snake");

function Board(bound){
  this.snake = new Snake();
  this.bound = bound;
  this.numOfApples = 20;
  this.apples = [];
  this.oldApples = [];
  this.placeApples();
}

Board.prototype.placeApples = function () {
  while (this.apples.length < this.numOfApples){
    this.apples.push(this.generateRandPos());
  }
};

Board.prototype.generateRandPos = function () {
  var x = Math.floor(Math.random() * this.bound);
  var y = Math.floor(Math.random() * this.bound);
  return [x,y];
};

Board.prototype.registerApples = function () {
  this.oldApples = [];
  for (var i = 0; i < this.apples.length; i++){

    if (this.snake.equals(this.snake.head(), this.apples[i])){
      this.snake.grow(3);
      this.oldApples.push(this.apples.splice(i, 1));
      this.placeApples();
    }
  }
};

Board.prototype.isOver = function () {
  return (this.snake.isCollided() || this.edgeCollision());
};

Board.prototype.edgeCollision = function(){
  var head = this.snake.head();
  return (head[0] < 0 || head[1] < 0) ||
    (head[0] > this.bound || head[1] > this.bound);
};

module.exports = Board;
