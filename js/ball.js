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

  this.xVelocity = -5
  this.yVelocity = 2
}

Ball.prototype.update = function () {
  Entity.prototype.update.apply(this, arguments)
  if( this.y + this.height > game.height || this.y < 0){
    this.yVelocity *= -1
  }

  if ( this.x < 0 || this.x > game.width ) this.reset()

}
