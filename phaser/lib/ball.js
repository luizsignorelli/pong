function Ball(game){
  this.game = game
  this.ballReleased = false
  this.ballSpeed = 300

  this.ball = game.add.sprite(game.world.centerX, game.world.centerY, 'ball')
  this.ball.anchor.setTo(0.5, 0.5)

  game.physics.enable(this.ball, Phaser.Physics.ARCADE)
  this.ball.body.collideWorldBounds = true
  this.ball.body.bounce.set(1)

  spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  spacebar.onDown.add(this.releaseBall(), this.game);
}

Ball.prototype.releaseBall = function() {
  var self = this;
  var ball = self.ball;
  return function(){
    if (!self.ballReleased) {
      ball.body.velocity.x = self.ballSpeed
      ball.body.velocity.y = -self.ballSpeed/2
      self.ballReleased = true
    }
  }
}
