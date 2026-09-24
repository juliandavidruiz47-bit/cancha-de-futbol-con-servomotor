input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(90)
    servos.P0.setAngle(90)
    goles += 1
    basic.showNumber(goles)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(0)
    servos.P0.setAngle(0)
    goles = 0
    basic.showNumber(goles)
})
let goles = 0
goles = 0
basic.showNumber(0)
