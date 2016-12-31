import React, { Component } from 'react';
import Instrument from './Instrument';

class Ride extends Component {

  play(keyCode) {
    if (this.props.keyCode === keyCode) {
      console.log('playing Ride');
    }
  }

  render() {
    return (
      <div>
        <Instrument {...this.props} />
        <audio data-key={this.props.keyCode} src={this.props.soundFilePath || '../../sounds/ride.wav'}></audio>
      </div>
    );
  }

}

Ride.defaultProps = {
  sound: 'ride'
};

export default Ride;
