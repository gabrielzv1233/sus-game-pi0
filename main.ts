controller.combos.attachCombo("bba", function () {
    info.startCountdown(3)
    mySprite.sayText("press B to cancal reset")
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`SUS go right`,
    100,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`SUS go left`,
    100,
    false
    )
    controller.moveSprite(mySprite)
})
info.onCountdownEnd(function () {
    game.reset()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`SUS go right`,
    100,
    false
    )
    controller.moveSprite(mySprite)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`SUS go left`,
    100,
    false
    )
    controller.moveSprite(mySprite)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.A.isPressed()) {
    	
    }
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`floor1`)
mySprite = sprites.create(assets.image`SUS`, SpriteKind.Player)
let killme = sprites.create(assets.image`not sus left`, SpriteKind.Player)
mySprite.setStayInScreen(true)
killme.setStayInScreen(true)
info.changeScoreBy(-1)
forever(function () {
    if (controller.B.isPressed()) {
        info.stopCountdown()
        mySprite.sayText("")
    }
    while (mySprite.overlapsWith(killme)) {
        tiles.placeOnRandomTile(killme, assets.tile`tile floor`)
        info.changeScoreBy(1)
        console.log(info.highScore())
    }
})
