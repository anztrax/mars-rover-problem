import createCoordinate from '../../helpers/createCoordinate';
import isString from 'lodash/isString';
import isArray from 'lodash/isArray';
import isNil from 'lodash/isNil';
import MarsRoverCompassPoint from './MarsRoverCompassPoint';
import Boundary, { DEFAULT_BOUNDARY_Y, DEFAULT_BOUNDARY_X } from "./Boundary";

const DEFAULT_MARS_ROVER_X_COORD = 0; //left bottom coord
const DEFAULT_MARS_ROVER_Y_COORD = 0; //left bottom coord
class MarsRover{
  constructor(x, y, compassPoint, boundaryX, boundaryY){
    this.coordinate = new (createCoordinate(DEFAULT_MARS_ROVER_X_COORD, DEFAULT_MARS_ROVER_Y_COORD))(x, y);
    this.compassPoint = new MarsRoverCompassPoint(compassPoint);
    this.boundary = new Boundary(boundaryX, boundaryY);
  }

  static get Actions(){
    return {
      L : 'L',  //left rotate
      R : 'R',  //right rotate
      M : 'M'   //move
    }
  }

  static get CompassPoint(){
    return MarsRoverCompassPoint;
  }

  getLocation = () => {
    console.log(`
      x : ${this.coordinate.x}
      y : ${this.coordinate.y}
      point : ${this.compassPoint.point}
    `);
  };


  setLocation = (x, y, compassPoint) => {
    this.coordinate.x = x;
    this.coordinate.y = y;
    this.compassPoint.point = compassPoint;
  };

  setBoundary(boundaryX, boundaryY){
    this.boundary.setBoundary(boundaryX, boundaryY);
  }

  doAction(actions){ //could be list of actions in array (friendly input for frontend) or string
    let fragmentActions = null;
    if(isString(actions)){
      fragmentActions = actions.split('');
    }else if(isArray(actions)){
      fragmentActions = actions;
    }

    if(!isNil(actions)) {
      fragmentActions.map(action => {
        this.resolveAction(action);
      });

      this.getLocation();
      return;
    }

    console.log('false input, mars rover stay');
  }

  resolveAction= (action) => {
    switch(action){
      case MarsRover.Actions.L:
        this.doRotateLeft();
        break;
      case MarsRover.Actions.R:
        this.doRotateRight();
        break;
      case MarsRover.Actions.M:
        this.doMove();
        break;
    }
  };

  doRotateLeft = () =>{
    switch(this.compassPoint.point){
      case MarsRoverCompassPoint.Points.N:
        this.compassPoint.point = MarsRoverCompassPoint.Points.W;
        break;
      case MarsRoverCompassPoint.Points.E:
        this.compassPoint.point = MarsRoverCompassPoint.Points.N;
        break;
      case MarsRoverCompassPoint.Points.S:
        this.compassPoint.point = MarsRoverCompassPoint.Points.E;
        break;
      case MarsRoverCompassPoint.Points.W:
        this.compassPoint.point = MarsRoverCompassPoint.Points.S;
        break;
      default:
        //if the compass point was wrong back to North again
        this.compassPoint.point = MarsRoverCompassPoint.Points.N;
    }
    console.log('do rotate left, curr compass point', this.compassPoint.point);
  };

  doRotateRight = () => {
    switch(this.compassPoint.point){
      case MarsRoverCompassPoint.Points.N:
        this.compassPoint.point = MarsRoverCompassPoint.Points.E;
        break;
      case MarsRoverCompassPoint.Points.E:
        this.compassPoint.point = MarsRoverCompassPoint.Points.S;
        break;
      case MarsRoverCompassPoint.Points.S:
        this.compassPoint.point = MarsRoverCompassPoint.Points.W;
        break;
      case MarsRoverCompassPoint.Points.W:
        this.compassPoint.point = MarsRoverCompassPoint.Points.N;
        break;
      default:
        //if the compass point was wrong back to North again
        this.compassPoint.point = MarsRoverCompassPoint.Points.N;
    }

    console.log('do rotate right, curr compass point', this.compassPoint.point);
  };

  doMove = () =>{
    /**
     * logic :
     * 1. see the direction of mars rover, is not possible to move forward.
     * 2. make sure curr coord is not mentok with boundaries
     */

    switch(this.compassPoint.point){
      case MarsRover.CompassPoint.Points.W:
        if((this.coordinate.x !== DEFAULT_MARS_ROVER_X_COORD)){
          this.coordinate.x = this.coordinate.x - 1;
        }
        break;
      case MarsRover.CompassPoint.Points.N:
        if(this.boundary.coordinate.y === DEFAULT_BOUNDARY_Y || (this.coordinate.y < this.boundary.coordinate.y)){
          this.coordinate.y = this.coordinate.y + 1;
        }
        break;
      case MarsRover.CompassPoint.Points.E:
        if(this.boundary.coordinate.x === DEFAULT_BOUNDARY_X || (this.coordinate.x < this.boundary.coordinate.x)){
          this.coordinate.x = this.coordinate.x + 1;
        }
        break;
      case MarsRover.CompassPoint.Points.S:
        if(this.coordinate.y !== DEFAULT_MARS_ROVER_Y_COORD){
          this.coordinate.y = this.coordinate.y - 1;
        }
        break;
      default:
        //do nothing, because we don't know the coord and what to do :joy:
    }

    console.log(`current position x : ${this.coordinate.x} # y : ${this.coordinate.y}`);
  }
}

export default MarsRover;