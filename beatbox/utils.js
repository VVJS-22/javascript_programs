class Beat {
    constructor(audiosrc) {
        this.audio = new Audio(audiosrc)
    }

    play = () => {
        this.audio.currentTime = 0
        this.audio.play();
    }
}


class Button {
    constructor(color, keyCode) {
        this.color = color
        this.keyCode = keyCode
        this.element = document.getElementById(keyCode)
        this.setButtonColor()
    }

    setButtonColor = () => {
        this.element.style.borderColor = this.color
    }
}
