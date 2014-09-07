function Pong(player1, player2){
  this.game = new Phaser.Game(640, 380, Phaser.CANVAS, '', { preload: this.preload, create: this.create, update: this.update });
  this.player1 = player1
  this.player2 = player2
}

Pong.prototype.preload = function(){
  this.game.load.image('bet', 'assets/bet.png');
  this.game.load.image('ball', 'assets/ball.png');
}

Pong.prototype.create = function(){
  // cursors = this.game.input.keyboard.createCursorKeys();


  this.ball = new Ball(this.game)
}

Pong.prototype.update = function(){

}
