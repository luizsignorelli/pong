// The game engine

function Game(canvas) {
  var self = this

  this.context = canvas.getContext("2d")
  this.width = canvas.width
  this.height = canvas.height

  // Keep track of key states
  // Eg.:
  //   game.keyPressed.up === true  // while UP key is pressed
  //   game.keyPressed.up === false // when UP key is released
  this.keyPressed = {}

  $(canvas).on('keydown keyup', function(e) {
    // Convert key code to key name
    var keyName = Game.keys[e.which]

    if (keyName) {
      // eg.: `self.keyPressed.up = true` on keydown
      // Will be set to `false` on keyup
      self.keyPressed[keyName] = e.type === 'keydown'
      e.preventDefault()
    }
  })
}

// Some key codes to key name mapping
Game.keys = {
  32: 'space',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  90: 'z'
}

// Game.prototype.start = function() {
//   var self = this,
//       fps = 60,
//       interval = 1000 / fps // ms per frame
//
//   setInterval(function() {
//     self.update()
//     self.draw()
//   }, interval)
// }

Game.prototype.update = function() {
  this.entities.forEach(function(entity) {
    if (entity.update) entity.update()
  })
}

Game.prototype.draw = function() {
  var self = this

  this.entities.forEach(function(entity) {
    if (entity.draw) entity.draw(self.context)
  })
}

// Better game loop
Game.prototype.start = function() {
  var self = this
  this.lastUpdateTime = new Date().getTime()

  onFrame(function() {
    self.fixedTimeStep()
  })
}

// Instead of relying on a timer, we use a special browser function called
// `requestAnimationFrame(callback)`. It calls the `callback` at interval
// synced with the display refresh rate.
// More info at:
// https://developer.mozilla.org/en/docs/Web/API/window.requestAnimationFrame
var onFrame = function(callback) {
  if (window.requestAnimationFrame) {
    requestAnimationFrame(function() {
      callback()
      // requestAnimationFrame only calls our callback once, we need to
      // schedule the next call ourself.
      onFrame(callback)
    })
  } else {
    // requestAnimationFrame is not supported by all browsers. We fall back to
    // a timer.
    var fps = 60
    setInterval(callback, 1000 / fps)
  }
}

// With fixed time steps, each update is done at a fixed interval.
Game.prototype.fixedTimeStep = function() {
  var fps = 60,
      interval = 1000 / fps,
      updated = false

  // While we're not up to date ...
  while (this.lastUpdateTime < new Date().getTime()) {
    this.update()
    updated = true
    // We jump at fixed intervals until we catch up to the current time.
    this.lastUpdateTime += interval
  }

  // No need to draw if nothing was updated
  if (updated) this.draw()
  updated = false
}
