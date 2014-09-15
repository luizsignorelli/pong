function Paddle(game, x, y){
  this.game = game

  this.paddle = game.add.sprite(x, y, 'paddle')
  game.physics.enable(this.paddle, Phaser.Physics.ARCADE)
  this.paddle.anchor.setTo(0.5, 0.5)
  this.paddle.body.collideWorldBounds = true
  this.paddle.body.bounce.setTo(1, 1)
  this.paddle.body.immovable = true
}

Paddle.prototype.incrementScore = function(){
  this.score.text = +(this.score.text) + 1;
}
