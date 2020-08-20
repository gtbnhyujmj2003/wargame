input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    if (nummissles < 1) {
        nummissles += 1
        serial.writeNumber(nummissles)
        missile = 0
        while (missile.get(LedSpriteProperty.Y) > 0) {
            missile.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
        missile.set(LedSpriteProperty.Brightness, 0)
        nummissles += -1
        radio.sendValue("missileX", missile.get(LedSpriteProperty.X))
    }
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
radio.onReceivedValue(function (name, value) {
    basic.showArrow(ArrowNames.North)
})
let missile = 0
let nummissles = 0
let player: game.LedSprite = null
player = game.createSprite(2, 4)
