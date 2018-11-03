import MarsRoverSurface from './entities/MarsRoverSurface';
import MarsRover from './entities/marsrover/MarsRover';

class MarsRoverAppService{
  constructor(){
    this.initData();
  }

  initData = () => {
    this.marsRoverSurface = new MarsRoverSurface(5, 5);
    this.marsRover = new MarsRover();
  };

  //do the step here
  launchMission(){
    //mars rover do the actions
    this.marsRover.setBoundary(10, 10);
    this.marsRover.setLocation(1, 2, MarsRover.CompassPoint.Points.N);
    this.marsRover.getLocation();
    this.marsRover.doAction('LMLMLMLMM');

    //re set the location again
    this.marsRover.setLocation(3, 3, MarsRover.CompassPoint.Points.E);
    this.marsRover.getLocation();
    this.marsRover.doAction('MMRMMRMRRM');
  }
}

export default MarsRoverAppService;