import createCoordinate from '../helpers/createCoordinate';
import { isValidCoordNumber } from '../utils';

const DEFAULT_MAX_X_SURFACE = 5;
const DEFAULT_MAX_Y_SURFACE = 5;
class MarsRoverSurface{
  constructor(x, y){
    this.coordinate = new (createCoordinate(DEFAULT_MAX_X_SURFACE, DEFAULT_MAX_Y_SURFACE))(x, y);
  }

  setBoundCoords = (x, y) => {
    this.coordinate.x = (isValidCoordNumber(x)) ? x : this.coordinate.x;
    this.coordinate.y = (isValidCoordNumber(y)) ? x : this.coordinate.y;
  };

  getBoundCoors(){
    return this.coordinate;
  }
}

export default MarsRoverSurface;