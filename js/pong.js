function Background() {}
Background.prototype.draw = function(context) {
  context.fillStyle = '#000'
  context.fillRect(0, 0, game.width, game.height)

  context.fillStyle = '#fff'
  context.font = "40px monospace"
  context.fillText(player1.score, game.width * 3 / 8, 50)
  context.fillText(player2.score, game.width * 5 / 8, 50)
}

var game = new Game($('canvas')[0])
game.entities = [
  new Background(),
  ball = new Ball(),
  player1 = new Player(ball),
  player2 = new Bot(ball)]
game.start()
$('canvas')[0].focus()
