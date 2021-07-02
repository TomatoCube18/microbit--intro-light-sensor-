// Number that means a light level from 0 (dark) to 255 (bright).
basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        led.plotBarGraph(
        input.lightLevel(),
        255
        )
    } else {
        if (input.lightLevel() > 70) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
        }
    }
})
