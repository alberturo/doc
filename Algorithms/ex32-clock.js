// Make a clock which in real time shows the time each second.

function clock1() {
  setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`);
  }, 1000);
}

clock1();

class Clock2 {
  constructor() {
    this.date = new Date();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
  }
  refresh(seconds) {
    this.seconds += seconds;
    // refresh seconds
    if (this.seconds >= 60) {
      this.minutes++;
      this.seconds = 0;
    }
    // refresh minutes
    if (this.minutes >= 60) {
      this.hours++;
      this.minutes = 0;
    }
    // refresh hours
    if (this.hours >= 24) {
      this.hours = 0;
    }
  }
  show() {
    this.refresh(1);
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }
  turnOn() {
    setInterval(() => {
      this.show();
    }, 1000);
  }
}

let myWatch = new Clock2();
myWatch.turnOn();
