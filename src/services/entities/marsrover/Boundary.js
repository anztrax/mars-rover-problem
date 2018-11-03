import createCoordinate from '../../helpers/createCoordinate';
import {isValidCoordNumber} from "../../utils";

//NOTE : if -1 this means no boundaries at all
const DEFAULT_BOUNDARY_X = -1;
const DEFAULT_BOUNDARY_Y = -1;

class Boundary{
  constructor(boundaryX, boundaryY){
    this.coordinate = new (createCoordinate(DEFAULT_BOUNDARY_X, DEFAULT_BOUNDARY_Y))(boundaryX, boundaryY);
  }

  setBoundary(boundaryX, boundaryY){
    this.coordinate.x = (isValidCoordNumber(boundaryX)) ? boundaryX : this.coordinate.x;
    this.coordinate.y = (isValidCoordNumber(boundaryY)) ? boundaryY : this.coordinate.y;
  }
}

export default Boundary;

export {
  DEFAULT_BOUNDARY_X,
  DEFAULT_BOUNDARY_Y
}