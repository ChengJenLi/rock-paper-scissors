input.onButtonPressed(Button.A, function () {
    我出拳 = 1
    basic.showIcon(IconNames.Scissors)
})
function 設定初值 () {
    basic.showArrow(ArrowNames.North)
    我出拳 = 0
    對手出拳 = randint(1, 3)
}
function 比輸贏 () {
    if (我出拳 == 對手出拳) {
        basic.showIcon(IconNames.Ghost)
    } else if (我出拳 == 1 && 對手出拳 == 3) {
        basic.showIcon(IconNames.Heart)
    } else if (我出拳 == 2 && 對手出拳 == 1) {
        basic.showIcon(IconNames.Heart)
    } else if (我出拳 == 3 && 對手出拳 == 2) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Sad)
    }
}
input.onButtonPressed(Button.AB, function () {
    我出拳 = 2
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.B, function () {
    我出拳 = 2
    basic.showIcon(IconNames.SmallSquare)
})
let 對手出拳 = 0
let 我出拳 = 0
設定初值()
basic.forever(function () {
    while (我出拳 != 0) {
        比輸贏()
        basic.pause(2000)
        設定初值()
    }
})
