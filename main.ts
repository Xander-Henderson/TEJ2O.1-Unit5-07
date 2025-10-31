/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Alexander
 * Created on: Oct 2025
 * This program turns a servo to 0 degrees
 * and to 180 degrees when clicking A and B
*/

// variable 
const servoNumber1 = robotbit.Servos.S1

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// turn servo to 0
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showString("0")
    basic.showIcon(IconNames.SmallSquare)
    robotbit.Servo(servoNumber1, 0)
    basic.showIcon(IconNames.Happy)
})

// turn servo to 180
input.onButtonPressed(Button.B, function() {
    basic.clearScreen()
    basic.showString("180")
    basic.showIcon(IconNames.SmallSquare)
    robotbit.Servo(servoNumber1, 180)
    basic.showIcon(IconNames.Happy)
})
