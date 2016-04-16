function Snake(){
  this.DIRS = ['n', 'e', 's', 'w'];
  this.MOVES = { n: [-1,0], e: [0,1], s: [1,0], w: [0,-1]};
  this.direction = 'e';
  this.segments = [
    [5,5],
    [5,4],
    [5,3],
  ];
  this.oldTail = [0,0];
  this.unitsToGrow = 0;
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

Snake.prototype.grow = function (num) {
  this.unitsToGrow += num;
};

Snake.prototype.move = function () {
  var move = this.MOVES[this.direction];
  var newHead = this.plus(this.head(), move);

  if (this.unitsToGrow > 0){
    this.oldTail = null;
    this.unitsToGrow -= 1;
  } else {
    this.oldTail = this.segments.pop();
  }
  this.segments.unshift(newHead);
};

Snake.prototype.isCollided = function () {
  for (var i = 1; i < this.segments; i++){
    if (this.equals(this.segments[i], this.head())){
      return true;
    }
  }
  return false;
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
