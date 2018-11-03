import React from 'react';
import MarsRoverAppService from "../src/services/MarsRoverAppService";

class IndexPage extends React.Component{
  constructor(props){
    super(props);
    this.marsRoverAppService = new MarsRoverAppService();
    this.marsRoverAppService.launchMission();
  }

  render(){
    return (
      <div>
        <p>Todo Implement the UI </p>
      </div>
    )
  }
}

export default IndexPage;