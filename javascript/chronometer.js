class Chronometer {
  constructor() {
    // ... your code goes here
    this.intervalId = 0;
    this.currentTime = 0;

  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;

    }, 1000);
  }
  getMinutes() {
    let currMinutes = 0;
    currMinutes = parseInt(Math.floor(this.currentTime / 60));
    return currMinutes;
    // ... your code goes here
  }
  getSeconds() {
    return this.currentTime % 60;
    // ... your code goes here
  }
  twoDigitsNumber(number) {
    let newString = ('0' + number).slice(-2);

    return newString;
    // ... your code goes here
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }
}
