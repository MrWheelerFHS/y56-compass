basic.forever(function () {
    while (input.compassHeading() > 340 || input.compassHeading() < 20) {
        basic.showLeds(`
            # . . # .
            # # . # .
            # . # # .
            # . # # .
            # . . # .
            `)
    }
    while (input.compassHeading() < 200 && input.compassHeading() > 160) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . . # . .
            # . . # .
            . # # . .
            `)
    }
    while (input.compassHeading() < 110 && input.compassHeading() > 70) {
        basic.showLeds(`
            . # # # #
            . # . . .
            . # # # .
            . # . . .
            . # # # #
            `)
    }
    while (input.compassHeading() < 290 && input.compassHeading() > 250) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . # . #
            # # . # #
            # . . . #
            `)
    }
    basic.showNumber(input.compassHeading())
})
