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

    select = () => {
        this.element.style.backgroundColor = this.color
        this.element.style.boxShadow = `0 0 17px 0 ${this.color}`
    }

    deselect = () => {
        this.element.style.backgroundColor = "transparent"
        this.element.style.boxShadow = "none"
    }
}
