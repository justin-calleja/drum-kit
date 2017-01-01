import React, { Component } from 'react';
import Instrument from './Instrument';
import audioPath from '../../../sounds/openhat.wav';

class OpenHat extends Component {

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

OpenHat.defaultProps = {
  sound: 'openhat'
};

export default OpenHat;
