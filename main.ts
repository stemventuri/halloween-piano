input.onPinPressed(TouchPin.P0, function () {
    music.playTone(330, music.beat(BeatFraction.Half))
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.clearScreen()
})
basic.showIcon(IconNames.Happy)
