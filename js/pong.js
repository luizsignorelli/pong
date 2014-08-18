function Background() {}
Background.prototype.draw = function(context) {
  context.fillStyle = '#000'
  context.fillRect(0, 0, game.width, game.height)
}

var game = new Game($('canvas')[0])
game.entities = [new Background(), ball = new Ball(), new Player(ball), new Bot(ball)]
game.start()
$('canvas')[0].focus()