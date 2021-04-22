input.onButtonPressed(Button.A, function () {
    basic.showString("guess the number ")
    basic.showNumber(randint(1, 10))
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("guess the number")
    basic.showNumber(randint(0, 6))
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("guess the number ")
    basic.showNumber(randint(1, 8))
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
