class Paint {
  constructor (colour, volume){
    this.colour = colour;
    this.volume = volume;
  }

  isEmpty(){
    if (!this.volume){
      return true;
    };
  };
}
module.exports = Paint;
