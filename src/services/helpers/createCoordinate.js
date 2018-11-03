import { isValidCoordNumber } from '../utils';

const createCoordinate = (defaultX, defaultY) => {
  return class Coordinate{
    constructor(x, y){
      this.x = (isValidCoordNumber(x)) ? x : defaultX;
      this.y = (isValidCoordNumber(y)) ? y : defaultY;
    }
  };
};

export default createCoordinate;