import React, { Component } from 'react';
import wheelnav from 'wheelnav';

const slicePath = wheelnav.slicePath;

class MoodSpinner extends Component {
  
  constructor() {
    super();
    wheel: wheelnav
    menuContainer: HTMLElement
  
  }
  componentDidMount() {
   
  }

  render() {
    let state = this.state;
    const myWheelnav = new wheelnav('wheelnav');
    console.log(myWheelnav)
    myWheelnav.slicePathFunction = slicePath().DonutSlice;
    myWheelnav.colors = new Array('mediumorchid', 'royalblue', 'darkorange');
    myWheelnav.createWheel("Check", "Check2", "Check3");
    return (
      <div>
        <div id="wheelnav"></div>
      </div>
    );
  }
}

export default MoodSpinner;