class MarsRoverCompassPoint{
  constructor(point){
    this.point = this.normalizePoint(point);
  }

  static get Points(){
    return {
      N : 'N',
      S : 'S',
      W : 'W',
      E : 'E'
    }
  }

  normalizePoint(point){
    const result = Object.keys(MarsRoverCompassPoint.Points).find(item => item === point);
    if(!result){
      return MarsRoverCompassPoint.Points.N;   //default compass point
    }
  }
}

export default MarsRoverCompassPoint;