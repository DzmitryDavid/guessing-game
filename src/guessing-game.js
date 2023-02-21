class GuessingGame { 
    
  setRange(min, max) {
    this.minNum = min;
    this.maxNum = max;
  }
  guess() {
    this.guessNumber = Math.round((this.maxNum + this.minNum) / 2)
    return this.guessNumber
  }
  lower() {
    this.maxNum = this.guessNumber
  }
  greater() {
    this.minNum = this.guessNumber
  }
  
}

module.exports = GuessingGame;
