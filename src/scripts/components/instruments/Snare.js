import React, { Component } from 'react';
import Instrument from './Instrument';
import audioPath from '../../../sounds/snare.wav';

class Snare extends Component {

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

Snare.defaultProps = {
  sound: 'snare'
};

export default Snare;
