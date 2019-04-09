class Decorator {
  constructor (name){
    this.name = name;
    this.paintStock = [];
  };

  getPaint(paint){
    this.paintStock.push(paint);
  };

  getTotalPaintVolume(){
    let total=0;
    for (var i = 0; i < this.paintStock.length; i++) {
      total += this.paintStock[i].volume;
    };
    return total;
  };

  ableToPaintRoom(room){
    if (this.getTotalPaintVolume()>= room.area){
      return true;
    }
    return false;
  }

  paintRoom(room){
    if (!this.ableToPaintRoom(room)){
      return;
    }
    let paintRequired = room.area;
    for (var i = 0; i < this.paintStock.length; i++) {
      if (paintRequired > this.paintStock[i].volume){
        paintRequired -= this.paintStock[i].volume;
        this.paintStock[i].volume = 0;
      }else{
        this.paintStock[i].volume -= paintRequired;
        room.painted = true;
        return;
      };
    };
  }

  removeEmptyPaint(){
    for (var i = this.paintStock.length -1; i < 0; i--) {
      if (this.painstStock[i].isEmpty()){
        this.paintStock.splice(i,1);
      };
    };
  };
}
module.exports = Decorator;
