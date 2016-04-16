var Board = require("./board");
var key = require("../vendor/keymaster");

function View($el){
  this.$el = $el;
  this.board = new Board(15);
  this.setupBoard();
  this.setKeyBindings();
  this.startGame();
}

View.prototype.setupBoard = function () {
  for (var i = 0; i < this.board.bound; i++){
    var $ul = $("<ul>");
    $ul.addClass("group");
    for (var j = 0; j < this.board.bound; j++){
      var $li = $("<li>");
      $li.attr("pos", [i,j]);
      if (this.board.snake.segmentsInclude([i,j]))
        $li.addClass("snake");
      $ul.append($li);
    }

    this.$el.append($ul);
  }
};

View.prototype.render = function () {
  var headPos = this.board.snake.head();
  var oldTail = this.board.snake.oldTail;

  $("li[pos='" + headPos + "']").addClass("snake");
  $("li[pos='" + oldTail + "']").removeClass("snake");
};

View.prototype.startGame = function () {
  var that = this;
  var animate = setInterval(function(){
    that.board.snake.move();
    that.checkOver(animate);
    that.render();
  }, 250);
};

View.prototype.setKeyBindings = function () {
  var that = this;
  key('left', function(){
    that.board.snake.turn('w');
  });
  key('right', function(){
    that.board.snake.turn('e');
  });
  key('up', function(){
    that.board.snake.turn('n');
  });
  key('down', function(){
    that.board.snake.turn('s');
  });
};

View.prototype.checkOver = function (fn) {
  if (this.board.isOver()){
    clearInterval(fn);
    alert("youdeadson");
  }
};


module.exports = View;
