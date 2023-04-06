class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++
      if(printTimeCallback) printTimeCallback()
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60
  }

  getCentiseconds() {
		return this.currentTime % 100;
	}

  computeTwoDigitNumber(value) {
    let string = value.toString()
    // .padStart(totalDigit, "digitToFill")
    return string.padStart(2, "0")
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minute = this.computeTwoDigitNumber(this.getMinutes())
    let second = this.computeTwoDigitNumber(this.getSeconds())
    let centiSecond = this.computeTwoDigitNumber(this.getCentiSeconds())

    return `${minute}:${second}.${centiSecond}`
  }
}
