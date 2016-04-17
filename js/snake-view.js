var Board = require("./board");
var key = require("../vendor/keymaster");

function View($el){
  this.$el = $el;
  this.board = new Board(60);
  this.snake = this.board.snake;
  this.setupBoard();
  this.setKeyBindings();
  this.startGame();
}

View.prototype.setupBoard = function () {
  for (var i = 0; i < this.board.bound; i++){
    var $ul = $("<ul>");
    $ul.addClass("group");
    $ul.attr("row-num", i);
    for (var j = 0; j < this.board.bound; j++){
      var $li = $("<li>");
      $li.attr("pos", [i,j]);
      if (this.snake.segmentsInclude([i,j]))
        $li.addClass("snake");
      $ul.append($li);
    }

    this.$el.append($ul);
  }
};

View.prototype.render = function () {
  var headPos = this.snake.head();
  var oldTail = this.snake.oldTail;
  var apples = this.board.apples;
  var oldApples = this.board.oldApples;

  $("li[pos='" + headPos + "']").addClass("snake");
  if (oldTail){
    $("li[pos='" + oldTail + "']").removeClass("snake");
  }
  apples.forEach(function (apple){
    $("li[pos='" + apple + "']").addClass("apple");
  });
  oldApples.forEach(function (apple){
    $("li[pos='" + apple + "']").removeClass("apple");
  });

};

View.prototype.startGame = function () {
  var that = this;
  var animation = setInterval(function(){
    that.snake.move();
    that.board.registerApples();
    that.checkOver(animation);
    that.render();
  }, 100);
};


// this isn't used yet... later trying to implement increaing speed
View.prototype.relativeSpeed = function () {
  var snakeLength = this.snake.segments.length;
  return 100 * snakeLength;
};

View.prototype.setKeyBindings = function () {
  var that = this;
  key('left', function(){
    that.snake.turn('w');
  });
  key('right', function(){
    that.snake.turn('e');
  });
  key('up', function(){
    that.snake.turn('n');
  });
  key('down', function(){
    that.snake.turn('s');
  });
};

View.prototype.checkOver = function (animation) {
  if (this.board.isOver()){
    clearInterval(animation);
    alert("You Lose!");
  }
};


module.exports = View;
