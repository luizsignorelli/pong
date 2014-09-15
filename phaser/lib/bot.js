function Bot(game, ball, x, y){
  Paddle.call(this, game, x, y)
  this.ball = ball
  this.speed = 200

  this.score = game.add.text(game.world.width * 5 / 8, 50, '0', { font: "20px Arial", fill: "#ffffff", align: "left" });
}
Bot.prototype = Object.create(Paddle.prototype)
Bot.prototype.constructor = Bot

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
