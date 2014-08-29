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

ball = new Ball()
player1 = new Player(ball)
player2 = $("#mode").val() === "1p" ? new Bot(ball) : new Player2(ball)

game.entities = [
  new Background(),
  ball,
  player1,
  player2
  ]
game.draw()


$(function(){
  $("#start").on("click", function(){
    game.start()
    $('canvas')[0].focus()
  })
})
