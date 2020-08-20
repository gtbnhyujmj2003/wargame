input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    if (nummissles < 1) {
        nummissles += 1
        serial.writeNumber(nummissles)
        bulletA2B = game.createSprite(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
        while (bulletA2B.get(LedSpriteProperty.Y) > 0) {
            bulletA2B.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
        bulletA2B.set(LedSpriteProperty.Brightness, 0)
        nummissles += -1
        radio.sendValue("X-value", bulletA2B.get(LedSpriteProperty.X))
    }
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
radio.onReceivedValue(function (name, value) {
    bullet = game.createSprite(value, 0)
    basic.pause(100)
    while (bullet.get(LedSpriteProperty.Y) < 4) {
        bullet.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    bullet.set(LedSpriteProperty.Brightness, 0)
})
let bullet: game.LedSprite = null
let bulletA2B: game.LedSprite = null
let nummissles = 0
let player: game.LedSprite = null
player = game.createSprite(2, 4)
