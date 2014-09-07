function Player(game, x, y){
  this.game = game
  this.movePaddleUp = false
  this.movePaddleDown = false

  this.paddle = game.add.sprite(x, y, 'paddle')
  game.physics.enable(this.paddle, Phaser.Physics.ARCADE)
  this.paddle.anchor.setTo(0.5, 0.5)
  this.paddle.body.collideWorldBounds = true
  this.paddle.body.bounce.setTo(1, 1)
  this.paddle.body.immovable = true

  cursors = this.game.input.keyboard.createCursorKeys()
  cursors.up.onDown.add(this.paddleUp(), this.game)
  cursors.down.onDown.add(this.paddleDown(), this.game)
  cursors.up.onUp.add(this.stopPaddle(), this.game)
  cursors.down.onUp.add(this.stopPaddle(), this.game)
}

Player.prototype.paddleUp = function() {
  var self = this;
  return function(){
    self.movePaddleUp = true
  }
}

Player.prototype.paddleDown = function() {
  var self = this;
  return function(){
    self.movePaddleDown = true
  }
}

Player.prototype.stopPaddle = function() {
  var self = this;
  return function(){
    self.movePaddleUp = false
    self.movePaddleDown = false
  }
}

Player.prototype.update = function(){
  //move
  if (this.movePaddleUp){
    this.paddle.y -= 5
  }
  else if (this.movePaddleDown){
    this.paddle.y += 5
  }

  //do not extrapolate world heigth
  var playerBetHalfWidth = this.paddle.height / 2;
  if (this.paddle.y < playerBetHalfWidth) {
      this.paddle.y = playerBetHalfWidth
  } else if (this.paddle.y > this.game.height - playerBetHalfWidth) {
      this.paddle.y = this.game.height - playerBetHalfWidth
  }
}
