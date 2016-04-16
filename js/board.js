var Snake = require("./snake");

function Board(bound){
  this.snake = new Snake();
  this.bound = bound;
}

Board.prototype.isOver = function () {
  return (this.snake.isCollided() || this.edgeCollision());
};

Board.prototype.edgeCollision = function(){
  var head = this.snake.head();
  return (head[0] > 0 || head[0] < this.bound
    || head[1] > 0 || head[1] < this.bound );
};

module.exports = Board;
