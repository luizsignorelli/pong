function Paddle(ball){
  Entity.call(this)

  this.ball = ball

  this.width = 20
  this.height = 100

  this.score = 0

  this.y = game.height / 2 - this.height / 2

  this.ensureThePlayerIsInsideTheCanvas = function() {
    this.y = Math.min(Math.max(this.y, 0), game.height - this.height)
  }

  this.hitTheBall = function(){
    if (this.intersect(this.ball)){
      this.ball.xVelocity *= -1
    }
  }
}
Paddle.prototype = Object.create(Entity.prototype)
Paddle.prototype.constructor = Paddle

Paddle.prototype.update = function() {
  this.move()

  Entity.prototype.update.apply(this, arguments)

  this.ensureThePlayerIsInsideTheCanvas()
  this.hitTheBall()
}

function Player(ball){
  Paddle.call(this, ball)

  this.x = 10

  this.speed = 10

  this.move = function() {
    if (game.keyPressed.up){
      this.yVelocity = -this.speed
    } else if (game.keyPressed.down){
      this.yVelocity = this.speed
    } else {
      this.yVelocity = 0
    }
  }
}
Player.prototype = Object.create(Paddle.prototype)
Player.prototype.constructor = Player


function Bot(ball){
  Paddle.call(this, ball)

  this.x = game.width - this.width - 10
  this.speed = 4

  this.move = function() {
    if (this.y < ball.y){
      this.yVelocity = this.speed
    } else {
      this.yVelocity = -this.speed
    }
  }
}
Bot.prototype = Object.create(Paddle.prototype)
Bot.prototype.constructor = Bot
