function Bot(game, ball, x, y){
  this.game = game
  this.ball = ball
  this.speed = 280

  this.paddle = game.add.sprite(x, y, 'paddle')
  game.physics.enable(this.paddle, Phaser.Physics.ARCADE)
  this.paddle.anchor.setTo(0.5, 0.5)
  this.paddle.body.collideWorldBounds = true
  this.paddle.body.bounce.setTo(1, 1)
  this.paddle.body.immovable = true
}

Bot.prototype.update = function(){
  //move
  if(this.paddle.y - this.ball.ball.y < -15) {
      this.paddle.body.velocity.y = this.speed;
  } else if(this.paddle.y - this.ball.ball.y > 15) {
      this.paddle.body.velocity.y = -this.speed;
  } else {
      this.paddle.body.velocity.y = 0;
  }
}