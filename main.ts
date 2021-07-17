controller.start.onEvent(ControllerButtonEvent.Pressed, function () {
    music.baDing.play()
    if (flag == 1) {
        flag = 0
    } else {
        flag = 1
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    second.count += 1
    music.baDing.play()
    if (controller.C.isPressed()) {
        second.count = 0
        minute.count = 0
    }
})
controller.C.onEvent(ControllerButtonEvent.Pressed, function () {
    minute.count += 1
    music.baDing.play()
    if (controller.menu.isPressed()) {
        second.count = 0
        minute.count = 0
    }
})
function jishi () {
    if (flag == 0) {
    	
    } else {
        second.count += 1
        if (second.count == 59) {
        	
        }
    }
}
let flag = 0
let minute: DigitCounter = null
let second: DigitCounter = null
scene.setBackgroundColor(9)
second = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 2)
minute = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 2)
second.x = 114
minute.x = 40
flag = 0
game.onUpdateInterval(1000, function () {
    if (flag == 0) {
    	
    } else {
        if (second.count == 0) {
            if (minute.count == 0) {
                music.powerDown.play()
            } else {
                minute.count += -1
                second.count = 59
            }
        } else {
            second.count += -1
        }
    }
})
