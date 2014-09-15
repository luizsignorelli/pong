function Pong(player1, player2){
  this.goalMargin = 20
  this.game = new Phaser.Game(640, 380, Phaser.CANVAS, '', { preload: this.preload(), create: this.create(), update: this.update() })
  this.player1 = player1
  this.player2 = player2
}

Pong.prototype.preload = function(){
  var self = this
  return function() {
    self.game.load.image('paddle', 'assets/paddle.png')
    self.game.load.image('ball', 'assets/ball.png')
  }
}

Pong.prototype.create = function(){
  var self = this
  return function() {
    self.ball = new Ball(self.game)
    self.player1 = new Player(self.game, self.goalMargin, self.game.world.centerY)
    self.player2 = new Bot(self.game, self.ball, self.game.world.width - self.goalMargin, self.game.world.centerY)
  }
}

Pong.prototype.update = function(){
  var self = this
  return function() {
    self.player1.update()
    self.player2.update()
    self.game.physics.arcade.collide(self.ball.ball, self.player1.paddle, ballHitsBet, null, self)
    self.game.physics.arcade.collide(self.ball.ball, self.player2.paddle, ballHitsBet, null, self)

    self.checkGoal()
  }
}

Pong.prototype.checkGoal = function() {
  if (this.ball.ball.x < this.goalMargin) {
    this.ball.reset()
    this.player2.incrementScore()
  } else if (this.ball.ball.x > this.game.world.width - this.goalMargin) {
    this.ball.reset();
    this.player1.incrementScore()
  }
}

function ballHitsBet (_ball, _bet) {
  var diff = 0;

  if (_ball.y < _bet.y) {
      //If ball is in the left hand side on the racket
      diff = _bet.y - _ball.y;
      _ball.body.velocity.y = (-10 * diff);
  } else if (_ball.y > _bet.y) {
      //If ball is in the right hand side on the racket
      diff = _ball.y -_bet.y;
      _ball.body.velocity.y = (10 * diff);
  } else {
      //The ball hit the center of the racket, let's add a little bit of a tragic accident(random) of his movement
      _ball.body.velocity.y = 2 + Math.random() * 8;
  }
  _ball.body.velocity.y += _bet.body.velocity.y
}
