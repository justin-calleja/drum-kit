import React, { Component } from 'react';
import Instrument from './Instrument';
import audioPath from '../../../sounds/boom.wav';

class Boom extends Component {

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

Boom.defaultProps = {
  sound: 'boom'
};

export default Boom;
