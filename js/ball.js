function Ball(){
  Entity.call(this)

  this.width = 20
  this.height = 20

  this.reset()

}
Ball.prototype = Object.create(Entity.prototype)
Ball.prototype.constructor = Ball

Ball.prototype.reset = function(){
  this.x = game.width / 2 - this.width / 2
  this.y = game.height / 2 - this.height / 2

  var min = -5, max = 5
  this.yVelocity = Math.floor(Math.random() * (max - min + 1) + min)
  this.xVelocity = Math.random() > 0.5 ? 5 : -5}

Ball.prototype.hit = function(velocity){
  this.xVelocity *= -1.1 // invert direction and increase speed
  this.yVelocity *= 1.1

  // Get some of the velocity from who hit the ball
  this.yVelocity += velocity / 4
}

Ball.prototype.update = function () {
  Entity.prototype.update.apply(this, arguments)
  if( this.y + this.height > game.height || this.y < 0){
    this.yVelocity *= -1
  }

  // Off screen on right. Player wins.
  if (this.x > game.width) {
    player1.score += 1
    this.reset()
  }

  // Off screen on left. Bot wins.
  if (this.x < -this.width) {
    player2.score += 1
    this.reset()
  }

}
