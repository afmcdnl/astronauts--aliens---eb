// when the micro:bit is turned on , the following commands will be initiated
let Alien: game.LedSprite = null
let Laser: game.LedSprite = null
// White parts show what LEDs will be illuminated
basic.showLeds(`
    . # # . .
    # . . # .
    . . # . .
    # . . # .
    . # # . .
    `)
// Image will remain on screen for 500ms
basic.pause(500)
// White parts show what LEDs will be illuminated
basic.showLeds(`
    . # # . .
    # . . # .
    . . # . .
    . # . . .
    # # # # .
    `)
// Image will remain on screen for 500ms
basic.pause(500)
// White parts show what LEDs will be illuminated
basic.showLeds(`
    . . # . .
    . # # . .
    . . # . .
    . . # . .
    . # # # .
    `)
// Image will remain on screen for 500ms
basic.pause(500)
// screen is cleared
basic.clearScreen()
// String is displayed. "GO!" will be seen on the micro:bit
basic.showString("GO!")
// Variable 'Astronaut' is set as a sprite at x:2 y:4
let Astronaut = game.createSprite(2, 4)
// Score begins at 0
game.setScore(0)
// Lives begin at 3
game.setLife(3)
// While the micro:bit is turned on
basic.forever(function () {
    // IF statement that determines certain outcomes for certain scenarios
    // IF button A is pressed then the following commands will be initiated
    if (input.buttonIsPressed(Button.A)) {
        // Variable 'Laser' is set where the variable 'Astronaut' is set
        Laser = game.createSprite(Astronaut.get(LedSpriteProperty.X), Astronaut.get(LedSpriteProperty.Y))
        // Brightness of the sprite for variable 'Laser' is set to 255
        Laser.set(LedSpriteProperty.Brightness, 200)
        // Repeat the following commands 4 times. The number of potential spaces that the laser could move = number times repeated
        for (let index = 0; index < 4; index++) {
            // sprite for the variable 'Laser' moves  by -1 units in the y-value 
            Laser.change(LedSpriteProperty.Y, -1)
            // Speed of the Laser
            basic.pause(50)
            // IF statement that determines certain outcomes for certain scenarios
            // IF the sprite for variable 'Laser' touches the sprite for the variable 'Alien' then the following commands will be initiated
            if (Laser.isTouching(Alien)) {
                // Sprite for variable 'Alien' is deleted
                Alien.delete()
                // Sprite for variable 'Laser' is deleted
                Laser.delete()
                // Score increases by 1
                game.addScore(1)
            }
        }
        // IF statement that determines certain outcomes for certain scenarios
        // IF he y-value of the sprite for the variable 'Laser' is less than or equal to 0 then the following commands are initiated
        if (Laser.get(LedSpriteProperty.Y) <= 0) {
            // The sprite for the variable 'Laser' is deleted 
            Laser.delete()
        }
    }
})
// While the micro:bit is turned on
basic.forever(function () {
    // Variable 'Alien' is set as a sprite at x:0 y:(random number from 0 to 3
    Alien = game.createSprite(0, randint(0, 3))
    // Alien pauses for 25ms before executing any of the following commands.
    basic.pause(25)
    // The brightness of the sprite 'Alien' is set to 180
    Alien.set(LedSpriteProperty.Brightness, 180)
    // Repeat the following commands 4 times. The number of potential spaces that the alien could move = number times repeated
    for (let index = 0; index < 4; index++) {
        // The sprite of the variable 'Alien' moves 1 space
        Alien.move(1)
        // Speed of the alien
        basic.pause(500)
    }
    // IF statement that determines certain outcomes for certain scenarios
    // If the sprite for the variable 'Alien' is touching the edge then the following commands are initiated.
    if (Alien.isTouchingEdge()) {
        // The sprite for the variable 'Alien' is deleted
        Alien.delete()
        // One life is removed
        game.removeLife(1)
    }
    // IF statement that determines certain outcomes for certain scenarios
    // IF your score is greater than 5 then the following commands are initiated
    // IF your score is greater than 10 then the following commands are initiated
    // IF your score is greater than 15 then the following commands are initiated
    // IF your score is greater than 25 then the following commands are initiated
    if (game.score() > 5) {
        // Speed of the Alien
        basic.pause(400)
    } else if (game.score() > 10) {
        // Speed of the Alien
        basic.pause(300)
    } else if (game.score() > 15) {
        // Speed of the Alien
        basic.pause(200)
    } else if (game.score() > 25) {
        // Speed of the Alien
        basic.pause(50)
    } else {
        // Speed of the Alien
        basic.pause(500)
    }
})
