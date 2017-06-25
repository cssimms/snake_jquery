var Snake = require("./snake");
var Config = require("./app_config");

function Board(bound){
	this.snake = new Snake();
	this.bound = bound;
	this.maxApples = Config.max_apples;
	this.apples = [];
	this.superApple = [];
	this.oldApples = [];
	this.placeApples();
	this.frameCount = 0;
	this.frameCycle = Config.frame_cycle;
}

Board.prototype.placeApples = function () {
	while (this.apples.length < this.maxApples){
		this.apples.push(this.generateRandPos({ non_snake: true }));
	}
};

Board.prototype.placeSuperApple = function(){
	this.oldSuperApple = this.superApple;
	this.superApple = this.generateRandPos({ non_snake: true });
};

Board.prototype.placePowerUps = function () {
	this.placeApples();

	if ((this.frameCount >= 489)) {
		this.placeSuperApple();
	}
};

// track frame count, register powerups,
Board.prototype.registerFrame = function () {
	if (this.frameCount >= this.frameCycle){
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

Board.prototype.generateRandPos = function (params) {
    let x, y;

    do {
        x = Math.floor(Math.random() * this.bound);
        y = Math.floor(Math.random() * this.bound);
    } while (this.snake.segmentsInclude([x,y]));

	return [x,y];
};

module.exports = Board;
