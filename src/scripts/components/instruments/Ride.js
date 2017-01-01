import React, { Component } from 'react';
import Instrument from './Instrument';
import audioPath from '../../../sounds/ride.wav';

class Ride extends Component {

  constructor(props) {
    super(props);
    this.audio = new Audio(audioPath);
  }

  render() {
    if (this.props.isPlaying) {
      this.audio.currentTime = 0;
      this.audio.play()
    }
    return <Instrument {...this.props} />;
  }

}

Ride.defaultProps = {
  sound: 'ride'
};

export default Ride;
