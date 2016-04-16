

function Snake(){
  this.DIRS = ['n', 'e', 's', 'w'];
  this.MOVES = { n: [-1,0], e: [0,1], s: [1,0], w: [0,-1]};
  this.direction = 'w';
  this.segments = [
    [5,3],
    [5,4],
    [5,5],
    [5,6],
    [5,7]
  ];
  this.oldTail = [0,0];
}

Snake.prototype.turn = function (dir) {
  if (this.isOpposite(dir)) return false;
  this.direction = dir;
};

Snake.prototype.isOpposite = function (dir) {
  var thisInd = this.DIRS.indexOf(this.direction);
  var dirInd = this.DIRS.indexOf(dir);
  return (thisInd % 2 === dirInd % 2);
};

Snake.prototype.head = function(){
  return(this.segments[0]);
};

Snake.prototype.move = function () {
  var move = this.MOVES[this.direction];
  var newHead = this.plus(this.head(), move);
  this.oldTail = this.segments.pop();
  this.segments.unshift(newHead);
};

Snake.prototype.isCollided = function () {
  return (this.segments.indexOf(this.head(), 1) !== -1);
};

Snake.prototype.plus = function (pos1, pos2) {
  return [
    (pos1[0] + pos2[0]),
    (pos1[1] + pos2[1])
  ];
};

Snake.prototype.equals = function (pos1, pos2) {
  return (pos1[0] === pos2[0] && pos1[1] === pos2[1]);
};

Snake.prototype.segmentsInclude = function(pos){
  for(var i = 0; i < this.segments.length; i++){
    if (this.equals(this.segments[i], pos)){
      return true;
    }
  }
  return false;
};

module.exports = Snake;
